---
title: Getting Started
icon: fa-solid fa-rocket
description: What Clay is, how to install it and how to build a first site in five minutes.
order: 1
---

# Getting Started

Clay turns a folder of Markdown files into a documentation website. You write pages in `docs/`, describe the site in `clay.yaml`, and Clay builds static files you can publish anywhere. No templates, no theme to configure, no JavaScript to write.

::: cards
- [Introduction](introduction.md)
- [Installation](installation.md)
- [Quick Start](quick-start.md)
- [Project Structure](project-structure.md)
:::

## Your first five minutes

::: steps
1. **Install Clay** in your project:

   ```bash
   npm install --save-dev clay-doc
   ```

2. **Name the site** in `clay.yaml`:

   ```yaml [clay.yaml]
   title: "My Project"
   ```

3. **Write a page**, `docs/index.md`:

   ```markdown [docs/index.md]
   # Welcome

   This is the documentation of **My Project**.
   ```

4. **Watch it live** with `npx clay dev`, at [http://localhost:3000](http://localhost:3000).

5. **Build it** with `npx clay build`. The site is in `publish/public`, ready to upload.
:::

The [quick start](quick-start.md) goes through the same steps in more detail, with a section of its own and a look at the result.

## What you need

| | |
|---|---|
| **Node.js** | 20.19 or newer, which comes with npm, see [installation](installation.md) |
| **Your docs** | Markdown files, or the wish to write some. Existing READMEs work as they are |
| **An editor** | Any. `clay dev` shows every change in the browser right away |
| **A host** | Later, to publish: [GitHub Pages](../publishing/github-pages.md) is free and set up in minutes |

## Questions before you start

::: details Do I need to know Vue, Nuxt or JavaScript?
No. Clay is built with them, but you only write Markdown and a few lines of YAML. There is no theme to set up and no code to write.
:::

::: details Can I use the Markdown files I already have?
Yes. Clay reads the Markdown you know from GitHub, and links between `.md` files work like they do there. Copy your files into `docs/`, start `clay dev`, and fix what the [build checks](../publishing/build-checks.md) report.
:::

::: details Does my project have to be a JavaScript project?
No. Clay runs with `npx` in any repository, written in Go, Python, Java or anything else, see [without installing](installation.md#without-installing).
:::

::: details What does it cost?
Nothing. Clay is open source under the Apache 2.0 license, and the sites it builds run on any free static host.
:::

> [!TIP]
> Already have a Clay site? See [upgrading to Clay 4](../guides/upgrading-to-clay-4.md).
