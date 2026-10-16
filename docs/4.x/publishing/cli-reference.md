---
title: CLI Reference
icon: fa-solid fa-terminal
description: Every command and option of clay, as its help lists them.
order: 5
---

# CLI Reference

Every command and option, as the help of Clay 4.0.0 lists them. This page is [generated](../writing/generated-docs.md) before every build by `scripts/cli-reference.mjs`; the [commands](commands.md) page explains them.

## clay

```text [clay --help]
Clay 4.0.0 - documentation sites from Markdown

Usage: clay <command> [options]

Commands:
  dev       Start a development server with live reload
  build     Build the static site into <out>/public
  preview   Serve the built site like a static host would
  edit      Edit pages, folders, their front matter and order, and clay.yaml: interactively,
            or one change per command for scripts and AI agents ("clay edit help")
  check     Check links, translations and settings without building; --json for programs
  version   Save the latest docs as an older version in docs/<name>/: clay version <name>

Options:
  --root <dir>   Docs project with clay.yaml and docs/ (default: current directory)
  --out <dir>    Output directory (default: <root>/publish)
  --port <port>  Port for dev and preview (default: 3000 and 4173)
  --host         Listen on all interfaces, not just localhost
  --strict       build: fail on warnings such as broken links or config typos
  --verbose      build and dev: show the full Nuxt output instead of the progress
  --json         edit and check: print the result as JSON
  --yes          version: move docs/ into docs/latest/ without asking (the first version)
  -h, --help     Show this help (clay edit --help: the edit commands)
  -v, --version  Show the version

Environment overrides for clay.yaml: CLAY_TITLE, CLAY_BASE_URL, CLAY_SITE_URL, CLAY_FONTAWESOME_KIT
```

## clay edit

```text [clay edit help]
clay edit - change the docs from the command line

Without a command, "clay edit" opens the interactive editor (needs a terminal).
With a command, it does one change and exits, for scripts and AI agents.

Paths are relative to the docs: docs/, or with versions docs/latest/ (docs/<name>/ with --docs-version):
  guides/setup.md   a page            ".md" may be left out: guides/setup
  guides            a folder          its title and order live in guides/index.md
  index.md          the start page    docs/index.md
  ""                the top level     where a folder is expected

Commands:
  list                                 Every page and folder: path, title, icon, order, URL
  show <path>                          All front matter of one page or folder
  set <path> <field>=<value>...        Set front matter; an empty value removes the field
                                       fields: title icon description order list hero
  new page <folder> <title>            Create a page (file name from the title, or --slug)
  new folder <parent> <title>          Create a folder with an index.md
  move <path> <folder>                 Move a page (with its translations) or a folder
  rename <path> <new-name>             Rename the file or folder (without ".md")
                                       --redirect: the old address keeps leading to the page
  order <path> <position>              Put an entry at a position (1 = first) in its folder
  delete <path> --yes                  Delete a page with its translations, or a folder
  translate <path> --lang <code>       Start a translation: copy the original to <name>.<code>.md
  config                               All settings of clay.yaml with their keys
  config get <key>                     One setting, e.g. title or navbar.source.link
  config set <key> <value>             Change a setting; keys of links: navbar.links.<n>.name|icon|link
  config unset <key>                   Remove a setting
  config add-link <name> <icon> <url>  Add a navbar link
  config remove-link <n>               Remove the n-th navbar link (1 = first)

Options:
  --json                Print the result as JSON (see below) instead of text
  --lang <code>         Work in a language other than the default (set, show, list, translate, config)
  --docs-version <name> Work in an older version in docs/<name>/
  --slug <name>         File or folder name for new and move (default: from the title or unchanged)
  --yes                 Confirm delete
  --redirect            move and rename: add the old address to the page's "redirects"

Examples:
  clay edit list --json
  clay edit set guides/setup.md title="Setting up" icon="fa-solid fa-wrench" order=2
  clay edit set guides description=
  clay edit new page guides "Upgrading"
  clay edit move guides/setup.md reference --redirect
  clay edit order guides/setup.md 1
  clay edit set guides/setup.md title=Einrichtung --lang de
  clay edit config set navbar.links.1.icon "fa-solid fa-book"
  clay check --json

Results:
  Changes are written right away, only to the files that change; comments and
  formatting stay. Moving, renaming and deleting do not rewrite links: the
  result lists the links that broke, so you can fix them. Run "clay check"
  afterwards: it reports broken links and settings without building the site.

  With --json, every command prints one object: {"ok": true, ...} with the
  command's result ("written": files changed, "broken": links that broke,
  "moved" and "redirects" for move and rename, and "entries", "entry" or
  "settings" for list, show and config), or
  {"ok": false, "error": "..."} when it fails.

Exit codes: 0 done, 1 failed or problems found (check), 2 wrong usage.
```
