---
title: Components
icon: fa-solid fa-puzzle-piece
description: Tabs, steps, cards, folded sections, prompts, badges, math, diagrams and file trees, written in plain Markdown.
order: 5
---

# Components

Markdown covers text, lists, tables and code. For the rest of what docs need, like the same command for three package managers, a guide in numbered steps or a diagram, Clay has components. They are plain text in your Markdown files: no HTML, nothing to install, and they stay readable in any editor and on GitHub.

::: cards
- [Tabs and Code Groups](tabs.md)
- [Steps](steps.md)
- [Cards](cards.md)
- [Details](details.md)
- [Prompts](prompts.md)
- [Badges](badges.md)
- [Math](math.md)
- [Diagrams](diagrams.md)
- [File Trees](file-trees.md)
:::

## Three ways to write them

| Kind | Looks like | Components |
|------|------------|------------|
| Containers | `::: name` … `:::` around Markdown | [tabs, code groups](tabs.md), [steps](steps.md), [cards](cards.md), [details](details.md), [prompts](prompts.md) |
| Inline | `:badge[New]`, `$E = mc^2$` | [badges](badges.md), [math](math.md) |
| Code blocks | a code block in the language `mermaid` or `tree` | [diagrams](diagrams.md), [file trees](file-trees.md) |

## Containers

A container starts with a line of three colons and the component's name, and ends with a line of three colons on their own. Everything in between is normal Markdown.

```markdown
::: details Why three colons?
They read well as plain text and are used by other documentation tools too, so your docs stay portable.
:::
```

::: details Why three colons?
They read well as plain text and are used by other documentation tools too, so your docs stay portable.
:::

- **The text after the name** is the component's title, where it has one, like the title of [details](details.md).
- **Containers nest.** A container may hold another one, for example tabs inside a folded section. Give the outer one more colons to make clear which line closes which:

  ```markdown
  :::: details Install on your system
  ::: tabs
  == macOS
  `brew install node`
  == Windows
  `winget install OpenJS.NodeJS`
  :::
  ::::
  ```

- **Mistakes stay visible.** A container with a name Clay does not know, or without its closing line, is shown as the text you wrote, so a typo does not hide content.
- **Code blocks are code.** `:::` inside a code block is shown as is; that is how these pages show the syntax.

## Search, links and the contents

- **Everything is searchable**, including tabs that are not shown and folded sections. Opening a search result shows the tab or opens the section it is in.
- **Links are checked** like all others, also inside cards and tabs, see [build checks](../../publishing/build-checks.md).
- **Headings inside containers** get their `#` links and appear under "On this page".

## Without JavaScript and on GitHub

Clay renders components when it builds the site, so pages show them before any JavaScript runs: tabs show their first tab, math is already typeset. Diagrams are the one exception; they are drawn in the browser and show their source until then.

On GitHub, your Markdown files show the components as the text you wrote, which stays readable. GitHub draws `mermaid` diagrams and `$` math itself.
