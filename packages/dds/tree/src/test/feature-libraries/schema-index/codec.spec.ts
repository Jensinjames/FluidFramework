/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { strict as assert } from "assert";

// Allow importing from this specific file which is being tested:
/* eslint-disable-next-line import/no-internal-modules */
import { makeSchemaCodec } from "../../../feature-libraries/schema-index/codec";
/* eslint-disable-next-line import/no-internal-modules */
import { Format } from "../../../feature-libraries/schema-index/format";

import { FieldKindIdentifier, TreeStoredSchema } from "../../../core";
import { typeboxValidator } from "../../../external-utilities";
import { jsonSchema, jsonRoot, SchemaBuilder, leaf } from "../../../domains";
import {
	defaultSchemaPolicy,
	allowsRepoSuperset,
	intoStoredSchema,
} from "../../../feature-libraries";
import { makeCodecFamily } from "../../../codec";
import { EncodingTestData, makeEncodingTestSuite } from "../../utils";
import { library } from "../../testTrees";
import { takeJsonSnapshot, useSnapshotDirectory } from "../../snapshots";

const codec = makeSchemaCodec({ jsonValidator: typeboxValidator });

const schema1 = new SchemaBuilder({
	scope: "json",
	libraries: [jsonSchema],
}).intoSchema(SchemaBuilder.optional(jsonRoot));

const jsonPrimitives = [...leaf.primitives, leaf.null] as const;
const schema2 = new SchemaBuilder({
	scope: "testSchemas",
	libraries: [library],
}).intoSchema(SchemaBuilder.optional(jsonPrimitives));

const testCases: EncodingTestData<TreeStoredSchema, Format> = {
	successes: [
		["json", intoStoredSchema(schema1)],
		["testSchemas", intoStoredSchema(schema2)],
	],
};

describe("SchemaIndex", () => {
	useSnapshotDirectory();

	it("SchemaIndexFormat", () => {
		// Capture the json schema for the format as a snapshot, so any change to what schema is allowed shows up in this tests.
		takeJsonSnapshot(Format);
	});

	it("accepts valid data", () => {
		// TODO: should test way more cases, and check results are correct.
		const cases = [
			{
				version: 1 as const,
				nodes: {},
				root: { kind: "x" as FieldKindIdentifier },
			} satisfies Format,
		];
		for (const data of cases) {
			codec.decode(data);
		}
	});

	it("rejects malformed data", () => {
		// TODO: should test way more cases
		// TODO: maybe well formed but semantically invalid data should be rejected (ex: with duplicates keys)?
		const badCases = [
			undefined,
			null,
			{},
			{ version: "1.0.0" },
			{ version: "1" },
			{ version: "2.0.0" },
			{ version: 1 },
			{ version: 2 },
			{ version: 1, nodeSchema: [], globalFieldSchema: [] },
			{ version: 1, nodeSchema: [], extraField: 0 },
		];
		for (const data of badCases) {
			assert.throws(() => codec.decode(data as unknown as Format));
		}
	});

	describe("codec", () => {
		makeEncodingTestSuite(makeCodecFamily([[0, codec]]), testCases, (a, b) => {
			assert(allowsRepoSuperset(defaultSchemaPolicy, a, b));
			assert(allowsRepoSuperset(defaultSchemaPolicy, b, a));
		});
	});

	// TODO: testing SchemaIndex class itself, specifically for attachment and normal summaries.
	// TODO: format compatibility tests to detect breaking of existing documents.
});
