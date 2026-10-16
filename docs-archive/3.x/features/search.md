---
title: Search
icon: fa-solid fa-magnifying-glass
description: Full-text search over every page and section, with typo tolerance, highlighted matches and keyboard shortcuts.
order: 1
---

# Search

Every Clay site has a full-text search, with nothing to set up and no external service. Clay builds the search index when it builds the site, and the browser loads it the first time someone searches.

## Opening the search

| Shortcut | Action |
|----------|--------|
| <kbd>Ctrl</kbd> + <kbd>K</kbd> or <kbd>⌘</kbd> + <kbd>K</kbd> | Open or close the search |
| <kbd>/</kbd> | Open the search (when not typing in a field) |
| <kbd>↑</kbd> <kbd>↓</kbd> | Move through the results |
| <kbd>⏎</kbd> | Open the selected result |
| <kbd>Esc</kbd> | Close the search |

The magnifying glass in the navbar opens it too.

## What is found

The index covers every page, split into sections at each `##` and `###` heading. A result leads straight to its section, not just to the page, and shows the matching text with the matched words highlighted. After you open a result, the words stay marked on the page, and the page scrolls to the first match.

Results are ranked by where the words appear, best first:

1. page titles,
2. section headings,
3. folder names (the path above a result, like "Guides › Advanced"),
4. the text,
5. code blocks.

## Typing and typos

- **Every word must match.** "github pages" finds sections with both words; if no section has all of them, Clay shows sections with any of them.
- **The last word is completed** while you type: "deplo" finds "deployment".
- **Small typos are forgiven** in words of four letters or more: "confgiuration" finds "configuration".

## Recent pages

Before you type, the search lists the pages you opened from it recently. They are kept in your browser only, per site, and never sent anywhere.

## Versions and languages

Each [version](../versions-and-languages/versions.md) and [language](../versions-and-languages/translations.md) has its own index, and the search looks in the one you are reading: results never lead into another version or language.

> [!TIP]
> Good headings make good search results. A section titled "Deploying to GitHub Pages" is found by everyone looking for it; one titled "Step 3" is not.
