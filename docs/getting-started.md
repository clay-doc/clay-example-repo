---
title: Getting Started
icon: fa-solid fa-play
---

# Getting Started with Clay

Welcome to Clay! This guide will walk you through setting up your first Clay documentation site from scratch.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Git** — for cloning and version control
- **Clay Oven** — the build tool for Clay ([install instructions](https://github.com/clay-doc/clay-oven))

## Step 1: Create Your Project

Start by creating a new directory for your documentation project:

```bash
mkdir my-docs
cd my-docs
```

## Step 2: Add a Configuration File

Create a `clay.yaml` file in the root of your project:

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
langs:
  - "js"
  - "python"
```

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

## Step 4: Build and Preview

Run Clay Oven to build your documentation:

```bash
clay-oven build
```

That's it! You now have a fully functional documentation site powered by Clay.

## Next Steps

- Learn about [Writing Documentation](writing-documentation.md) to master Markdown in Clay.
- Explore [Configuration](configuration.md) to customize your site.
- Check out how to organize pages in [Organizing Pages](guides/organizing-pages.md).
