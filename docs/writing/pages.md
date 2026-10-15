---
title: Pages
icon: fa-solid fa-file-lines
description: How Markdown files become pages, how pages get their titles and which front matter fields Clay reads.
order: 1
---

# Pages

Every Markdown file in `docs/` is a page. The file's path decides its URL:

| File | URL |
|------|-----|
| `docs/introduction.md` | `/introduction` |
| `docs/guides/setup.md` | `/guides/setup` |
| `docs/guides/advanced/tuning.md` | `/guides/advanced/tuning` |

Folders get a page too: `/guides` shows the folder's [index.md](../organizing/index-pages.md), or else a list of the pages and folders inside `guides/`. Opening a URL that ends in `.md`, like `/guides/setup.md`, redirects to the page.

> [!TIP]
> File names end up in URLs. Use lowercase words separated by hyphens (`getting-started.md`), and avoid renaming published pages: links to the old URL stop working.

## Titles

A page's title appears in the sidebar, the breadcrumbs, search results and the browser tab. Clay takes the first of:

1. `title` in the front matter,
2. the first `# heading` of the page,
3. the file name, with hyphens turned into spaces: `getting-started.md` becomes "Getting started".

Most pages only need a `# heading`. Use `title` when the sidebar should show something shorter than the heading.

## Front matter

Front matter is an optional block of settings at the very top of a page, between two `---` lines:

```markdown
---
title: Setup
icon: fa-solid fa-wrench
description: How to install and configure the project in five steps.
order: 2
---

# Setting up the project
```

| Field | Default | Purpose |
|-------|---------|---------|
| `title` | first heading, then file name | Title in navigation, search and browser tab |
| `icon` | `fa-solid fa-file` | [Font Awesome](../features/themes-and-icons.md) icon in the sidebar and breadcrumbs |
| `description` | first paragraph | Summary for search engines and link previews, see [SEO](../features/seo.md) |
| `order` | none | Position among the pages and folders next to it, see [navigation](../organizing/navigation.md) |
| `list`, `hero` | `false` | Only for `index.md`: a list of the folder's pages and a large header, see [index pages](../organizing/index-pages.md) |

The full reference is on the [front matter](../configuration/front-matter.md) page. A file named `index.md` is not a page of its own: it is the page of its folder, see [index pages](../organizing/index-pages.md).

Front matter only counts when `---` is the very first line of the file, so a horizontal rule further down a page is never mistaken for it. Values may be quoted or not:

```markdown
---
title: "Setup: the long way"
icon: fa-solid fa-wrench
---
```

> [!NOTE]
> Clay ignores fields it does not know. You can keep other tools' fields, like `tags` or `author`, in the same block.

## Page layout

Each page shows, from top to bottom:

- the page content, rendered from Markdown,
- an **Edit this page** link and the date of the last change (when configured, see [page details](../features/page-details.md)),
- links to the previous and next page in the navigation.

On wide screens, a table of contents lists the page's `##` and `###` headings and marks the section you are reading.
