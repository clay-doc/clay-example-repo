---
title: Quick Start
icon: fa-solid fa-bolt
description: Build your first Clay site from an empty folder in five minutes.
order: 2
---

# Quick Start

This guide takes you from an empty folder to a finished documentation site in about five minutes.

## 1. Create the project

```bash
mkdir my-docs
cd my-docs
npm init -y
npm install --save-dev clay-doc
```

## 2. Configure the site

Create `clay.yaml` in the project folder. Only the title is required:

```yaml
title: "My Project"
```

## 3. Write the first page

Create a `docs/` folder with a Markdown file, `docs/introduction.md`:

```markdown
---
title: Introduction
icon: fa-solid fa-door-open
---

# Introduction

Welcome to **My Project**. This is the first page of its documentation.
```

The part between the `---` lines is front matter. It is optional; without it, Clay takes the title from the first heading. See [pages](../writing/pages.md) for all fields.

## 4. Preview while you write

```bash
npx clay dev
```

Open [http://localhost:3000](http://localhost:3000). The start page lists your page; click it to read it. Edit the Markdown file and save: the browser reloads with your change.

## 5. Add structure

Pages in a folder become a section in the navigation. Create `docs/guides/setup.md`:

```markdown
# Setup

How to set up My Project.
```

The sidebar now shows a **Guides** section. To give the folder another name, an icon and an introduction of its own, add `docs/guides/index.md`:

```markdown
---
title: User Guides
icon: fa-solid fa-book
list: true
---

# User Guides

Everything you need to use My Project, step by step.
```

The text becomes the folder's page at `/guides`, with a list of its pages below. In the same way, `docs/index.md` becomes the start page; see [index pages](../organizing/index-pages.md).

## 6. Build the site

```bash
npx clay build
```

Clay checks your docs, renders every page and writes a static site to `publish/public`. Check it the way a web host would serve it:

```bash
npx clay preview
```

That's it: `publish/public` is ready to upload. [GitHub Pages](../deployment/github-pages.md) shows how to publish it automatically on every push.

> [!NOTE]
> Add `publish/` and `node_modules/` to your `.gitignore`. The build output is created fresh on every build and does not belong in the repository.

## Where to go from here

- Write the start page: [index pages](../organizing/index-pages.md).
- Order pages and folders: [navigation](../organizing/navigation.md).
- See every setting: [clay.yaml](../configuration/clay-yaml.md).
