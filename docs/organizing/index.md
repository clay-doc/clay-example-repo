---
title: Organizing
icon: fa-solid fa-sitemap
order: 4
list: true
---

# Organizing

How pages and folders become navigation, how folders get their pages, and how `clay edit` keeps it all in order.

Clay builds the sidebar from your files: every folder in `docs/` is a section, every Markdown file a page. You decide names, icons and order in front matter, or let `clay edit` do it for you.

| If you want to … | Read |
|------------------|------|
| Understand the sidebar, breadcrumbs and previous/next links | [Navigation](navigation.md) |
| Name a folder, give it an icon or put it in order | [Folders](folders.md) |
| Write an introduction for a folder, or the start page | [Index Pages](index-pages.md) |
| Create, reorder, rename or move pages without touching files by hand | [Editing with clay edit](clay-edit.md) |

## Key ideas

- **The file tree is the navigation.** Move a file, and it moves in the sidebar.
- **`order` puts entries in order.** Entries without it follow alphabetically.
- **A folder's `index.md` describes the folder.** Its front matter names it; its text, if any, is the folder's page.
