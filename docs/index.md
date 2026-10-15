---
title: Clay Documentation
icon: fa-solid fa-book-open
description: Turn a folder of Markdown files into a fast, searchable documentation website. Everything you need to write, organize and publish docs with Clay.
hero: true
---

Clay turns a folder of Markdown files into a documentation website: a sidebar from your folders, full-text search, code highlighting, components like tabs and diagrams, light and dark themes, versions and translations. You write the pages; Clay does the rest.

## Start in a minute

::: code-group
```bash [npm]
npm install --save-dev clay-doc
echo 'title: "My Project"' > clay.yaml
mkdir docs && echo '# Hello, Clay' > docs/index.md
npx clay dev
```
```bash [pnpm]
pnpm add --save-dev clay-doc
echo 'title: "My Project"' > clay.yaml
mkdir docs && echo '# Hello, Clay' > docs/index.md
pnpm exec clay dev
```
```bash [yarn]
yarn add --dev clay-doc
echo 'title: "My Project"' > clay.yaml
mkdir docs && echo '# Hello, Clay' > docs/index.md
yarn clay dev
```
:::

Open [http://localhost:3000](http://localhost:3000), and every change you save shows up right away. The [quick start](getting-started/quick-start.md) takes it from there.

## The docs

::: cards
- [Getting Started](getting-started/index.md)
- [Writing](writing/index.md)
- [Organizing](organizing/index.md)
- [Features](features/index.md)
- [Configuration](configuration/index.md)
- [Publishing](publishing/index.md)
- [Guides](guides/index.md)
:::

## Why Clay

- **Markdown in, website out.** Pages are Markdown files in `docs/`, folders become the navigation. No templates, no theme to build.
- **More than Markdown.** [Tabs, steps, cards, diagrams, math and file trees](writing/components/index.md), written as plain text.
- **Search built in.** Every page and section is searchable, typos and all, with <kbd>Ctrl</kbd> + <kbd>K</kbd> or <kbd>⌘</kbd> + <kbd>K</kbd>.
- **Fast anywhere.** Every page is pre-rendered to HTML. Host it on GitHub Pages, Netlify or any web server.
- **Checked on every build.** Broken links and unknown settings are reported, and `--strict` stops a deploy that has them.
- **Versions and languages.** Keep the docs of older releases online and translate page by page.
- **Organized in the terminal.** `clay edit` creates, orders, renames and translates pages without touching front matter by hand.

> [!TIP]
> This website is a Clay site. Every page is a Markdown file in the [example repository](https://github.com/clay-doc/clay-example-repo): see how it is made, or copy it as a starting point. Already running Clay 3? See [upgrading to Clay 4](guides/upgrading-to-clay-4.md).
