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
├── dir-meta.yaml          # optional: folder names, icons and order
├── logo.svg               # optional: logo and favicon, referenced in clay.yaml
├── docs/                  # required: the pages of the current version
│   ├── introduction.md
│   ├── introduction.de.md # optional: a translation
│   └── guides/
│       ├── setup.md
│       └── img/
│           └── screen.png # images and files are published as they are
├── versions/              # optional: older versions of the docs
│   └── 1.x/
│       ├── docs/
│       └── dir-meta.yaml
├── package.json           # optional: Clay as a dev dependency
└── publish/               # created by clay build; do not commit
```

## What each part does

| Path | Purpose | Read more |
|------|---------|-----------|
| `clay.yaml` | Title, base URL, navbar links, landing page, languages | [clay.yaml](../configuration/clay-yaml.md) |
| `dir-meta.yaml` | Display names, icons and order of folders | [dir-meta.yaml](../configuration/dir-meta-yaml.md) |
| `docs/` | Every `.md` file is a page; other files are published as assets | [pages](../writing/pages.md) |
| `*.de.md` and similar | Translations of the page next to them | [translations](../versions-and-languages/translations.md) |
| `versions/<name>/` | A saved copy of the docs of an older release | [versions](../versions-and-languages/versions.md) |
| `publish/public/` | The finished website | [commands](../cli/commands.md) |

## Rules for the docs folder

- Every Markdown file (`.md`) becomes a page. Its path becomes its URL: `docs/guides/setup.md` is served at `/guides/setup`.
- Folders become sections in the navigation. A folder only appears when it contains at least one page, at any depth.
- Every other file, such as images, PDFs or downloads, is copied into the site as it is, so pages can link to it.
- Files and folders whose names start with a dot (`.DS_Store`, `.git`) are ignored.

## What belongs in git

Commit `clay.yaml`, `dir-meta.yaml`, `docs/`, `versions/`, your logo, and `package.json` with `package-lock.json`. Do not commit the build output or the dependencies:

```text
# .gitignore
node_modules/
publish/
```

> [!TIP]
> Clay shows when each page was last changed, taken from git. Keep the docs in a git repository, and check out the full history in CI, to get those dates. See [page details](../features/page-details.md).
