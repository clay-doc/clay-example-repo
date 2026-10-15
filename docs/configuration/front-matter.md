---
title: Front Matter
icon: fa-solid fa-file-code
description: Reference of every front matter field of pages, folders (index.md) and the start page, with defaults and examples.
order: 2
---

# Front Matter

Front matter is the block of settings at the top of a Markdown file, between two `---` lines. Pages use it for their title and position, folders in their `index.md` for their name, icon, position and layout.

```markdown
---
title: Setup
icon: fa-solid fa-wrench
description: How to install and configure the project in five steps.
order: 2
---

# Setting up the project
```

## Fields

| Field | Type | Default | For | Purpose |
|-------|------|---------|-----|---------|
| `title` | text | first `# heading`, then the file or folder name | all | Title in the sidebar, breadcrumbs, search and browser tab |
| `icon` | text | `fa-solid fa-file`, folders `fa-solid fa-folder` | all | [Font Awesome](../features/themes-and-icons.md) icon |
| `description` | text | first paragraph | all | Summary for search engines and link previews, see [SEO](../features/seo.md) |
| `order` | number | none | all | Position among the entries next to it, see [navigation](../organizing/navigation.md) |
| `cards` | `true` / `false` | `false` | `index.md` | Cards of the folder's pages below the text |
| `hero` | `true` / `false` | `false` | `index.md` | `title`, `icon` and `description` as a large centered header |

## Rules

- Front matter only counts when `---` is the very first line of the file; a horizontal rule further down is never mistaken for it.
- Values may be quoted: `title: "Setup: the long way"`. Quote values that contain `: ` or start with a special character.
- Fields Clay does not know are left alone, so other tools can keep their fields, like `tags` or `author`, in the same block.
- In a translation, `title`, `icon` and `description` are the translation's own; `order` always comes from the original.

## Where each file's front matter applies

| File | Describes |
|------|-----------|
| `docs/setup.md` | The page `/setup` |
| `docs/guides/index.md` | The folder `guides`: its name, icon and order, and its page `/guides` |
| `docs/index.md` | The start page `/` |
| `docs/setup.de.md` | The German page `/de/setup` |

> [!TIP]
> `clay edit` edits all of these fields for every page and folder, in every version and language. See [clay edit](../organizing/clay-edit.md).
