---
title: Writing
icon: fa-solid fa-pen-nib
order: 3
list: true
---

# Writing

Everything about the content of a page: Markdown, code blocks, alerts, links, images and HTML.

Every page is a Markdown file in `docs/`. Clay supports the Markdown you know from GitHub, adds syntax highlighting and callouts, and checks your links on every build.

| If you want to … | Read |
|------------------|------|
| Know how a file becomes a page and where its title comes from | [Pages](pages.md) |
| Look up headings, lists, tables and task lists | [Markdown](markdown.md) |
| Show code with highlighting, diffs and a copy button | [Code Blocks](code-blocks.md) |
| Add a note, tip or warning | [Alerts](alerts.md) |
| Link to other pages and sections, or add images | [Links & Images](links-and-images.md) |
| Use HTML where Markdown is not enough | [HTML](html.md) |

## Key ideas

- **One file, one page.** `docs/guides/setup.md` becomes `/guides/setup`.
- **Links work like on GitHub.** Link to the `.md` file; Clay turns it into the page's URL and reports links that lead nowhere.
- **Files next to your pages are published.** Images and downloads in `docs/` keep their relative paths.
