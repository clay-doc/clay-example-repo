---
title: Markdown
icon: fa-brands fa-markdown
description: The Markdown syntax Clay supports, from headings and lists to tables and task lists, with examples.
order: 2
---

# Markdown

Clay reads [GitHub Flavored Markdown](https://github.github.com/gfm/), the Markdown you know from READMEs and issues on GitHub. This page shows each element with its source and result.

## Headings

```markdown
## A section
### A subsection
```

`#` is the page heading; use it once per page. `##` and `###` headings appear in the table of contents and become search results of their own. Every heading gets an anchor, built like GitHub builds them, so you can link to a section: the heading "Line breaks" below is reachable as [`#line-breaks`](#line-breaks). Hover a section heading, and a `#` link to it appears on its left, ready to copy.

## Emphasis

```markdown
**bold**, *italic*, ~~strikethrough~~ and `inline code`
```

**bold**, *italic*, ~~strikethrough~~ and `inline code`

## Line breaks

A line break in your text is a line break on the page, like in GitHub comments. Separate paragraphs with an empty line.

```markdown
First line
second line, in the same paragraph

A new paragraph
```

First line
second line, in the same paragraph

A new paragraph

> [!TIP]
> Keep each paragraph on one line in your editor and let it wrap the text. Hard-wrapped paragraphs show their line breaks on the page.

## Lists

```markdown
- Coffee
- Tea
  - Green tea
  - Black tea

1. Install
2. Configure
3. Build
```

- Coffee
- Tea
  - Green tea
  - Black tea

1. Install
2. Configure
3. Build

## Task lists

```markdown
- [x] Write the docs
- [x] Build the site
- [ ] Publish it
```

- [x] Write the docs
- [x] Build the site
- [ ] Publish it

## Tables

Columns can be aligned left, centered or right with colons in the separator line:

```markdown
| Command | Port | Purpose |
|:--------|:----:|--------:|
| dev     | 3000 | write   |
| preview | 4173 | check   |
```

| Command | Port | Purpose |
|:--------|:----:|--------:|
| dev     | 3000 | write   |
| preview | 4173 | check   |

## Quotes

```markdown
> Documentation is a love letter that you write to your future self.
```

> Documentation is a love letter that you write to your future self.

A quote that starts with `[!NOTE]`, `[!TIP]` and similar becomes an [alert](alerts.md).

## Horizontal rules

Three hyphens on their own line draw a line across the page:

```markdown
---
```

---

## Links, images and code

These have pages of their own:

- [Links and images](links-and-images.md): links between pages, images and downloads.
- [Code blocks](code-blocks.md): syntax highlighting, highlighted lines and diffs.
- [Alerts](alerts.md): notes, tips and warnings.
- [HTML](html.md): HTML inside Markdown and what Clay removes from it.
