---
title: Versions
icon: fa-solid fa-code-branch
description: Keep the docs of older releases online, with a version switcher and a banner that leads to the latest docs.
order: 4
---

# Versions

When a release changes how your project works, readers of older releases still need the old docs. Clay keeps older versions of the docs online next to the current ones, each with its own navigation, search and URLs.

## How versions work

- `docs/` is always the **latest** version. It lives at the root of the site: `/guides/setup`.
- Each folder in `docs-archive/` is an **older** version, a copy of `docs/` saved when that version was current. `docs-archive/1.x/` lives under `/1.x`: `/1.x/guides/setup`.

```tree
my-project/
  clay.yaml
  docs/              # latest, at /
  docs-archive/
    2.x/             # at /2.x
      index.md
      guides/
    1.x/             # at /1.x
```

Most projects never need versions: without `docs-archive/`, Clay shows no version switcher at all.

## Releasing a new version

::: steps
1. **Save the current docs**, right before the release changes them:

   ```bash
   npx clay version 2.x
   ```

   This copies `docs/` into `docs-archive/2.x/`. In `clay edit`, <kbd>V</kbd> does the same and switches the editor to the new version.

2. **Label the latest docs** in `clay.yaml`. Without `version`, the switcher calls them "Latest".

   ```yaml
   version: "3.x"
   ```

3. **Update `docs/`** for the new release, commit and release. The old docs are online at `/2.x` from the first build.
:::

Version names become part of URLs, so they may contain letters, digits, `.`, `-` and `_`. `docs`, `_clay` and `_nuxt` are reserved.

## The version switcher

As soon as there is a folder in `docs-archive/`, the navbar shows a version switcher, newest first. Switching keeps the page you are reading when the other version has it, and otherwise opens that version's start page. It keeps the [language](translations.md) too.

Pages of older versions show a banner that says which version they belong to and links to the same page in the latest version.

## What each version has of its own

| | Per version |
|---|---|
| Pages, images and files | `docs-archive/<name>/` |
| Start page, folder titles, icons and order | The version's `index.md` files |
| Search index | Results stay within the version |
| Edit links | Lead into `docs-archive/<name>/` |
| Translations | `*.de.md` files inside the version's folder |

`clay.yaml` is shared: all versions have the same title and navbar.

## Editing older versions

Older versions are plain files: fix a typo in `docs-archive/1.x/` like anywhere else, or switch `clay edit` to the version with <kbd>v</kbd>. Links inside an older version stay in that version, as long as they are relative: `[Setup](setup.md)` links to `/1.x/setup`. Links starting with `/` lead to the latest version.

> [!NOTE]
> Each saved version adds its pages to the build. Keep the versions your users actually run, and delete the folders of versions nobody uses anymore.
