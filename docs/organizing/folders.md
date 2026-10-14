---
title: Folders
icon: fa-solid fa-folder-open
description: Group pages into folders and give folders names, icons and an order with dir-meta.yaml.
order: 2
---

# Folders

Folders in `docs/` become sections of the navigation. Without any configuration, a folder is named after its folder name: `getting-started` becomes "Getting started", with a folder icon.

## Names, icons and order

`dir-meta.yaml`, next to `clay.yaml`, describes folders. Each entry names a folder by its `path` and sets what it shows:

```yaml
- path: "getting-started"
  name: "Getting Started"
  icon: "fa-solid fa-rocket"
  order: 1

- path: "guides"
  name: "Guides"
  icon: "fa-solid fa-book-open"
  order: 2
```

| Field | Default | Purpose |
|-------|---------|---------|
| `path` | required | The folder's name in `docs/` (just the name, not a path) |
| `name` | folder name, prettified | Name in the sidebar, breadcrumbs and search |
| `icon` | `fa-solid fa-folder` | [Font Awesome](../features/themes-and-icons.md) icon |
| `order` | none | Position among the pages and folders next to it |
| `children` | none | Entries for the folder's subfolders |

## Subfolders

Subfolders are described in `children` of their parent's entry, as deep as your folders go:

```yaml
- path: "guides"
  name: "Guides"
  icon: "fa-solid fa-book-open"
  children:
    - path: "advanced"
      name: "Advanced Guides"
      icon: "fa-solid fa-graduation-cap"
      children:
        - path: "performance"
          name: "Performance"
```

A folder with no entry passes the lookup on: its subfolders are looked up in the same list as the folder itself. You only need entries for the folders you want to change.

## Names in several languages

On a [multilingual site](../versions-and-languages/translations.md), give `name` one value per language:

```yaml
- path: "guides"
  name:
    en: "Guides"
    de: "Anleitungen"
```

Languages without a value use the default language's name.

## Folder pages

Each folder has a page that shows its pages and subfolders as cards, see [navigation](navigation.md#folder-pages).

> [!TIP]
> `dir-meta.yaml` is checked on every build: a misspelled field, like `ordre` or `icons`, is reported as a warning. See [dir-meta.yaml](../configuration/dir-meta-yaml.md) for the reference.
