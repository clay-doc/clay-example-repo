---
title: Features
icon: fa-solid fa-wand-magic-sparkles
description: What every Clay site comes with - docs for AI assistants and agents, search, page details, themes and icons, and search engine optimization.
order: 4
---

# Features

What every Clay site comes with. None of these need setup: they work as soon as you build, and a few settings in `clay.yaml` or front matter fine-tune them.

::: cards
- [AI & Agents](ai-and-agents.md)
- [Search](search.md)
- [SEO](seo.md)
- [Page Details](page-details.md)
- [Themes & Icons](themes-and-icons.md)
- [Analytics](analytics.md)
:::

## Out of the box, and what fine-tunes it

| Feature | Works without setup | Fine-tune with |
|---------|---------------------|----------------|
| [AI & agents](ai-and-agents.md) | Every page as Markdown, `llms.txt`, a menu to copy a page or ask an assistant, commands for coding agents | `siteURL` for full addresses |
| [Search](search.md) | Every page and section, typos forgiven, filters by section | Good headings; nothing else |
| [SEO](seo.md) | Titles, descriptions, link previews | `siteURL` for canonical links, the sitemap and structured data |
| [Page details](page-details.md) | Contents of the page, previous and next links | `editURL` for edit links; git history for last-updated dates |
| [Themes & icons](themes-and-icons.md) | Light and dark, free Font Awesome icons | `theme` for your colors and fonts; `fontawesomeKit` for Pro icons |
| [Analytics](analytics.md) | Nothing is counted | `analytics` for Plausible, Umami or GoatCounter, without cookies |

## For every reader

- **Fast.** Every page is pre-rendered to HTML: it shows before any JavaScript runs, and works without it.
- **On every screen.** On phones, the navigation moves into a drawer, and the contents of a page fold up above it.
- **With the keyboard.** A "Skip to content" link, clear focus rings and shortcuts like <kbd>Ctrl</kbd> + <kbd>K</kbd> for the search.
- **Calm.** Motion follows the system: with "reduce motion" turned on, nothing slides or fades.

> [!TIP]
> Press <kbd>Ctrl</kbd> + <kbd>K</kbd> or <kbd>⌘</kbd> + <kbd>K</kbd> on any page of this site to try the search.
