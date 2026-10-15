---
title: Editing with clay edit
icon: fa-solid fa-pen-to-square
description: Create, edit, order, rename, move and delete pages and folders, translate them and edit the settings, for every version and language.
order: 4
---

# Editing with clay edit

`clay edit` is an editor in the terminal for everything around your pages: creating pages and folders, their front matter, their order, renaming, moving and deleting them, translations, versions and the settings in `clay.yaml`. It writes the same files you would edit by hand, so you can mix both ways freely.

```bash
npx clay edit
```

```text
┌  Clay · edit   Pages   Settings   latest · en
│
│   ⌂ Clay Documentation          fa-solid fa-book-open
│   ◆ Introduction                fa-solid fa-house
│ › ▾ Getting Started             fa-solid fa-rocket
│   │  ◆ Installation             fa-solid fa-download
│   │  ◆ Quick Start              fa-solid fa-bolt
│   ▸ Writing                     fa-solid fa-pen-nib
│
└  ⏎ details · n page · f folder · m order · o move · r rename · x delete · v/V version · l language · tab · q
```

Changes are written right away, one file at a time, and the editor shows which files it wrote. Use git to review or undo them.

## Pages and folders

The **Pages** tab shows the start page (`⌂`), the folders (`▾`) and the pages (`◆`) in navigation order. Titles in gray are defaults, taken from the first heading or the file name.

| Key | Action |
|-----|--------|
| <kbd>↑</kbd> <kbd>↓</kbd> | Select an entry |
| <kbd>←</kbd> <kbd>→</kbd> | Close and open folders |
| <kbd>⏎</kbd> | Open the details: all front matter fields of the entry |
| <kbd>t</kbd> / <kbd>i</kbd> | Edit the title / icon directly |
| <kbd>n</kbd> | Create a page in the selected folder (or next to the selected page) |
| <kbd>f</kbd> | Create a folder, with an `index.md` |
| <kbd>m</kbd> | Pick the entry up; move it with <kbd>↑</kbd> <kbd>↓</kbd>, drop it with <kbd>⏎</kbd> |
| <kbd>o</kbd> | Move the entry into another folder |
| <kbd>r</kbd> | Rename the file or folder |
| <kbd>x</kbd> | Delete the entry, after asking |
| <kbd>Tab</kbd> | Switch to the settings |
| <kbd>q</kbd> | Quit |

New pages get their title as front matter and as their first heading, and a file name made from the title, which you can change before it is created. New folders get an `index.md` with their title and `list: true`.

Ordering numbers everything in the folder (`order: 1`, `2`, `3`, …) and writes only the files whose number changed.

Renaming and moving take the page's translations along. Clay does not rewrite links to the entry; instead, it lists the links that broke, so you can fix them:

```text
Moved setup.md → guides/setup.md · 2 link(s) broke: introduction.md: "setup.md" points to a missing page (/setup) …
```

## The details

<kbd>⏎</kbd> opens all front matter fields of the selected entry: title, icon, description and order, and for folders and the start page also `list` and `hero` (see [index pages](index-pages.md)). Select a field and press <kbd>⏎</kbd> to change it; yes/no fields switch with <kbd>⏎</kbd>. <kbd>Esc</kbd> leads back to the list.

In a text field, <kbd>⏎</kbd> applies and <kbd>Esc</kbd> cancels. Leave a field empty to remove the value and go back to the default. For a folder without an `index.md`, the editor creates one.

## Versions and languages

The header shows which version and language you are editing.

| Key | Action |
|-----|--------|
| <kbd>v</kbd> | Switch to the next version |
| <kbd>V</kbd> | Save the current docs as a new version, see [versions](../versions-and-languages/versions.md) |
| <kbd>l</kbd> | Switch to the next language |
| <kbd>c</kbd> | Start a translation of the selected entry: copies the original into `*.de.md` and so on |

In another language, pages without a translation are marked **untranslated**. Setting a field of such a page creates the translation from the original first. The order is the same in every language, so it is changed in the default language.

## Settings

The **Settings** tab lists the settings of `clay.yaml`. Select one and press <kbd>⏎</kbd> to change it. Settings with a value per language are edited in the language shown in the header. Navbar links are added with **+ Add link** and removed with <kbd>d</kbd>.

Clay changes only the values you edit. Comments, quotes, the order of keys and the rest of each file stay as they were, so the diff in git shows exactly your change.

> [!TIP]
> Run `npx clay dev` in a second terminal: the site reloads with every change you make in the editor.
