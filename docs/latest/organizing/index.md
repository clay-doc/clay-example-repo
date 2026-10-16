---
title: Organizing
icon: fa-solid fa-sitemap
description: How pages and folders become the navigation, how folders get their pages, and how versions and languages work.
order: 3
redirects: ["/versions-and-languages"]
---

# Organizing

Clay builds the navigation from your files: every folder in `docs/` is a section, every Markdown file a page. You decide titles, icons and order in front matter, or let `clay edit` do it for you. Older releases and other languages are folders and files too.

::: cards
- [Navigation](navigation.md)
- [Folders](folders.md)
- [Index Pages](index-pages.md)
- [Versions](versions.md)
- [Translations](translations.md)
- [Editing with clay edit](clay-edit.md)
- [Redirects](redirects.md)
:::

## From files to navigation

::: tabs
== Your files
```tree
docs/
  index.md               # the start page
  introduction.md        # order: 1
  guides/
    index.md             # title: Guides, order: 2
    setup.md
    deploying.md
  reference/
    api.md
```
== The sidebar
```tree
Introduction
Guides/
  Deploying
  Setup
Reference/
  Api
```

Pages with an `order` come first; the rest follow alphabetically. Titles come from the front matter, the first heading or the file name.
:::

## One project, many editions

Versions and languages multiply the same structure. Each edition gets its own address, navigation and search:

```tree
my-project/
  docs/                   # latest, English: /
    setup.md
    setup.de.md           # latest, German: /de/setup
  docs-archive/
    1.x/                  # version 1.x: /1.x
      setup.md
```

Readers switch versions and languages in the navbar and stay on the page they are reading.

## Key ideas

- **The file tree is the navigation.** Move a file, and it moves in the sidebar.
- **`order` puts entries in order.** Entries without it follow alphabetically.
- **A folder's `index.md` describes the folder.** Its front matter names it; its text, if any, is the folder's page.
- **`docs/` is always the latest version.** Older ones are copies in `docs-archive/`.
- **Translate as much as you like.** Pages without a translation show the original, with a note.

> [!TIP]
> `npx clay edit` does all of this in the terminal: create, order, rename, move and translate pages, without writing front matter by hand. See [clay edit](clay-edit.md).
