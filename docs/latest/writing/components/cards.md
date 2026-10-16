---
title: Cards
icon: fa-solid fa-table-cells-large
description: Links as a grid of cards, with the icon and description of the pages they lead to, or ones of your own.
order: 3
---

# Cards

Cards are links laid out as a grid: good for a start page, the top of a section or "where to go next". Write a list of links:

```markdown
::: cards
- [Quick Start](../../getting-started/quick-start.md)
- [Publishing](../../publishing/index.md)
- [Search](../../features/search.md)
:::
```

::: cards
- [Quick Start](../../getting-started/quick-start.md)
- [Publishing](../../publishing/index.md)
- [Search](../../features/search.md)
:::

A card that leads to a page of your docs shows that page's `icon` and `description` from its [front matter](../../configuration/front-matter.md), so you write them once and every card stays up to date.

## Your own icon and text

Give a card an icon in braces after the link, and its text on the next lines:

```markdown
::: cards
- [Clay on GitHub](https://github.com/clay-doc/clay) {fa-brands fa-github}
  Source code, issues and releases.
- [Code Blocks](../code-blocks.md) {fa-solid fa-star}
  Our favorite page: highlighting, diffs and focus.
:::
```

::: cards
- [Clay on GitHub](https://github.com/clay-doc/clay) {fa-brands fa-github}
  Source code, issues and releases.
- [Code Blocks](../code-blocks.md) {fa-solid fa-star}
  Our favorite page: highlighting, diffs and focus.
:::

- **The link's text is the card's title.** The card leads where the link does.
- **The icon** is a [Font Awesome](../../features/themes-and-icons.md) icon, written as its classes.
- **The text** is indented to the link, like the second line of any list item. **Bold**, *italics* and `code` work; links in it are shown as text, since the whole card is a link.
- Cards that lead to other sites have no page to borrow from: give them an icon and text of their own.

## Cards or `list`

`list: true` in a folder's `index.md` lists *all* of the folder's pages, in the order of the sidebar. Cards show the pages you choose, in the order you write them, from anywhere in your docs and beyond. See [index pages](../../organizing/index-pages.md).

## Layout

Cards fill as many columns as fit, and stack on phones. Links in cards are [checked](../../publishing/build-checks.md) on every build like all other links.
