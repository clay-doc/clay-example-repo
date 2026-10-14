---
title: Introduction
icon: fa-solid fa-house
description: What Clay is, what it does for you and how a Clay site comes together.
order: 1
---

# Introduction

Clay turns a folder of Markdown files into a fast, searchable documentation website. You write pages in Markdown, describe your site in one small configuration file, and Clay builds a static site that you can host anywhere: GitHub Pages, Netlify, Cloudflare Pages or any web server.

This website is itself a Clay site. Every page you read here is a Markdown file in the [example repository](https://github.com/clay-doc/clay-example-repo), and the repository doubles as a reference you can copy from.

## What you get

| Feature | What it means for your readers |
|---------|--------------------------------|
| Navigation | A sidebar built from your folders, breadcrumbs, and previous/next links on every page |
| Search | Full-text search over every page and section, with typo tolerance and highlighted matches |
| Code | Syntax highlighting for over 200 languages, line highlights, diffs and a copy button |
| Fast pages | Every page is pre-rendered to HTML, so it loads instantly and works without JavaScript |
| Search engines | Titles, descriptions, canonical links, a sitemap and structured data, out of the box |
| Light and dark | Follows the reader's system setting, with a toggle that remembers their choice |
| Versions | Keep the docs of older releases online, with a version switcher |
| Languages | Translate pages one by one; untranslated pages fall back to the original |
| Phones | A layout that works on small screens, with a navigation drawer |

## How it works

A Clay project is a folder with a configuration file and your docs:

```text
my-project/
├── clay.yaml        # site title, links, landing page
├── dir-meta.yaml    # optional: names and icons of folders
└── docs/            # your Markdown pages, images and files
```

You work with three commands:

```bash
npx clay dev       # live preview while you write
npx clay build     # build the static site into publish/public
npx clay preview   # check the build the way a web host serves it
```

Clay is a single npm package, `clay-doc`. It builds on [Nuxt](https://nuxt.com) and [Vue](https://vuejs.org), but you never have to touch either: there is no theme to set up and no code to write.

## Where to go next

- New to Clay? Start with the [installation](getting-started/installation.md) and the [quick start](getting-started/quick-start.md).
- Writing pages? See [pages](writing/pages.md), [Markdown](writing/markdown.md) and [code blocks](writing/code-blocks.md).
- Setting up a site? The [clay.yaml reference](configuration/clay-yaml.md) lists every option.
- Publishing? Follow [GitHub Pages](deployment/github-pages.md) or [other hosts](deployment/other-hosts.md).
- Coming from Clay 1 and Clay Oven? Read [migrating from Clay 1](guides/migrating-from-clay-1.md).
