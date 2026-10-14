---
title: Migrating from Clay 1
icon: fa-solid fa-arrow-right-arrow-left
description: Move a Clay 1 site built with Clay Oven to Clay 2, step by step.
order: 1
---

# Migrating from Clay 1

Clay 1 needed two parts: the Clay frontend and Clay Oven, a separate Go tool that prepared the docs. Clay 2 is a single npm package, `clay-doc`, that does both. Your docs, `clay.yaml` and `dir-meta.yaml` keep working; what changes is how you build.

## What stays the same

- The `docs/` folder, Markdown files and their front matter.
- `clay.yaml` and `dir-meta.yaml`, with all their settings.
- The environment variables `CLAY_TITLE`, `CLAY_BASE_URL`, `CLAY_SITE_URL` and `CLAY_FONTAWESOME_KIT`.
- The URLs of your pages.

## What changes

| Clay 1 | Clay 2 |
|--------|--------|
| Download Clay Oven, run `./clay-oven` | `npm install --save-dev clay-doc`, run `npx clay build` |
| Output in `output/` | Output in `publish/public` |
| `run-oven.sh` in CI | `npm ci` and `npx clay build --strict` |
| `-c`, `-d`, `-o`, `-fm` flags | `--root` and `--out`; the file names are fixed |
| `-nc`, `-ci` to skip prompts | No prompts anymore |
| `langs` in `clay.yaml` | Not needed: languages of code blocks are detected |
| No live preview | `npx clay dev` |

## Step by step

### 1. Install Clay

```bash
npm init -y                       # only if there is no package.json yet
npm install --save-dev clay-doc
```

### 2. Clean up clay.yaml

Remove `langs`, if you have it. Clay 2 warns about it but works anyway.

### 3. Update .gitignore

```text
node_modules/
publish/
output/
```

### 4. Build and check

```bash
npx clay build --strict
```

Clay 2 checks links and settings more thoroughly than Clay Oven did. Fix what it reports; see [build checks](../cli/build-checks.md).

### 5. Update CI

Replace the Clay Oven step in your workflow:

```yaml
- name: Build docs
  run: curl -fsSL https://raw.githubusercontent.com/clay-doc/clay-oven/refs/heads/main/run-oven.sh | sh # [!code --]
- uses: actions/setup-node@v7 # [!code ++]
  with: # [!code ++]
    node-version: lts/* # [!code ++]
    cache: npm # [!code ++]
- run: npm ci # [!code ++]
- run: npx clay build --strict # [!code ++]
```

and upload `publish/public` instead of `output`. [GitHub Pages](../deployment/github-pages.md) has a complete workflow.

## New in Clay 2

Once migrated, these are available without further work:

- a live preview with `clay dev`,
- [build checks](../cli/build-checks.md) for links and settings,
- [search](../features/search.md) with typo tolerance, and [SEO](../features/seo.md) with a sitemap,
- `description` and `order` in the front matter,
- [clay edit](../organizing/clay-edit.md), [versions](../versions-and-languages/versions.md) and [translations](../versions-and-languages/translations.md).
