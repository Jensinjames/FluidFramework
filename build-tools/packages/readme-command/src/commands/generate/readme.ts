/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
import { Interfaces } from "@oclif/core";
import { default as BaseReadme } from "oclif/lib/commands/readme";

export default class Readme extends BaseReadme {
	static readonly summary = "Adds commands to README.md in current directory.";
	static readonly description = `The readme must have any of the following tags inside of it for it to be replaced or else it will do nothing:

# Usage
<!-- usage -->
# Commands
<!-- commands -->
# Table of contents
<!-- toc -->

Customize the code URL prefix by setting oclif.repositoryPrefix in package.json.
`;

	usage(config: Interfaces.Config): string {
		const versionFlags = [
			"--version",
			...(config.pjson.oclif.additionalVersionFlags ?? []).sort(),
		];
		const versionFlagsString = `(${versionFlags.join("|")})`;

		// We change the version in CI, which causes the readmes to get updated during a CI build. Including the
		// full version section in the readme isn't valuable, so we just use a fixed string.
		const versionString = `1.0.0`;

		return [
			`\`\`\`sh-session
$ npm install -g ${config.name}
$ ${config.bin} COMMAND
running command...
$ ${config.bin} ${versionFlagsString}
${config.name}/${versionString}
$ ${config.bin} --help [COMMAND]
USAGE
  $ ${config.bin} COMMAND
...
\`\`\`\n`,
		]
			.join("\n")
			.trim();
	}
}
