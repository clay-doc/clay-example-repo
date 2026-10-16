---
title: Snippets & Variables
icon: fa-solid fa-paste
description: Write a text once and use it on many pages, include code from your project, and fill in values like the current version.
order: 8
---

# Snippets & Variables :badge[New in Clay 4]{tip}

Some text belongs on many pages: a requirement, a warning, the current version. Write it once, and Clay fills it in wherever it is used when it builds the site. Search, link checks and the [Markdown for agents](../features/ai-and-agents.md) all see the finished text.

## Variables

Define values in `clay.yaml`:

```yaml [clay.yaml]
variables:
  major: "4"
  node: "20.19"
```

Use them in any page with two curly braces:

::: tabs
== Result
Clay 4 needs Node.js 20.19 or newer:

```bash
npm install --save-dev clay-doc@4
```
== Markdown
````markdown
Clay \{{major}} needs Node.js \{{node}} or newer:

```bash
npm install --save-dev clay-doc@\{{major}}
```
````
:::

- **Variables work everywhere** in a page: in text, code blocks, links and front matter.
- **Only names from `variables` are filled in.** Other curly braces stay as written, so templates in code examples are safe.
- **A backslash keeps a variable as written**: `\\{{major}}` shows `\{{major}}`.
- **Values can differ per language**, like every text in `clay.yaml`: `product: {en: "Docs", de: "Doku"}`.
- **Saved [versions](../organizing/versions.md) keep their values**: `clay version` fills the variables in, so the old docs still name the old version.

## Snippets

Put a text you want to reuse in a file whose name, or whose folder's name, starts with `_`: such files are no pages. Include it with an HTML comment on a line of its own:

::: tabs
== Result
<!--@include: ../_snippets/node-version.md-->
== Markdown
```markdown
\<!--@include: ../_snippets/node-version.md-->
```
== The snippet
```markdown [docs/_snippets/node-version.md]
> [!NOTE]
> Clay \{{major}} needs **Node.js \{{node}}** or newer.
```
:::

- **The path is relative to the page**, like a link. The snippet's front matter is left out.
- **Links and images in a snippet** are relative to the page that includes it.
- **Snippets can include snippets**, relative to themselves, and variables are filled in everywhere.
- **Indent the include**, and the whole snippet is indented: includes work inside [steps](components/steps.md) and lists.
- **On GitHub**, the include is an HTML comment and shows nothing.

## Code from your project

Includes work in code blocks too, with any file of the project, so examples in the docs stay the code that runs:

````markdown
```ts
\<!--@include: ../../src/client.ts#setup-->
```
````

| Include | What it takes |
|---------|---------------|
| `client.ts` | the whole file |
| `client.ts{12,30}` | lines 12 to 30 |
| `client.ts{12,}` | from line 12 to the end |
| `client.ts#setup` | the lines between `#region setup` and `#endregion` |

Mark regions in comments of the file's language; the marker lines are left out:

```ts
// #region setup
const client = createClient({token: process.env.TOKEN});
// #endregion
```

This site does the same with its own settings: the block below is included from its `config/variables.yaml`, between `# #region values` and `# #endregion`, and changes with it.

::: tabs
== Result
```yaml [config/variables.yaml]
major: "4"
node: "20.19"
```
== Markdown
````markdown
```yaml [config/variables.yaml]
\<!--@include: ../../../config/variables.yaml#values-->
```
````
:::

> [!NOTE]
> Files outside the project folder cannot be included, so a page cannot publish files from elsewhere on the machine that builds it. `clay dev` reloads the page when an included file changes.

## Checks

The build reports includes it cannot fill in, and leaves them out:

```text
docs/guides/setup.md: includes "../_snippets/gone.md", which does not exist; it is left out
```

The same goes for files outside the project, regions that do not exist and snippets that lead back to the page. With `--strict`, they fail the build, see [build checks](../publishing/build-checks.md).
