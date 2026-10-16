---
title: Index Pages
icon: fa-solid fa-flag-checkered
description: The start page and the page of every folder are Markdown files named index.md, with an optional list of pages and a large header.
order: 3
---

# Index Pages

Every folder has a page at its URL, and the site has a start page at its root. Both are written in Markdown, in a file named `index.md`:

```tree
docs/
  index.md          # the start page, /
  index.de.md       # its German translation, /de
  guides/
    index.md        # the page of the folder guides, /guides
    index.de.md     # its German translation, /de/guides
```

An index page is a page like any other, with a heading, text, links, code, alerts and components. Its front matter also names the folder, see [folders](folders.md).

## A list of pages and a large header

Two front matter fields lay out index pages:

| Field | Effect |
|-------|--------|
| `list: true` | Lists the folder's pages and subfolders below the text |
| `hero: true` | Shows `title`, `icon` and `description` as a large, centered header above the text |

The start page of this site uses `hero`:

```markdown
---
title: Clay Documentation
icon: fa-solid fa-book-open
description: Turn a folder of Markdown files into a fast, searchable documentation website.
hero: true
---

Clay turns a folder of Markdown files into a documentation website …
```

With `hero: true`, leave out the `# heading`: the header shows the title already.

> [!TIP]
> `list` shows every page of the folder, in the order of the sidebar, like on the [guides](../guides/index.md) of this site. To show a few chosen pages, with their icons and descriptions, use [cards](../writing/components/cards.md) instead, like the other section pages do.

## Folders without an index page

A folder without an `index.md`, or one whose `index.md` has no text, gets a page made of its title, its icon and the list of its pages. The site works without any `index.md`; add them where a folder deserves an introduction.

Without `docs/index.md`, the start page shows the site title and a list of the top-level pages and folders.

## Links to folders

A folder's title in the sidebar opens its page; the arrow next to it shows and hides the pages in it. Breadcrumbs and links to a folder lead to its page too, and so do links to `index.md`:

```markdown
[All guides](guides/index.md)
[All guides](guides/)
```

Links inside an `index.md` are relative to its folder, like on GitHub: in `docs/guides/index.md`, `[Setup](setup.md)` leads to `docs/guides/setup.md`.

> [!NOTE]
> Folder pages appear in search results, and the previous and next links lead through them, before the pages of their folder.
