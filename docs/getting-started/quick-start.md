---
title: Quick Start
icon: fa-solid fa-bolt
description: Build your first Clay site from an empty folder in five minutes.
order: 3
---

# Quick Start

From an empty folder to a finished documentation site in about five minutes.

::: steps
1. **Create the project.**

   ```bash
   mkdir my-docs && cd my-docs
   npm init -y
   npm install --save-dev clay-doc
   ```

2. **Configure the site.** Create `clay.yaml` in the project folder. Only the title is required:

   ```yaml
   title: "My Project"
   ```

3. **Write the first page.** Create `docs/introduction.md`:

   ```markdown
   ---
   title: Introduction
   icon: fa-solid fa-door-open
   ---

   # Introduction

   Welcome to **My Project**. This is the first page of its documentation.
   ```

   The part between the `---` lines is front matter. It is optional; without it, Clay takes the title from the first heading. See [pages](../writing/pages.md).

4. **Preview while you write.**

   ```bash
   npx clay dev
   ```

   Open [http://localhost:3000](http://localhost:3000) and click your page. Edit the Markdown file and save: the browser shows your change right away.

5. **Add a section.** Pages in a folder become a section of the navigation. Create `docs/guides/setup.md`:

   ```markdown
   # Setup

   How to set up My Project.
   ```

   The sidebar now shows **Guides**. To give the folder another title, an icon and a page of its own, add `docs/guides/index.md`:

   ```markdown
   ---
   title: User Guides
   icon: fa-solid fa-book
   list: true
   ---

   # User Guides

   Everything you need to use My Project, step by step.
   ```

   See [index pages](../organizing/index-pages.md).

6. **Build the site.**

   ```bash
   npx clay build
   ```

   Clay checks your docs, renders every page and writes a static site to `publish/public`. Check it the way a web host would serve it with `npx clay preview`.
:::

Your project now looks like this:

```tree
my-docs/
  clay.yaml
  docs/
    introduction.md
    guides/
      index.md
      setup.md
  node_modules/
  package.json
  publish/      # the built site, ready to upload
```

> [!NOTE]
> Add `publish/` and `node_modules/` to your `.gitignore`. The build output is created fresh on every build and does not belong in the repository.

## Coming from another tool

Docs written for MkDocs, Docusaurus, VitePress or another tool are Markdown too. A coding agent can move them to Clay:

::: prompt
Read https://clay-doc.github.io/clay-example-repo/llms-full.txt to learn how Clay
works. Then move the documentation in this repository to Clay: its settings to
clay.yaml, its navigation to folders, index.md files and `order`, and the old
tool's own syntax, like admonitions and tabs, to Clay Flavored Markdown.
Remove the old tool's files once `npx clay build --strict` passes.
:::

## Where to go from here

::: cards
- [GitHub Pages](../publishing/github-pages.md)
- [Index Pages](../organizing/index-pages.md)
- [Navigation](../organizing/navigation.md)
- [Components](../writing/components/index.md)
:::
