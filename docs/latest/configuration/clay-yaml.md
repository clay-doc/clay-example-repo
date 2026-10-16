---
title: clay.yaml
icon: fa-solid fa-sliders
description: Reference of every setting in clay.yaml, with defaults and a complete example.
order: 1
---

# clay.yaml

`clay.yaml` sits in the project folder and configures the whole site. Only `title` is required; everything else has a sensible default.

## Examples

::: tabs
== Minimal
```yaml [clay.yaml]
title: "My Project"
```
== GitHub Pages
```yaml [clay.yaml]
title: "My Project"
baseURL: "/my-project/"
siteURL: "https://my-org.github.io"
editURL: "https://github.com/my-org/my-project/edit/main/docs/"
```
== Complete
```yaml [clay.yaml]
title: "My Project"
favicon: "logo.svg"
baseURL: "/my-project/"
siteURL: "https://my-org.github.io"
editURL: "https://github.com/my-org/my-project/edit/main/docs/"
fontawesomeKit: "abc123def4"
version: "3.2"
languages: ["en", "de"]

navbar:
  logo: "logo.svg"
  source:
    name: "GitHub"
    icon: "fa-brands fa-github"
    link: "https://github.com/my-org/my-project"
  links:
    - name: "Website"
      icon: "fa-solid fa-house"
      link: "https://example.com"
    - name: "Changelog"
      icon: "fa-solid fa-list"
      link: "https://github.com/my-org/my-project/releases"

messages:
  de:
    search: "Durchsuchen"

variables:
  major: "4"

head:
  meta:
    - name: "google-site-verification"
      content: "abc123"
```
:::

## Site

