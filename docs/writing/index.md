---
title: Writing
icon: fa-solid fa-pen-nib
description: Everything about the content of a page, from Markdown and code blocks to components, links and images.
order: 2
---

# Writing

Every page is a Markdown file in `docs/`, written in **Clay Flavored Markdown** (CFM): the Markdown you know from GitHub, plus syntax highlighting, alerts and components. Clay checks your links on every build.

::: cards
- [Pages](pages.md)
- [Markdown](markdown.md)
- [Code Blocks](code-blocks.md)
- [Alerts](alerts.md)
- [Components](components/index.md)
- [Links & Images](links-and-images.md)
- [HTML](html.md)
- [Snippets & Variables](snippets-and-variables.md)
:::

## A page at a glance

One file, from front matter to components:

::: tabs
== Result
**Setup** is the page's title in the sidebar; its text starts like this:

> [!TIP]
> Already installed? Skip to [the configuration](../configuration/clay-yaml.md).

::: code-group
```bash [npm]
npm install --save-dev clay-doc
```
```bash [pnpm]
pnpm add --save-dev clay-doc
```
:::
== Markdown
````markdown
---
title: Setup
icon: fa-solid fa-wrench
description: Install and configure the project in five minutes.
---

# Setting up the project

> [!TIP]
> Already installed? Skip to [the configuration](../configuration/clay-yaml.md).

::: code-group
```bash [npm]
npm install --save-dev clay-doc
```
```bash [pnpm]
pnpm add --save-dev clay-doc
```
:::
````
:::

## What to use when

| You want to … | Use |
|---------------|-----|
| Show a command or a file | a [code block](code-blocks.md), with highlighted lines or a diff |
| Show the same thing for npm, pnpm and yarn, or for each system | [tabs or a code group](components/tabs.md) |
| Walk readers through something in order | [steps](components/steps.md) |
| Point out a tip, a warning or a risk | an [alert](alerts.md) |
| Hide what only some readers need | [details](components/details.md) |
| Lead readers to other pages | [cards](components/cards.md) or [links](links-and-images.md) |
| Explain how parts fit together | a [diagram](components/diagrams.md) or a [file tree](components/file-trees.md) |
| Suggest what to ask an AI assistant or agent | a [prompt](components/prompts.md) |
| Mark something as new or deprecated | a [badge](components/badges.md) |

## Key ideas

- **One file, one page.** `docs/guides/setup.md` becomes `/guides/setup`.
- **Links work like on GitHub.** Link to the `.md` file; Clay turns it into the page's URL and reports links that lead nowhere.
- **Files next to your pages are published.** Images and downloads in `docs/` keep their relative paths.
- **Plain text stays plain.** Components are written as text too, so every page reads well in an editor and on GitHub.
