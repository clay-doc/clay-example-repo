---
title: Navigation
icon: fa-solid fa-compass
description: How Clay builds the sidebar, breadcrumbs and previous/next links, and how to put pages in order.
order: 1
---

# Navigation

Clay builds the navigation from your `docs/` folder; there is no separate menu to maintain. Add a page and it appears, move it into a folder and it moves in the sidebar.

## The sidebar

The sidebar lists every page and every folder that contains pages, nested the way your folders are. Folders can be opened and closed; the page you are reading is marked. On small screens, the sidebar moves into a drawer behind the menu button in the top left corner.

## Order

Within each folder, pages and folders are sorted together:

1. Entries with an `order` come first, from the lowest number up.
2. All other entries follow in alphabetical order of their file or folder name.

Pages get their `order` in the [front matter](../writing/pages.md#front-matter), folders in [dir-meta.yaml](../configuration/dir-meta-yaml.md):

```markdown
---
title: Installation
order: 1
---
```

```yaml
- path: "guides"
  order: 3
```

For example, this folder:

```text
docs/
├── changelog.md          (no order)
├── faq.md                (no order)
├── guides/               (order: 2 in dir-meta.yaml)
├── installation.md       (order: 1)
└── introduction.md       (order: 0)
```

is shown as: Introduction, Installation, Guides, Changelog, FAQ.

> [!TIP]
> Number in steps of ten (10, 20, 30) to leave room for pages you add later, or let [clay edit](clay-edit.md) number them for you: it sets `order` on everything in a folder when you move an entry.

Numbers can be negative, and entries with the same number keep their alphabetical order.

## Breadcrumbs

The navbar shows where the current page sits: **Guides › Advanced › Tuning**. Each part links to its folder's page. Deeply nested pages show the last three levels. Breadcrumbs are hidden on small screens, where the drawer takes their place.

## Folder pages

Every folder has a page of its own, at its path: `/guides` for `docs/guides/`. It shows the folder's title and icon and a card for every page and subfolder in it. Breadcrumbs and links to a folder lead there.

## Previous and next

At the bottom of each page, links lead to the previous and the next page. They follow the order of the sidebar across folders, so readers can go through the docs from start to end like a book.
