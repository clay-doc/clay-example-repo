// Writes docs/latest/publishing/cli-reference.md from the help of the installed Clay,
// so the reference never falls behind. Runs before every build and every
// "clay dev": "generate" in clay.yaml. The page is not committed (.gitignore).
import {execFileSync} from "node:child_process";
import {writeFileSync} from "node:fs";

const clay = (...args) => execFileSync(process.execPath, ["node_modules/clay-doc/bin/clay.mjs", ...args], {encoding: "utf8"}).trimEnd();
const version = clay("--version");

writeFileSync("docs/latest/publishing/cli-reference.md", `---
title: CLI Reference
icon: fa-solid fa-terminal
description: Every command and option of clay, as its help lists them.
order: 5
---

# CLI Reference

Every command and option, as the help of Clay ${version} lists them. This page is [generated](../writing/generated-docs.md) before every build by \`scripts/cli-reference.mjs\`; the [commands](commands.md) page explains them.

## clay

\`\`\`text [clay --help]
${clay("--help")}
\`\`\`

## clay edit

\`\`\`text [clay edit help]
${clay("edit", "help")}
\`\`\`
`);
