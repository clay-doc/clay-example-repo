---
title: Upgrading to Clay 2
icon: fa-solid fa-circle-up
description: Move a Clay 1 site built with Clay Oven to Clay 2 - one npm package instead of the frontend and Clay Oven.
order: 3
---

# Upgrading to Clay 2

Clay 1 needed two parts: the Clay frontend and Clay Oven, a separate Go tool that prepared the docs. Clay 2 is a single npm package, `clay-doc`, that does both. Your `docs/` folder, `clay.yaml`, `dir-meta.yaml`, the environment variables and the URLs of your pages stay as they are; what changes is how you build.

## At a glance

| Clay 1 | Clay 2 |
|--------|--------|
| Download Clay Oven, run `./clay-oven` | `npm install --save-dev clay-doc`, run `npx clay build` |
| Output in `output/` | Output in `publish/public` |
| `run-oven.sh` in CI | `npm ci` and `npx clay build --strict` |
| `-c`, `-d`, `-o`, `-fm` flags | `--root` and `--out`; the file names are fixed |
| `-nc`, `-ci` to skip prompts | No prompts anymore |
| `langs` in `clay.yaml` | Not needed: languages of code blocks are detected |
| No live preview | `npx clay dev` |

## Steps

::: steps
1. **Install Clay.**

   ::: code-group
   ```bash [npm]
   npm init -y                       # only if there is no package.json yet
   npm install --save-dev clay-doc@2
   ```
   ```bash [pnpm]
   pnpm init                         # only if there is no package.json yet
   pnpm add --save-dev clay-doc@2
   ```
   ```bash [yarn]
   yarn init -y                      # only if there is no package.json yet
   yarn add --dev clay-doc@2
   ```
   :::

2. **Clean up `clay.yaml`.** Remove `langs`, if you have it. Clay 2 warns about it but works anyway.

3. **Update `.gitignore`.** Clay 2 writes into `publish/`; `output/` from Clay Oven can go.

   ```text
   node_modules/
   publish/
   output/
   ```

4. **Update CI.** Replace the Clay Oven step in your workflow, and upload `publish/public` instead of `output`:

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

   [GitHub Pages](../publishing/github-pages.md) has a complete workflow.

5. **Check.**

   ```bash
   npx clay build --strict
   ```

   Clay 2 checks links and settings more thoroughly than Clay Oven did. Fix what it reports, see [build checks](../publishing/build-checks.md); when the build passes, the upgrade is done.
:::

## What else is new

- A live preview with `clay dev`.
- [Build checks](../publishing/build-checks.md) for links and settings.
- [Search](../features/search.md) with typo tolerance, and [SEO](../features/seo.md) with a sitemap.
- `description` and `order` in the front matter.
- Versions and translations, see [versions](../organizing/versions.md) and [translations](../organizing/translations.md).

Continue with [upgrading to Clay 3](upgrading-to-clay-3.md).
