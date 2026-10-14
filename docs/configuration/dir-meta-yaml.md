---
title: dir-meta.yaml
icon: fa-solid fa-folder-tree
description: Reference of dir-meta.yaml, which gives folders their names, icons and order.
order: 2
---

# dir-meta.yaml

`dir-meta.yaml` is optional. It sits next to `clay.yaml` and describes the folders in `docs/`: their display names, icons and position in the navigation. The file is a list of entries, one per folder, nested like the folders.

```yaml
- path: "getting-started"
  name: "Getting Started"
  icon: "fa-solid fa-rocket"
  order: 2

- path: "guides"
  name:
    en: "Guides"
    de: "Anleitungen"
  icon: "fa-solid fa-book-open"
  order: 3
  children:
    - path: "advanced"
      name: "Advanced"
      icon: "fa-solid fa-graduation-cap"
```

## Fields

| Field | Type | Default | Purpose |
|-------|------|---------|---------|
| `path` | text | required | Name of the folder (one level, not a path) |
| `name` | text or one per language | folder name, prettified | Display name |
| `icon` | text | `fa-solid fa-folder` | Font Awesome icon classes |
| `order` | number | none | Position among the folder's neighbors |
| `children` | list | none | Entries for subfolders, with the same fields |

## How entries are found

Clay looks up each folder by its name in the list of its level: top-level folders in the top-level list, subfolders in their parent's `children`.

A folder without an entry passes the lookup on: its subfolders are looked up in the same list as the folder itself. This keeps short files short when only a nested folder needs a name.

## Versions

Every [older version](../versions-and-languages/versions.md) has its own `dir-meta.yaml` in `versions/<name>/`, so folders can be renamed in the current docs without changing older ones. `clay version` copies the file along with the docs.

## Checks

Unknown fields are reported on every build: `dir-meta.yaml: unknown key "[0].icons" is ignored (typo?)`. The number in brackets is the position of the entry in its list, starting at 0.

> [!TIP]
> `clay edit` writes this file for you when you rename or move folders, and keeps your comments and formatting. See [clay edit](../organizing/clay-edit.md).
