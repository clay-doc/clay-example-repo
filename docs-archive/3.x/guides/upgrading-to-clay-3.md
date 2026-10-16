---
title: Upgrading to Clay 3
icon: fa-solid fa-circle-up
description: Move a Clay 2 site to Clay 3 - index.md files instead of dir-meta.yaml, the start page in docs/index.md and older versions in docs-archive/.
order: 1
---

# Upgrading to Clay 3

Clay 3 moves three things into the docs themselves: folder names, the start page and older versions. Everything else, your pages, links, translations and the rest of `clay.yaml`, stays as it is. Until you have moved them, `clay build` reports what is left with a warning, and `--strict` fails.

## 1. Update Clay

```bash
npm install --save-dev clay-doc@3
```

## 2. Folder names: dir-meta.yaml → index.md

Each entry of `dir-meta.yaml` becomes the front matter of an `index.md` in that folder. `name` becomes `title`:

`dir-meta.yaml` (Clay 2):

```yaml
- path: "guides"
  name: "Guides"
  icon: "fa-solid fa-book-open"
  order: 3
```

`docs/guides/index.md` (Clay 3):

```markdown
---
title: Guides
icon: fa-solid fa-book-open
order: 3
---
```

Names per language (`name: {en: Guides, de: Anleitungen}`) go into translations of the `index.md`: `index.de.md` with `title: Anleitungen`. Then delete `dir-meta.yaml`.

An `index.md` with only front matter just names its folder. Add text below it, and it becomes the folder's page; see [index pages](../organizing/index-pages.md).

## 3. The start page: index in clay.yaml → docs/index.md

The `index` section of `clay.yaml` becomes `docs/index.md`. For a similar look, a large header and the top-level pages below it, set `hero` and `list`:

`clay.yaml` (Clay 2):

```yaml
index:
  title: "Welcome to My Project"
  description: "Everything you need to know."
  icon: "fa-solid fa-rocket"
```

`docs/index.md` (Clay 3):

```markdown
---
title: Welcome to My Project
description: Everything you need to know.
icon: fa-solid fa-rocket
hero: true
list: true
---
```

Values per language go into `docs/index.de.md` and so on. Then remove `index` from `clay.yaml`.

## 4. Older versions: versions/ → docs-archive/

Older versions move one level up: `versions/1.x/docs/` becomes `docs-archive/1.x/`. Their `dir-meta.yaml` turns into `index.md` files as in step 2.

```bash
mkdir docs-archive
git mv versions/1.x/docs docs-archive/1.x
```

## 5. Check

```bash
npx clay build --strict
```

When the build passes, the upgrade is done. Links to `index.md` files and to folders lead to the folders' pages, so existing links keep working.

## What else is new

- In the sidebar, a folder's title opens its page; the arrow shows and hides its pages.
- [clay edit](../organizing/clay-edit.md) creates, renames, moves and deletes pages and folders, edits all front matter, and works in every version and language.
- Section headings show a `#` link to copy.
