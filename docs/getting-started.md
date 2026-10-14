---
title: Getting Started
icon: fa-solid fa-play
order: 1
---

# Getting Started with Clay

Welcome to Clay! This guide walks you through setting up your first documentation site from scratch with [Clay](https://github.com/clay-doc/clay).

## Prerequisites

- **Node.js 20.19 or newer**, which includes `npm` and `npx`
- A project repository where you want to add documentation

> [!TIP]
> Want to try Clay first? In any folder with a `clay.yaml` and a `docs/` directory, run `npx clay-doc dev`. Nothing needs to be installed.

## Step 1: Create Your Project

Start by creating a new directory for your documentation project (or use an existing repository):

```bash
mkdir my-docs
cd my-docs
npm init -y
npm install --save-dev clay-doc
```

## Step 2: Add a Configuration File

Create a `clay.yaml` file in the root of your project. Only the title is required:

```yaml
title: "My Project"
```

A fuller configuration adds a logo, links and a landing page:

```yaml
title: "My Project"
favicon: "logo.svg"
baseURL: "/"
navbar:
  logo: "logo.svg"
  source:
    name: "Github"
    icon: "fa-brands fa-github"
    link: "https://github.com/my-org/my-project"
index:
  title: "Welcome to My Project"
  description: "Documentation for My Project."
  icon: "fa-solid fa-book"
```

> [!NOTE]
> Icons use [Font Awesome](https://fontawesome.com/). The free icons work out of the box; set `fontawesomeKit` to your kit ID to use your own kit instead.

## Step 3: Create Your First Document

Create a `docs/` directory and add a Markdown file:

```bash
mkdir docs
```

Then create `docs/introduction.md`:

```markdown
---
title: Introduction
icon: fa-solid fa-door-open
---

# Introduction

Welcome to My Project! This is your first documentation page.
```

## Step 4: Preview While You Write

Start the development server:

```bash
npx clay dev
```

Open [http://localhost:3000](http://localhost:3000). The page reloads whenever you change a doc or the configuration.

## Step 5: Build Your Site

```bash
npx clay build
```

This renders every page into a static site in `publish/public`, ready for any static host such as GitHub Pages. To check the result the way a host would serve it:

```bash
npx clay preview
```

That's it! You now have a fully functional documentation site powered by Clay.

## Next Steps

- Learn about [Writing Documentation](writing-documentation.md) to master Markdown in Clay.
- Explore [Configuration](configuration.md) for a full reference of all options.
- Check out how to organize pages in [Organizing Pages](guides/organizing-pages.md).
