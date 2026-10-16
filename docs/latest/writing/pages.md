---
title: Pages
icon: fa-solid fa-file-lines
description: How Markdown files become pages, how pages get their titles and which front matter fields Clay reads.
order: 1
---

# Pages

Every Markdown file in `docs/` is a page, and its path is its URL:

```tree
docs/
  introduction.md      # /introduction
  guides/
    index.md           # /guides, the folder's page
    setup.md           # /guides/setup
    advanced/
      tuning.md        # /guides/advanced/tuning
```

Folders get a page too: `/guides` shows the folder's [index.md](../organizing/index-pages.md), or else a list of the pages and folders inside `guides/`. A URL that ends in `.md`, like `/guides/setup.md`, shows the page as Markdown, for language models and agents, see [AI & agents](../features/ai-and-agents.md).

> [!TIP]
> File names end up in URLs. Use lowercase words separated by hyphens (`getting-started.md`), and avoid renaming published pages: links to the old URL stop working.

## Titles

A page's title appears in the sidebar, the breadcrumbs, search results and the browser tab. Clay takes the first of:

::: steps
1. `title` in the front matter,
2. the first `# heading` of the page,
3. the file name, with hyphens turned into spaces: `getting-started.md` becomes "Getting started".
:::

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
| `icon` | `fa-solid fa-file` | [Font Awesome](../features/themes-and-icons.md) icon in the sidebar, breadcrumbs and [cards](components/cards.md) |
| `description` | first paragraph | Summary for search engines, link previews and [cards](components/cards.md), see [SEO](../features/seo.md) |
| `order` | none | Position among the pages and folders next to it, see [navigation](../organizing/navigation.md) |
| `list`, `hero` | `false` | Only for `index.md`: a list of the folder's pages and a large header, see [index pages](../organizing/index-pages.md) |

Every field is described in the [front matter reference](../configuration/front-matter.md). A file named `index.md` is not a page of its own: it is the page of its folder.

::: details When does Clay read front matter?
Only when `---` is the very first line of the file, so a horizontal rule further down a page is never mistaken for it. Values may be quoted or not; quote them when they contain a colon:

```markdown
---
title: "Setup: the long way"
icon: fa-solid fa-wrench
---
```

Clay ignores fields it does not know, so other tools' fields, like `tags` or `author`, can stay in the same block.
:::

## What a page shows

From top to bottom:

- the page content, rendered from Markdown,
- an **Edit this page** link and the date of the last change, when configured, see [page details](../features/page-details.md),
- links to the previous and the next page of the navigation.

On wide screens, the contents of the page, its `##` and `###` headings, are listed beside it and mark the sections you are reading. On narrower screens they fold up above the page.