| Setting | Default | Purpose |
|---------|---------|---------|
| `title` | required | Name of the site: navbar, browser tab, search results |
| `favicon` | none | Path to the favicon, relative to the project folder |
| `baseURL` | `/` | Path the site is served under, e.g. `/my-project/` for GitHub project pages |
| `siteURL` | none | Origin of the site, e.g. `https://my-org.github.io`; enables canonical URLs, the sitemap, structured data and full addresses in `llms.txt` |
| `lang` | `en` | Language of a single-language site: `<html lang>`, date formats, interface texts |
| `editURL` | none | Base URL to edit a page; the page's file path is appended |
| `fontawesomeKit` | none | ID of a Font Awesome kit; without it, the free icons are used |
| `socialImages` | `true` with `siteURL` | A picture of each page for link previews; `false` turns them off, see [SEO](../features/seo.md#social-images) |
| `pageActions` | all shown | Entries of the page menu: `copyMarkdown`, `openMarkdown`, `chatgpt`, `claude`; `false` hides one, see [the page menu](../features/ai-and-agents.md#the-page-menu) |

### baseURL and siteURL

Together they give the full address of the site. For `https://my-org.github.io/my-project/`:

```yaml
siteURL: "https://my-org.github.io"
baseURL: "/my-project/"
```

`baseURL` is needed whenever the site does not live at the root of its domain; links, images and assets all depend on it. `siteURL` is only the origin: a path in it is ignored, the path always comes from `baseURL`. See [SEO](../features/seo.md) for what `siteURL` enables.

### editURL

With `editURL`, every page shows an **Edit this page** link. Point it at the `docs/` folder of your repository; Clay appends the page's file:

```yaml
editURL: "https://github.com/my-org/my-project/edit/main/docs/"
```

The page `docs/guides/setup.md` then links to `…/edit/main/docs/guides/setup.md`. This works with GitHub, GitLab, Gitea and every host with a similar URL scheme. When the URL ends in `docs/`, pages of [older versions](../organizing/versions.md) link into `docs-archive/<name>/`.

## Navbar

| Setting | Default | Purpose |
|---------|---------|---------|
| `navbar.logo` | none | Image next to the site title |
| `navbar.source.name`, `.icon`, `.link` | none | A link, typically to the repository, shown as its icon with the name as tooltip |
| `navbar.links` | none | More links like the source link, next to it; each has `name`, `icon` and `link` |

Logo and favicon can be files in the project folder (Clay copies them into the site) or full URLs.

## Variables

`variables` sets values that pages fill in with `\{{name}}`, like the current version. See [snippets & variables](../writing/snippets-and-variables.md).

```yaml
variables:
  major: "4"
  node: "20.19"
```

## Generate

`generate` runs commands before every build that write pages into `docs/`, like an API reference from your code. See [generated docs](../writing/generated-docs.md).

```yaml
generate:
  - npx typedoc --plugin typedoc-plugin-markdown --entryFileName index --out docs/api src/index.ts
```

## Head

`head` adds tags to the `<head>` of every page: a chat widget's script, a verification for Google Search Console, a font. Each entry is the tag's attributes; a script's code goes into `code`.

```yaml
head:
  script:
    - src: "https://widget.example.com/chat.js"
      async: true
    - code: "window.chatSettings = {position: 'right'}"
  link:
    - rel: "preconnect"
      href: "https://fonts.example.com"
  meta:
    - name: "google-site-verification"
      content: "abc123"
```

Like every text, values can differ per language. `clay.yaml` is part of the project: scripts in it run on every page, so review them like code.

## Start page

The start page is not configured here: it is `docs/index.md`, a Markdown page with an optional list of pages and a large header. See [index pages](../organizing/index-pages.md).

## Versions and languages

| Setting | Default | Purpose |
|---------|---------|---------|
| `version` | `Latest` | Label of `docs/` in the version switcher |
| `languages` | `[lang]` | Language codes of the site; the first is the default language |
| `messages` | none | Your own interface texts, per language |

See [versions](../organizing/versions.md) and [translations](../organizing/translations.md).

## Theme and analytics

`theme` sets your own colors, corners and fonts, see [themes & icons](../features/themes-and-icons.md#your-own-colors-and-fonts). `analytics` counts page views without cookies, with Plausible, Umami or GoatCounter, see [analytics](../features/analytics.md).

```yaml
theme:
  primary: "#2563eb"
  font: "Lora, serif"
analytics:
  plausible: {}
```

## Values per language

On a multilingual site, every text setting can have one value per language. Languages without a value use the default language's:

```yaml
title:
  en: "My Project"
  de: "Mein Projekt"
navbar:
  links:
    - name: { en: "Website", de: "Webseite" }
      icon: "fa-solid fa-house"
      link: "https://example.com"
```

## Settings in files of their own :badge[New in Clay 4]{tip}

A setting can name a YAML file that holds its value, relative to `clay.yaml`:

```yaml [clay.yaml]
title: "My Project"
siteURL: "https://my-org.github.io"
navbar: config/navbar.yaml
variables: config/variables.yaml
head: config/head.yaml
```

This works for `navbar`, `messages`, `variables`, `head`, `analytics`, `theme`, `generate` and `languages`. The files are checked like `clay.yaml` itself, and `clay dev` reloads when they change.

**When to split.** Keep `clay.yaml` the one place to read the site at a glance: the title, the addresses, the languages. Move a setting into a file of its own when it is long, or maintained by someone else or something else:

- `variables`, when a release script writes the version, so it never touches `clay.yaml`,
- `messages`, when translators look after the interface texts,
- `head`, when scripts and verifications pile up,
- `navbar`, when the links are many.

Short settings are easiest to find where they are; a site with a handful of settings needs no split at all. This site keeps its interface texts in [`config/messages.yaml`](https://github.com/clay-doc/clay-example-repo/blob/main/config/messages.yaml).

> [!NOTE]
> `clay edit` changes settings in `clay.yaml` itself. Settings in files of their own are edited in those files.

## Checks

Clay checks `clay.yaml` on every build and warns about:

- unknown settings, usually typos: `clay.yaml: unknown key "navbar.lgo" is ignored (typo?)`,
- a missing `title`,
- `langs`, a setting from Clay 1 that is no longer needed,
- `index`, `dir-meta.yaml` and `versions/` from Clay 2, see [upgrading to Clay 3](../guides/upgrading-to-clay-3.md).

With `--strict`, these warnings fail the build. See [build checks](../publishing/build-checks.md).

> [!TIP]
> Settings like `baseURL` or `title` can be overridden in CI without editing the file, see [environment variables](environment-variables.md). And `clay edit` edits all of these settings in the terminal, see [clay edit](../organizing/clay-edit.md).
