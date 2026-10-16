---
title: Project Structure
icon: fa-solid fa-folder-tree
description: The files of a Clay project, what each one does and what belongs in git.
order: 4
---

# Project Structure

A Clay project has a fixed layout. Clay looks for its files in the project folder: the folder you run `clay` in, or the one you pass with `--root`.

```tree
my-project/
  clay.yaml               # required: site settings
  logo.svg                # optional: logo and favicon, named in clay.yaml
  docs/                   # required: the pages of the current version
    index.md              # optional: the start page
    introduction.md
    introduction.de.md    # optional: a translation
    guides/
      index.md            # optional: the folder's title, icon, order and page
      setup.md
      img/
        screen.png        # images and files are published as they are
  package.json            # optional: Clay as a dev dependency
  publish/                # created by clay build; do not commit
```

## What each part does

| Path | Purpose | Read more |
|------|---------|-----------|
| `clay.yaml` | Title, base URL, navbar links, languages | [clay.yaml](../configuration/clay-yaml.md) |
| `docs/` | Every `.md` file is a page; other files are published as they are | [pages](../writing/pages.md) |
| `index.md` | The start page (`docs/index.md`), and a folder's title, icon, order and page | [index pages](../organizing/index-pages.md) |
| `*.de.md` and similar | Translations of the page next to them | [translations](../organizing/translations.md) |
| `docs/latest/`, `docs/<name>/` | With versions: the latest docs, and a saved copy for each older release | [versions](../organizing/versions.md) |
| `publish/public/` | The finished website | [commands](../publishing/commands.md) |

## Rules for the docs folder

- **Every Markdown file becomes a page.** Its path is its URL: `docs/guides/setup.md` is served at `/guides/setup`.
- **Folders become sections** of the navigation. A folder only appears when it contains at least one page, at any depth.
- **Every other file**, like images, PDFs or downloads, is copied into the site as it is, so pages can link to it.
- **Names starting with a dot** (`.DS_Store`, `.git`) are ignored.

## What belongs in git

Commit `clay.yaml`, `docs/`, your logo, and `package.json` with its lockfile. Leave out the build output and the dependencies:

```text [.gitignore]
node_modules/
publish/
```

> [!TIP]
> Clay shows when each page was last changed, taken from git. Keep the docs in a git repository, and check out the full history in CI, to get those dates. See [page details](../features/page-details.md).
