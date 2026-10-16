---
title: SEO
icon: fa-solid fa-chart-line
description: Titles, descriptions, canonical URLs, Open Graph tags, structured data and a sitemap that Clay creates for search engines.
order: 2
---

# SEO

Clay prepares every page for search engines and link previews on its own. Each page is pre-rendered to complete HTML, so crawlers see the full content without running JavaScript.

## What every page gets

| Tag | Content |
|-----|---------|
| `<title>` | Page title and site title: "Search · Clay" |
| `<meta name="description">` | The page's description, see below |
| `og:title`, `og:description`, `og:type`, `og:site_name` | The same for link previews in chats and social networks |
| `<html lang>` | The language of the page |
| `article:modified_time` | The date of the last change, from git |

With `siteURL` set, pages also get:

| Tag | Content |
|-----|---------|
| `<link rel="canonical">` | The page's full address, so search engines know which URL to show |
| `og:url` | The same, for link previews |
| Breadcrumbs (JSON-LD) | Where the page sits, shown in search results as "Clay › Features › SEO" |
| `hreflang` links | The page's [translations](../versions-and-languages/translations.md) |

## Descriptions

The description is the short text search engines show under a result. Clay takes the first of:

1. `description` in the page's [front matter](../writing/pages.md#front-matter),
2. the first paragraph of the page,
3. the description of the start page, `docs/index.md`.

It is cut to 160 characters at a word boundary. A good description says in one or two sentences what the page answers:

```markdown
---
description: Deploy a Clay site to GitHub Pages with a workflow that builds on every push.
---
```

## Sitemap and robots.txt

With `siteURL`, Clay writes `sitemap.xml` with every page and the date of its last change, and `robots.txt` pointing to it.

```yaml
siteURL: "https://my-org.github.io"
baseURL: "/my-project/"
```

The sitemap is then at `https://my-org.github.io/my-project/sitemap.xml`. Submit it in [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters).

> [!NOTE]
> Search engines only read `robots.txt` at the root of a domain. When your site lives under a path, its `robots.txt` is informational; submit the sitemap in the tools above instead.

## Versions and translations

- Pages of [older versions](../versions-and-languages/versions.md) are regular pages with their own URLs and sitemap entries.
- A page that is not translated yet shows the original text in the other language. Its canonical link points to the original, and it is left out of the sitemap, so search engines do not see duplicate content.
