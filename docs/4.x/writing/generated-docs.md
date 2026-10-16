---
title: Generated Docs
icon: fa-solid fa-gears
description: API reference from your code, and other pages that tools write, generated before every build.
order: 9
---

# Generated Docs :badge[New in Clay 4]{tip}

Some pages are best written by a tool: the API reference of a library, from its code and comments, or a list of command line options. `generate` in `clay.yaml` runs such tools before every `clay build`, `clay dev` and `clay check`, so the generated pages are always up to date and part of the site like any other.

```yaml
generate:
  - npx typedoc --plugin typedoc-plugin-markdown --entryFileName index --out docs/api src/index.ts
```

The commands run in the project folder, one after another. Whatever they write into `docs/` becomes pages: in the navigation, the search, the link checks and the [Markdown for agents](../features/ai-and-agents.md).

> [!TIP]
> This site generates its [CLI reference](../publishing/cli-reference.md) from Clay's own help, with a script of a few lines: [`scripts/cli-reference.mjs`](https://github.com/clay-doc/clay-example-repo/blob/main/scripts/cli-reference.mjs).

## API reference from code

Any tool that writes Markdown works:

::: tabs
== TypeScript
[TypeDoc](https://typedoc.org) with [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org):

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

```yaml
generate:
  - npx typedoc --plugin typedoc-plugin-markdown --entryFileName index --out docs/api src/index.ts
```
== Go
[gomarkdoc](https://github.com/princjef/gomarkdoc):

```bash
go install github.com/princjef/gomarkdoc/cmd/gomarkdoc@latest
```

```yaml
generate:
  - gomarkdoc --output docs/api/index.md ./...
```
== Python
[pydoc-markdown](https://github.com/NiklasRosenstein/pydoc-markdown):

```bash
pip install pydoc-markdown
```

```yaml
generate:
  - pydoc-markdown -I src -m my_package > docs/api.md
```
:::

::: steps
1. **Keep generated pages out of git.** They are written fresh on every build:

   ```text [.gitignore]
   docs/api/
   ```

   in `.gitignore`.

2. **Install the tool in CI too**, before `npx clay build --strict`: as a dev dependency in `package.json`, or with a step of its own.

3. **Write around it.** An `index.md` in the folder gives the generated pages a title, an icon and an introduction, as long as the tool does not write one itself. See [index pages](../organizing/index-pages.md).
:::

## When a command fails

The build stops and shows the command's last lines:

```text
✖  Generating docs: npx typedoc --out docs/api src/index.ts
│  [error] The entry point src/index.ts does not exist
│  Failed with exit code 1
│
└  Build failed after 2.1s. Run "clay build --verbose" for the full output.
```

`clay check --json` reports the same lines as problems.

> [!NOTE]
> The commands in `clay.yaml` run on every machine that builds the docs, like the scripts in `package.json`. Review changes to them like code.
