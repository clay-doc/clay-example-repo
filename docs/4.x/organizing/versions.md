---
title: Versions
icon: fa-solid fa-code-branch
description: Keep the docs of older releases online, with a version switcher and a banner that leads to the latest docs.
order: 4
redirects: ["/versions-and-languages/versions"]
---

# Versions

When a release changes how your project works, readers of older releases still need the old docs. Clay keeps older versions of the docs online next to the latest ones, each with its own navigation, search and URLs.

## How versions work

Most projects never need versions. Their pages are right in `docs/`, and Clay shows no version switcher.

With versions, each version has a folder of its own inside `docs/`:

```tree
my-project/
  clay.yaml          # version: "3.x" names the latest
  docs/
    latest/          # the latest docs, at /
      index.md
      guides/
    2.x/             # at /2.x
    1.x/             # at /1.x
```

- `docs/latest/` is always the **latest** version. It lives at the root of the site: `/guides/setup`.
- Every other folder in `docs/` is an **older** version, a copy of `docs/latest/` saved when that version was current. `docs/1.x/` lives under `/1.x`: `/1.x/guides/setup`.
- **All versions sit at the same depth**, so a path that leads out of the docs, like an [include](../writing/snippets-and-variables.md) of `../../../clay.yaml`, works the same in each copy.

This site works this way: its pages are in `docs/latest/`, the docs of Clay 4 in `docs/4.x/` and those of Clay 3 in `docs/3.x/`, online at [/4.x](https://clay-doc.github.io/clay-example-repo/4.x/) and [/3.x](https://clay-doc.github.io/clay-example-repo/3.x/).

## Saving a version

::: steps
1. **Save the latest docs**, right before the release changes them:

   ```bash
   npx clay version 2.x
   ```

   This copies `docs/latest/` to `docs/2.x/`. In `clay edit`, <kbd>V</kbd> does the same and switches the editor to the new version.

   A saved version keeps today's text: in the copy, Clay fills in the [variables](../writing/snippets-and-variables.md) and writes out includes of files outside `docs/latest/`, like `config/` or `docs/_snippets/`. When the latest docs move on to a new version number, the old ones keep theirs.

2. **Label the latest docs** in `clay.yaml`. Without `version`, the switcher calls them "Latest".

   ```yaml [clay.yaml]
   version: "3.x"
   ```

3. **Update `docs/latest/`** for the new release, commit and release. The old docs are online at `/2.x` from the first build.
:::

Version names become part of URLs, so they may contain letters, digits, `.`, `-` and `_`. `latest`, `docs`, `_clay` and `_nuxt` are reserved.

## The first version

While the pages are right in `docs/`, the first `clay version` moves them into `docs/latest/` before it saves the copy. It shows what it is about to do and asks first:

```text
Clay keeps each version of the docs in a folder of its own inside docs/:

  docs/latest/  at /     the latest docs: docs/ moves here (110 files)
  docs/1.x/     at /1.x  a copy of docs/latest/

Every version sits at the same depth, so paths that lead out of docs/ work in each copy.

docs/latest/ is one level deeper than docs/, so Clay changes these paths:
  docs/latest/writing/snippets.md: ../../clay.yaml#variables → ../../../clay.yaml#variables

These name paths in docs/, which Clay does not change; point them into docs/latest/ if they mean the latest docs:
  .gitignore: docs/api/

Git keeps the history of the moved files. Commit the move on its own, so it is easy to review.

Go ahead? (y/N)
```

- **Paths that lead out of `docs/`** get one more `../`: includes, links, images and files in HTML. Paths within the docs move along and stay as they are.
- **`favicon` and `navbar.logo`** in `clay.yaml` follow when they point into `docs/`.
- **Commands and lists** that name paths in `docs/`, like `generate` in `clay.yaml`, `.gitignore` or the scripts in `package.json`, are listed for you to check: only you know whether they mean the latest docs.
- **Dates stay**: Clay reads "last updated" from git, which sees the move as a rename.

In scripts and CI, where nobody can answer, add `--yes`. Without it, nothing changes.

> [!TIP]
> Folders in `docs/` that start with `_` are no versions. Snippets that every version shares can live in `docs/_snippets/`.

## The version switcher

As soon as there is an older version, the navbar shows a version switcher, newest first. Switching keeps the page you are reading when the other version has it, and otherwise opens that version's start page. It keeps the [language](translations.md) too.

Pages of older versions show a banner that says which version they belong to and links to the same page in the latest version.

## What each version has of its own

| | Per version |
|---|---|
| Pages, images and files | `docs/<name>/` |
| Start page, folder titles, icons and order | The version's `index.md` files |
| Search index | Results stay within the version |
| Edit links | Lead into `docs/<name>/`, when `editURL` ends in `docs/` |
| Translations | `*.de.md` files inside the version's folder |
| [Redirects](redirects.md) | Stay within the version |

`clay.yaml` is shared: all versions have the same title and navbar.

## Editing older versions

Older versions are plain files: fix a typo in `docs/1.x/` like anywhere else, or switch `clay edit` to the version with <kbd>v</kbd>. Links inside an older version stay in that version, as long as they are relative: `[Setup](setup.md)` links to `/1.x/setup`. Links starting with `/` lead to the latest version.

> [!NOTE]
> Each saved version adds its pages to the build. Keep the versions your users actually run, and delete the folders of versions nobody uses anymore.
