---
title: Navigation
icon: fa-solid fa-compass
description: How Clay builds the sidebar, breadcrumbs and previous/next links, and how to put pages in order.
order: 1
---

# Navigation

Clay builds the navigation from your `docs/` folder; there is no separate menu to maintain. Add a page and it appears, move it into a folder and it moves in the sidebar.

## The sidebar

The sidebar lists every page and every folder that contains pages, nested the way your folders are. A folder's title opens the folder's page; the arrow next to it shows and hides the pages in it. The page you are reading is marked, and the folders around it open on their own. On small screens, the sidebar moves into a drawer behind the menu button in the top left corner.

## Order

Within each folder, pages and folders are sorted together:

::: steps
1. Entries with an `order` come first, from the lowest number up.
2. All other entries follow in alphabetical order of their file or folder name.
:::

Pages get their `order` in their [front matter](../writing/pages.md#front-matter), folders in the front matter of their [index.md](folders.md):

::: tabs
== A page
```markdown [docs/installation.md]
---
title: Installation
order: 1
---
```
== A folder
```markdown [docs/guides/index.md]
---
title: Guides
order: 2
---
```
:::

For example, this folder:

```tree
docs/
  changelog.md       # no order
  faq.md             # no order
  guides/            # order: 2 in guides/index.md
  installation.md    # order: 1
  introduction.md    # order: 0
```

is shown as: Introduction, Installation, Guides, Changelog, FAQ.

> [!TIP]
> Number in steps of ten (10, 20, 30) to leave room for pages you add later, or let [clay edit](clay-edit.md) number them for you: it sets `order` on everything in a folder when you move an entry.

Numbers can be negative, and entries with the same number keep their alphabetical order.

## Breadcrumbs

The navbar shows where the current page sits: **Guides › Advanced › Tuning**. Each part links to its folder's page. Deeply nested pages show the last three levels. Breadcrumbs are hidden on small screens, where the drawer takes their place.

## Folder pages

Every folder has a page of its own, at its path: `/guides` for `docs/guides/`. It is the folder's `index.md`, or, without one, the folder's title with a list of the pages and subfolders in it. Breadcrumbs and links to a folder lead there. See [index pages](index-pages.md).

## Previous and next

At the bottom of each page, links lead to the previous and the next page. They follow the order of the sidebar across folders, including the folders' own pages, so readers can go through the docs from start to end like a book.
