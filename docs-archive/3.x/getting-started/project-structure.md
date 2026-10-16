---
title: Project Structure
icon: fa-solid fa-folder-tree
description: The files of a Clay project, what each one does and what belongs in git.
order: 3
---

# Project Structure

A Clay project has a fixed layout. Clay looks for its files in the project folder: the folder you run `clay` in, or the one you pass with `--root`.

```text
my-project/
├── clay.yaml              # required: site settings
├── logo.svg               # optional: logo and favicon, referenced in clay.yaml
├── docs/                  # required: the pages of the current version
│   ├── index.md           # optional: the start page
│   ├── introduction.md
│   ├── introduction.de.md # optional: a translation
│   └── guides/
│       ├── index.md       # optional: the folder's name, icon, order and page
│       ├── setup.md
│       └── img/
│           └── screen.png # images and files are published as they are
├── docs-archive/          # optional: older versions of the docs
│   └── 1.x/               # a copy of docs/ as it was for version 1.x
├── package.json           # optional: Clay as a dev dependency
└── publish/               # created by clay build; do not commit
```

## What each part does

| Path | Purpose | Read more |
|------|---------|-----------|
| `clay.yaml` | Title, base URL, navbar links, languages | [clay.yaml](../configuration/clay-yaml.md) |
| `index.md` | The start page (`docs/index.md`), and a folder's name, icon, order and page | [index pages](../organizing/index-pages.md) |
| `docs/` | Every `.md` file is a page; other files are published as assets | [pages](../writing/pages.md) |
| `*.de.md` and similar | Translations of the page next to them | [translations](../versions-and-languages/translations.md) |
| `docs-archive/<name>/` | A saved copy of the docs of an older release | [versions](../versions-and-languages/versions.md) |
| `publish/public/` | The finished website | [commands](../cli/commands.md) |

## Rules for the docs folder

- Every Markdown file (`.md`) becomes a page. Its path becomes its URL: `docs/guides/setup.md` is served at `/guides/setup`.
- Folders become sections in the navigation. A folder only appears when it contains at least one page, at any depth.
- Every other file, such as images, PDFs or downloads, is copied into the site as it is, so pages can link to it.
- Files and folders whose names start with a dot (`.DS_Store`, `.git`) are ignored.

## What belongs in git

Commit `clay.yaml`, `docs/`, `docs-archive/`, your logo, and `package.json` with `package-lock.json`. Do not commit the build output or the dependencies:

```text
# .gitignore
node_modules/
publish/
```

> [!TIP]
> Clay shows when each page was last changed, taken from git. Keep the docs in a git repository, and check out the full history in CI, to get those dates. See [page details](../features/page-details.md).
