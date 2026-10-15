---
title: Command Line
icon: fa-solid fa-terminal
order: 8
list: true
---

# Command Line

The `clay` command: its subcommands and options, and the checks every build runs.

You need five commands, usually run with `npx` or from the scripts in `package.json`:

| Command | Does |
|---------|------|
| `clay dev` | Live preview while you write |
| `clay build` | Builds the site into static files |
| `clay preview` | Serves the built site, as readers will see it |
| `clay edit` | Edits pages, folders and settings in the terminal |
| `clay version <name>` | Saves the current docs as an older version |

Every option is in [Commands](commands.md). What `clay build` checks, and how `--strict` makes problems fail the build, is in [Build Checks](build-checks.md).

> [!TIP]
> Use `clay build --strict` in CI: a broken link then stops the deploy instead of reaching readers.
