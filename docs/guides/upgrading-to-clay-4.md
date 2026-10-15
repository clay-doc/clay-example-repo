---
title: Upgrading to Clay 4
icon: fa-solid fa-circle-up
description: Move a Clay 3 site to Clay 4 - the cards front matter field is now called list.
order: 1
---

# Upgrading to Clay 4

Clay 4 changes one name: the front matter field `cards` is now `list`. Everything else, your pages, folders, links, translations and `clay.yaml`, stays as it is. Until you have renamed it, `clay build` reports each file that still uses `cards` with a warning, and `--strict` fails.

## 1. Update Clay

```bash
npm install --save-dev clay-doc@4
```

## 2. cards → list

In each `index.md` that has `cards: true`, write `list: true` instead:

```markdown
---
title: Guides
list: true
---
```

Search your docs for it, or let the build list the files:

```bash
grep -rl "^cards:" docs docs-archive
```

## 3. Check

```bash
npx clay build --strict
```

When the build passes, the upgrade is done.

## What else is new

- Links to sections, like `pages.md#front-matter`, are checked on every build, see [build checks](../cli/build-checks.md).
- On narrower screens, the table of contents folds up above the page.
- A "Skip to content" link, clearer keyboard focus and stronger contrast make the site easier to use with a keyboard and to read.
- When a page fails to render, `clay build` shows why, and which pages failed.
