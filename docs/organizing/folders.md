---
title: Folders
icon: fa-solid fa-folder-open
description: Group pages into folders, and give folders a name, an icon, an order and a page of their own with index.md.
order: 2
---

# Folders

Folders in `docs/` become sections of the navigation, nested as deep as your folders go. A folder only appears when it contains at least one page.

## Name, icon and order

A folder describes itself in an `index.md` inside it, with the same front matter as a page:

```text
docs/guides/
├── index.md       # the folder's name, icon and order
├── setup.md
└── deploying.md
```

```markdown
---
title: Guides
icon: fa-solid fa-book-open
order: 3
---
```

| Field | Default | Purpose |
|-------|---------|---------|
| `title` | the first heading of `index.md`, then the folder name | Name in the sidebar, breadcrumbs and search |
| `icon` | `fa-solid fa-folder` | [Font Awesome](../features/themes-and-icons.md) icon |
| `order` | none | Position among the pages and folders next to it |

Without an `index.md`, a folder is named after its folder name: `getting-started` becomes "Getting started".

## A page for the folder

When `index.md` has text below its front matter, that text is the folder's page, shown when readers open the folder at its URL (`/guides`). An `index.md` with only front matter just names the folder; its page then shows cards of the pages in it. See [index pages](index-pages.md).

## Folders in other languages

Translate a folder like a page: `index.de.md` next to `index.md` gives the folder its German name and German page.

```markdown
---
title: Anleitungen
---

# Anleitungen

Schritt-für-Schritt-Anleitungen für …
```

The order always comes from the original `index.md`.

> [!TIP]
> `clay edit` creates folders with their `index.md`, and writes the title, icon and order of existing ones. See [clay edit](clay-edit.md).
