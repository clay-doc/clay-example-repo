---
title: Upgrading to Clay 3
icon: fa-solid fa-circle-up
description: Move a Clay 2 site to Clay 3 - index.md files instead of dir-meta.yaml, the start page in docs/index.md and older versions in docs-archive/.
order: 2
---

# Upgrading to Clay 3

Clay 3 moves three things into the docs themselves: folder names, the start page and older versions. Everything else, your pages, links, translations and the rest of `clay.yaml`, stays as it is. Until you have moved them, `clay build` reports what is left with a warning, and `--strict` fails.

## At a glance

| Clay 2 | Clay 3 |
|--------|--------|
| `dir-meta.yaml` | an `index.md` in each folder |
| `index` in `clay.yaml` | `docs/index.md` |
| `versions/<name>/docs/` | `docs-archive/<name>/` |

A coding agent can do the upgrade, straight on to Clay 4:

::: prompt
Upgrade the Clay docs in this repository from Clay 2 to Clay 4: follow
https://clay-doc.github.io/clay-example-repo/guides/upgrading-to-clay-3.md,
then https://clay-doc.github.io/clay-example-repo/guides/upgrading-to-clay-4.md,
and install clay-doc@4 directly. The upgrade is done when
`npx clay build --strict` passes.
:::

## Steps

::: steps
1. **Update Clay.**

   ::: code-group
   ```bash [npm]
   npm install --save-dev clay-doc@3
   ```
   ```bash [pnpm]
   pnpm add --save-dev clay-doc@3
   ```
   ```bash [yarn]
   yarn add --dev clay-doc@3
   ```
   :::

2. **Move folder names into `index.md` files.** Each entry of `dir-meta.yaml` becomes the front matter of an `index.md` in that folder; `name` becomes `title`:

   ::: tabs
   == Clay 2
   `dir-meta.yaml`:

   ```yaml
   - path: "guides"
     name: "Guides"
     icon: "fa-solid fa-book-open"
     order: 3
   ```
   == Clay 3
   `docs/guides/index.md`:

   ```markdown
   ---
   title: Guides
   icon: fa-solid fa-book-open
   order: 3
   ---
   ```
   :::

   Names per language (`name: {en: Guides, de: Anleitungen}`) go into translations of the `index.md`: `index.de.md` with `title: Anleitungen`. Then delete `dir-meta.yaml`. An `index.md` with only front matter just names its folder; add text below it, and it becomes the folder's page, see [index pages](../organizing/index-pages.md).

3. **Move the start page into `docs/index.md`.** For a similar look, a large header and the top-level pages below it, set `hero` and `list`:

   ::: tabs
   == Clay 2
   `clay.yaml`:

   ```yaml
   index:
     title: "Welcome to My Project"
     description: "Everything you need to know."
     icon: "fa-solid fa-rocket"
   ```
   == Clay 3
   `docs/index.md`:

   ```markdown
   ---
   title: Welcome to My Project
   description: Everything you need to know.
   icon: fa-solid fa-rocket
   hero: true
   list: true
   ---
   ```
   :::

   Values per language go into `docs/index.de.md` and so on. Then remove `index` from `clay.yaml`.

4. **Move older versions into `docs-archive/`.** They move one level up, and their `dir-meta.yaml` turns into `index.md` files as in step 2:

   ```tree
   versions/1.x/docs/   # Clay 2
   docs-archive/1.x/    # Clay 3
   ```

   ```bash
   mkdir docs-archive
   git mv versions/1.x/docs docs-archive/1.x
   ```

5. **Check.**

   ```bash
   npx clay build --strict
   ```

   When the build passes, the upgrade is done. Links to `index.md` files and to folders lead to the folders' pages, so existing links keep working.
:::

## What else is new

- In the sidebar, a folder's title opens its page; the arrow shows and hides its pages.
- [clay edit](../organizing/clay-edit.md) creates, renames, moves and deletes pages and folders, edits all front matter, and works in every version and language.
- Section headings show a `#` link to copy.

Continue with [upgrading to Clay 4](upgrading-to-clay-4.md).
