---
title: Upgrading to Clay 4
icon: fa-solid fa-circle-up
description: Move a Clay 3 site to Clay 4 - the cards front matter field is now called list, and files starting with _ are snippets.
order: 1
---

# Upgrading to Clay 4 :badge[Latest]{tip}

Clay 4 changes two things: the front matter field `cards` is now `list`, and files and folders whose name starts with `_` are no longer pages: they hold [snippets](../writing/snippets-and-variables.md). Everything else, your pages, folders, links, translations and `clay.yaml`, stays as it is. Until you have renamed it, `clay build` reports each file that still uses `cards` with a warning, and `--strict` fails.

## At a glance

| Clay 3 | Clay 4 |
|--------|--------|
| `cards: true` in an `index.md` | `list: true` |
| `docs/_drafts/idea.md` is a page | Files and folders starting with `_` are no pages |

A coding agent can do the upgrade:

::: prompt
Upgrade the Clay docs in this repository to Clay 4, following
https://clay-doc.github.io/clay-example-repo/guides/upgrading-to-clay-4.md.
The upgrade is done when `npx clay build --strict` passes.
:::

## Steps

::: steps
1. **Update Clay.**

   ::: code-group
   ```bash [npm]
   npm install --save-dev clay-doc@4
   ```
   ```bash [pnpm]
   pnpm add --save-dev clay-doc@4
   ```
   ```bash [yarn]
   yarn add --dev clay-doc@4
   ```
   :::

2. **Rename `cards` to `list`.** In each `index.md` that has `cards: true`, write `list: true` instead:

   ::: tabs
   == Clay 3
   ```markdown
   ---
   title: Guides
   cards: true
   ---
   ```
   == Clay 4
   ```markdown
   ---
   title: Guides
   list: true
   ---
   ```
   :::

   Search your docs for it, or let the build list the files:

   ```bash
   grep -rl "^cards:" docs docs-archive
   ```

3. **Rename pages that start with `_`**, if you have any, and the links to them. List them with:

   ```bash
   find docs docs-archive -name "_*"
   ```

4. **Check.**

   ```bash
   npx clay build --strict
   ```

   When the build passes, the upgrade is done.
:::

## What else is new

::: cards
- [AI & Agents](../features/ai-and-agents.md)
- [Components](../writing/components/index.md)
- [Build Checks](../publishing/build-checks.md) {fa-solid fa-list-check}
  Links to sections are checked too, and a page that fails to render says why.
- [Snippets & Variables](../writing/snippets-and-variables.md)
- [Search](../features/search.md)
- [SEO](../features/seo.md) {fa-solid fa-chart-line}
  Every page gets a picture for link previews, and sites under a path the address of their sitemap.
:::

- `generate` in `clay.yaml` runs tools that write pages before every build, like an API reference from code, see [generated docs](../writing/generated-docs.md).
- `head` in `clay.yaml` adds scripts and meta tags to every page, see [clay.yaml](../configuration/clay-yaml.md#head).
- Videos and embeds of YouTube, Vimeo, Figma and more, see [HTML](../writing/html.md#videos-and-embeds).
- On narrower screens, the contents of a page fold up above it.
- A "Skip to content" link, clearer keyboard focus and stronger contrast make the site easier to use with a keyboard and easier to read.
- Moving around feels smoother: the sidebar mark follows you, new breadcrumbs slide in and pages fade in. With "reduce motion" turned on in the system, nothing moves.
