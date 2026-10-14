---
title: Versions
icon: fa-solid fa-code-branch
description: Keep the docs of older releases online, with a version switcher and a banner that leads to the latest docs.
order: 1
---

# Versions

When a release changes how your project works, readers of older releases still need the old docs. Clay keeps older versions of the docs online next to the current ones, each with its own navigation, search and URLs.

## How versions work

- `docs/` is always the **latest** version. It lives at the root of the site: `/guides/setup`.
- Each folder in `versions/` is an **older** version, saved when it was current. `versions/1.x/` lives under `/1.x`: `/1.x/guides/setup`.

```text
my-project/
├── clay.yaml
├── dir-meta.yaml
├── docs/                 # latest, at /
└── versions/
    ├── 2.x/              # at /2.x
    │   ├── docs/
    │   └── dir-meta.yaml
    └── 1.x/              # at /1.x
        ├── docs/
        └── dir-meta.yaml
```

## Saving a version

Right before a release changes the docs, save the current state:

```bash
npx clay version 2.x
```

This copies `docs/` and `dir-meta.yaml` into `versions/2.x/`. Then update `docs/` for the new release, and give it a label in `clay.yaml`:

```yaml
version: "3.x"
```

Without `version`, the switcher calls the latest docs "Latest".

> [!TIP]
> A typical release flow: `npx clay version 2.x`, commit, set `version: "3.x"`, update the docs, release. The old docs are online at `/2.x` from the first build.

Version names become part of URLs, so they may contain letters, digits, `.`, `-` and `_`. `docs`, `api`, `_clay` and `_nuxt` are reserved.

## The version switcher

As soon as there is a folder in `versions/`, the navbar shows a version switcher, newest first. Switching keeps the page you are reading when the other version has it, and otherwise opens that version's start page. It keeps the [language](translations.md) too.

Pages of older versions show a banner that says which version they belong to and links to the same page in the latest version.

## What each version has of its own

| | Per version |
|---|---|
| Pages, images and files | `versions/<name>/docs/` |
| Folder names, icons and order | `versions/<name>/dir-meta.yaml` |
| Search index | Results stay within the version |
| Edit links | Lead into `versions/<name>/docs/` |
| Translations | `*.de.md` files inside the version's docs |

`clay.yaml` is shared: all versions have the same title, navbar and landing page.

## Editing older versions

Older versions are plain files: fix a typo in `versions/1.x/docs/` like anywhere else. Links inside an older version stay in that version, as long as they are relative: `[Setup](setup.md)` links to `/1.x/setup`. Links starting with `/` lead to the latest version.

> [!NOTE]
> Each saved version adds its pages to the build. Keep the versions your users actually run, and delete the folders of versions nobody uses anymore.
