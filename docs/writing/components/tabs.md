---
title: Tabs and Code Groups
icon: fa-solid fa-table-columns
description: Alternatives in one place, like instructions per system or the same command for npm, pnpm and yarn; the reader's choice is remembered.
order: 1
---

# Tabs and Code Groups

Tabs show alternatives in one place: instructions for each operating system, or the same setting in two formats. Readers see the one they pick, and the others stay out of their way.

## Tabs

````markdown
::: tabs
== macOS
Install Node.js with [Homebrew](https://brew.sh):

```bash
brew install node
```
== Windows
Download the installer from [nodejs.org](https://nodejs.org) and run it.
== Linux
Use your distribution's package manager, for example `sudo apt install nodejs`.
:::
````

::: tabs
== macOS
Install Node.js with [Homebrew](https://brew.sh):

```bash
brew install node
```
== Windows
Download the installer from [nodejs.org](https://nodejs.org) and run it.
== Linux
Use your distribution's package manager, for example `sudo apt install nodejs`.
:::

- **Each `== Label` line starts a tab.** The label is plain text.
- **A tab holds any Markdown:** paragraphs, lists, code blocks, alerts and other components.
- **The first tab shows first.**
- Text before the first label is left out. A `tabs` container without any label is shown as text.

## Code groups

For the same code in several variants, a code group is shorter: each code block becomes a tab, named in square brackets after its language.

````markdown
::: code-group
```bash [npm]
npm install --save-dev clay-doc
```
```bash [pnpm]
pnpm add -D clay-doc
```
```bash [yarn]
yarn add -D clay-doc
```
:::
````

::: code-group
```bash [npm]
npm install --save-dev clay-doc
```
```bash [pnpm]
pnpm add -D clay-doc
```
```bash [yarn]
yarn add -D clay-doc
```
:::

- **Without a name in brackets**, a tab is named after the language, like `yaml` or `json`.
- **Everything else of [code blocks](../code-blocks.md) works**, like highlighted lines: ```` ```ts [clay.config.ts] {2} ````.
- Text between the code blocks of a group is left out.

## The reader's choice is remembered

Picking a tab picks the tab of the same name in every group on the page, and Clay remembers it: a reader who chose **pnpm** once sees pnpm in every group on every page, also on their next visit. The choice is kept in the reader's browser only.

> [!TIP]
> Name the same thing the same way across your docs, always "pnpm" and never "PNPM" on one page and "pnpm" on another, so the choice carries over.

## Keyboard

<kbd>Tab</kbd> moves to the tabs, <kbd>←</kbd> and <kbd>→</kbd> switch between them, <kbd>Home</kbd> and <kbd>End</kbd> jump to the first and the last tab.

## Search

The [search](../../features/search.md) finds the text of every tab. Opening a result that is in a hidden tab shows that tab.
