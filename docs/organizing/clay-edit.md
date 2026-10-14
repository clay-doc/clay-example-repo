---
title: Editing with clay edit
icon: fa-solid fa-pen-to-square
description: Reorder pages and folders, rename them and edit the site settings in a terminal editor.
order: 4
---

# Editing with clay edit

`clay edit` opens an editor in the terminal for everything around your pages: their order, titles and icons, folder names, and the settings in `clay.yaml`. It writes the same files you would edit by hand, so you can mix both ways freely.

```bash
npx clay edit
```

```text
┌  Clay · edit   Pages   Settings
│
│ › ◆ Introduction             fa-solid fa-house
│   ▾ Getting Started          fa-solid fa-rocket
│   │  ◆ Installation          fa-solid fa-download •
│   │  ◆ Quick Start           fa-solid fa-bolt
│   ▸ Guides                   fa-solid fa-book-open
│
└  ↑↓ select · m move · ←→ fold · ⏎ title · i icon · tab settings · s save · q quit
   1 unsaved change(s)
```

## Pages

The **Pages** tab shows your docs in navigation order. Titles in gray are defaults (from the first heading or the folder name), a yellow dot marks entries you changed.

| Key | Action |
|-----|--------|
| <kbd>↑</kbd> <kbd>↓</kbd> | Select an entry |
| <kbd>m</kbd> or <kbd>Space</kbd> | Pick up the entry; move it with <kbd>↑</kbd> <kbd>↓</kbd>, drop it with <kbd>⏎</kbd> |
| <kbd>←</kbd> <kbd>→</kbd> | Close and open folders |
| <kbd>⏎</kbd> or <kbd>t</kbd> | Edit the title |
| <kbd>i</kbd> | Edit the icon |
| <kbd>Tab</kbd> | Switch to the settings |
| <kbd>s</kbd> | Save |
| <kbd>q</kbd> | Quit; asks first when there are unsaved changes |

Entries move within their folder. When you move one, Clay numbers everything in that folder (`order: 1`, `2`, `3`, …) and writes only the files whose number changed.

In a text field, <kbd>⏎</kbd> applies and <kbd>Esc</kbd> cancels. Leave a field empty to remove the value and go back to the default.

## Settings

The **Settings** tab lists the settings of `clay.yaml`: site, navbar and landing page. Select one and press <kbd>⏎</kbd> to change it. Navbar links can be added with **+ Add link** and removed with <kbd>d</kbd>.

## What it writes

| Change | Written to |
|--------|-----------|
| Page title, icon, order | The page's front matter |
| Folder name, icon, order | `dir-meta.yaml` |
| Settings | `clay.yaml` |

Clay changes only the values you edited. Comments, quotes, the order of keys and the rest of each file stay as they were, so the diff in git shows exactly your change.

> [!TIP]
> Run `npx clay dev` in a second terminal: the site reloads every time you save in the editor.

> [!NOTE]
> On a [multilingual site](../versions-and-languages/translations.md), the editor works on the default language. Titles of translations live in the translated files; folder names given per language keep their other languages.
