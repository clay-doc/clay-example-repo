---
title: Markdown
icon: fa-brands fa-markdown
description: Clay Flavored Markdown - GitHub's Markdown plus alerts, components, math and diagrams - from headings and lists to tables and task lists, with examples.
order: 2
---

# Markdown

Clay reads **Clay Flavored Markdown** (CFM): [GitHub Flavored Markdown](https://github.github.com/gfm/), the Markdown you know from READMEs and issues on GitHub, plus [alerts](alerts.md), [components](components/index.md), [math](components/math.md) and [diagrams](components/diagrams.md). Everything GitHub shows works in Clay too, and what Clay adds stays readable on GitHub. Each element below shows its result and its source; pick **Markdown** once to see the source everywhere.

## Headings

```markdown
## A section
### A subsection
```

`#` is the page heading; use it once per page. `##` and `###` headings appear in the contents of the page and become search results of their own. Every heading gets an anchor, built like GitHub builds them, so you can link to a section: the heading "Line breaks" below is reachable as [`#line-breaks`](#line-breaks). Hover a section heading, and a `#` link to it appears on its left, ready to copy.

## Emphasis

::: tabs
== Result
**bold**, *italic*, ~~strikethrough~~ and `inline code`
== Markdown
```markdown
**bold**, *italic*, ~~strikethrough~~ and `inline code`
```
:::

## Line breaks

A line break in your text is a line break on the page, like in GitHub comments. Separate paragraphs with an empty line.

::: tabs
== Result
First line
second line, in the same paragraph

A new paragraph
== Markdown
```markdown
First line
second line, in the same paragraph

A new paragraph
```
:::

> [!TIP]
> Keep each paragraph on one line in your editor and let it wrap the text. Hard-wrapped paragraphs show their line breaks on the page.

## Lists

::: tabs
== Result
- Coffee
- Tea
  - Green tea
  - Black tea

1. Install
2. Configure
3. Build
== Markdown
```markdown
- Coffee
- Tea
  - Green tea
  - Black tea

1. Install
2. Configure
3. Build
```
:::

For instructions in order, [steps](components/steps.md) show a numbered list as a guide.

## Task lists

::: tabs
== Result
- [x] Write the docs
- [x] Build the site
- [ ] Publish it
== Markdown
```markdown
- [x] Write the docs
- [x] Build the site
- [ ] Publish it
```
:::

## Tables

Columns can be aligned left, centered or right with colons in the separator line:

::: tabs
== Result
| Command | Port | Purpose |
|:--------|:----:|--------:|
| dev     | 3000 | write   |
| preview | 4173 | check   |
== Markdown
```markdown
| Command | Port | Purpose |
|:--------|:----:|--------:|
| dev     | 3000 | write   |
| preview | 4173 | check   |
```
:::

## Quotes

::: tabs
== Result
> Documentation is a love letter that you write to your future self.
== Markdown
```markdown
> Documentation is a love letter that you write to your future self.
```
:::

A quote that starts with `[!NOTE]`, `[!TIP]` and similar becomes an [alert](alerts.md).

## Horizontal rules

Three hyphens on their own line draw a line across the page:

```markdown
---
```

---

## More than Markdown

::: cards
- [Links & Images](links-and-images.md)
- [Code Blocks](code-blocks.md)
- [Alerts](alerts.md)
- [Components](components/index.md)
- [HTML](html.md)
:::
