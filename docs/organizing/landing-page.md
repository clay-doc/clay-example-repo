---
title: Landing Page
icon: fa-solid fa-flag-checkered
description: Configure the start page of your site with a title, description and icon.
order: 3
---

# Landing Page

The landing page is the first thing visitors see at the root of your site. It shows a large title, a short description and a card for every top-level page and folder, in navigation order.

Configure it in the `index` section of `clay.yaml`:

```yaml
title: "My Project"
index:
  title: "Welcome to My Project"
  description: "Everything you need to install, configure and run My Project."
  icon: "fa-solid fa-rocket"
```

| Field | Default | Purpose |
|-------|---------|---------|
| `index.title` | the site `title` | The large heading |
| `index.description` | none | The text below the heading |
| `index.icon` | none | An icon in front of the heading |

The description does a second job: it is the landing page's summary for search engines and link previews, and the fallback description for pages that have none. See [SEO](../features/seo.md).

## On multilingual sites

Give each field one value per language:

```yaml
index:
  title:
    en: "Welcome to My Project"
    de: "Willkommen bei My Project"
  description:
    en: "Everything you need to know."
    de: "Alles, was du wissen musst."
```

Every language has its own start page: `/` for the default language, `/de` for German, and so on. See [translations](../versions-and-languages/translations.md).

> [!TIP]
> The cards on the landing page are the top level of your docs. Keep it short, five to eight entries, and group the rest into folders.
