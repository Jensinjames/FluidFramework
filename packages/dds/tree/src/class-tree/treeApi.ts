/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { TreeValue } from "../core";
import {
	EditableTreeEvents,
	LeafNodeSchema,
	Multiplicity,
	TreeStatus,
	isTreeValue,
	valueSchemaAllows,
} from "../feature-libraries";
import { TreeNode } from "../simple-tree";
// eslint-disable-next-line import/no-internal-modules
import { getFlexNode, tryGetFlexNode } from "../simple-tree/flexNode";
// eslint-disable-next-line import/no-internal-modules
import { getClassSchema, getOrCreateNodeProxy } from "../simple-tree/proxies";
import { schemaFromValue } from "./schemaFactory";
import { NodeFromSchema, NodeKind, TreeNodeSchema, TreeLeafValue } from "./schemaTypes";
import { getFlexSchema } from "./toFlexSchema";

/**
 * Provides various functions for analyzing {@link TreeNode}s.
 *
 * @privateRemarks
 * Inlining the typing of this interface onto the `Tree` object provides slightly different .d.ts generation,
 * which avoids typescript expanding the type of TreeNodeSchema and thus encountering
 * https://github.com/microsoft/rushstack/issues/1958.
 * @public
 */
export interface TreeApi {
	/**
	 * The schema information for this node.
	 */
	schema<T extends TreeNode | TreeLeafValue>(
		node: T,
	): TreeNodeSchema<string, NodeKind, unknown, T>;
	/**
	 * Narrow the type of the given value if it satisfies the given schema.
	 * @example
	 * ```ts
	 * if (node.is(myNode, point)) {
	 *     const y = myNode.y; // `myNode` is now known to satisfy the `point` schema and therefore has a `y` coordinate.
	 * }
	 * ```
	 */
	is<TSchema extends TreeNodeSchema>(
		value: unknown,
		schema: TSchema,
	): value is NodeFromSchema<TSchema>;
	/**
	 * Return the node under which this node resides in the tree (or undefined if this is a root node of the tree).
	 */
	parent(node: TreeNode): TreeNode | undefined;
	/**
	 * The key of the given node under its parent.
	 * @remarks
	 * If `node` is an element in a {@link (TreeArrayNode:interface)}, this returns the index of `node` in the list (a `number`).
	 * Otherwise, this returns the key of the field that it is under (a `string`).
	 */
	key(node: TreeNode): string | number;
	/**
	 * Register an event listener on the given node.
	 * @returns A callback function which will deregister the event.
	 * This callback should be called only once.
	 */
	on<K extends keyof TreeNodeEvents>(
		node: TreeNode,
		eventName: K,
		listener: TreeNodeEvents[K],
	): () => void;
	/**
	 * Returns the {@link TreeStatus} of the given node.
	 */
	readonly status: (node: TreeNode) => TreeStatus;
}

/**
 * The `Tree` object holds various functions for analyzing {@link TreeNode}s.
 * @public
 */
export const nodeApi: TreeApi = {
	parent: (node: TreeNode) => {
		const editNode = getFlexNode(node).parentField.parent.parent;
		if (editNode !== undefined) {
			return getOrCreateNodeProxy(editNode);
		}

		return undefined;
	},
	key: (node: TreeNode) => {
		const parentField = getFlexNode(node).parentField;
		if (parentField.parent.schema.kind.multiplicity === Multiplicity.Sequence) {
			// The parent of `node` is a list
			return parentField.index;
		}

		// The parent of `node` is an object, a map, or undefined (and therefore `node` is a root/detached node).
		return parentField.parent.key;
	},
	on: <K extends keyof EditableTreeEvents>(
		node: TreeNode,
		eventName: K,
		listener: EditableTreeEvents[K],
	) => {
		return getFlexNode(node).on(eventName, listener);
	},
	status: (node: TreeNode) => {
		return getFlexNode(node).treeStatus();
	},
	is: <TSchema extends TreeNodeSchema>(
		value: unknown,
		schema: TSchema,
	): value is NodeFromSchema<TSchema> => {
		const flexSchema = getFlexSchema(schema);
		if (isTreeValue(value)) {
			return (
				flexSchema instanceof LeafNodeSchema && valueSchemaAllows(flexSchema.info, value)
			);
		}
		return tryGetFlexNode(value)?.is(flexSchema) ?? false;
	},
	schema<T extends TreeNode | TreeValue>(node: T): TreeNodeSchema<string, NodeKind, unknown, T> {
		if (isTreeValue(node)) {
			return schemaFromValue(node) as TreeNodeSchema<string, NodeKind, unknown, T>;
		}
		return getClassSchema(getFlexNode(node).schema) as TreeNodeSchema<
			string,
			NodeKind,
			unknown,
			T
		>;
	},
};

/**
 * A collection of events that can be raised by a {@link TreeNode}.
 * @public
 */
export interface TreeNodeEvents {
	/**
	 * Raised on a node right after a change is applied to one of its fields or the fields of a descendant node.
	 */
	afterChange(): void;
}
