---
title: Commands
icon: fa-solid fa-terminal
description: Every clay command and option, from the live preview to building, previewing, editing and saving versions.
order: 1
---

# Commands

Clay is used through one command, `clay` (or its alias `clay-doc`), with a subcommand:

```text
clay <command> [options]
```

| Command | Purpose |
|---------|---------|
| `clay dev` | Live preview while you write |
| `clay build` | Build the static site |
| `clay preview` | Serve the build the way a web host would |
| `clay edit` | Edit pages, folders and settings: in an editor in the terminal, or one command at a time |
| `clay check` | Check links and settings without building |
| `clay version <name>` | Save the current docs as an older version |

Run it with `npx clay …` in a project that has Clay installed, or through scripts in `package.json`.

## clay dev

```bash
npx clay dev
```

Starts a development server at [http://localhost:3000](http://localhost:3000). It renders each page when you open it and reloads the browser whenever you change a page, an image or `clay.yaml`. Use it while writing; it is not meant to be put online.

While it runs, the terminal shows the address, warnings such as broken links, and each page it reloads:

```text
┌  Clay 4.0.0 · dev
│
●  Loaded 40 pages from docs  languages de (30/30 translated) · 52ms
│
●  Started dev server  1.1s
│  ➜ Local:   http://localhost:3000/
│  ➜ Network: use --host to expose
│
│  ↻ Reloaded docs/writing/pages.md  10:24:31
```

`--verbose` shows the full output of Nuxt instead.

## clay build

```bash
npx clay build
```

Checks the docs, renders every page to HTML and writes the finished site to `publish/public`. While it runs, Clay shows its progress:

```text
┌  Clay 4.0.0
│
●  Loaded 29 pages from docs  languages de (29/29 translated) · 310ms
│
●  Built client  199 modules · 960ms
│
●  Built server  126 modules · 420ms
│
◝  Prerendering pages · 41 routes
```

Without a terminal, for example in CI, it prints the finished steps as plain lines.

The build contains:

```tree
publish/public/
  index.html             # one HTML file per page
  guides/
    setup/
      index.html
  404.html               # the page for unknown addresses
  docs/                  # your images and files
  _nuxt/                 # scripts and styles
  _clay/
    search.json          # the search index
  sitemap.xml            # for search engines, see SEO
  robots.txt
  llms.txt               # for language models, see AI & agents
  llms-full.txt
  guides/setup.md        # every page as Markdown
```

See [SEO](../features/seo.md) for the sitemap and `robots.txt`, and [AI & agents](../features/ai-and-agents.md) for `llms.txt` and the Markdown of each page.

The [build checks](build-checks.md) explain the warnings and `--strict`.

## clay preview

```bash
npx clay preview
```

Serves the last build at [http://localhost:4173](http://localhost:4173), behaving like GitHub Pages and most static hosts:

- the site is served under its `baseURL`,
- `/guides/setup` redirects to `/guides/setup/`,
- unknown addresses get the `404.html` page with status 404.

Run it before you deploy: a page that works in `clay preview` works on the host. The terminal lists each address that got a 404, which points to a missing file or a wrong `baseURL`.

## clay edit

```bash
npx clay edit
```

Opens an editor in the terminal to create, edit, order, rename, move, delete and translate pages and folders, in every version and language, and to edit the settings in `clay.yaml`. See [clay edit](../organizing/clay-edit.md).

With a command, it makes one change and exits, for scripts and AI agents:

```bash
npx clay edit set guides/setup.md title="Setting up" order=2
npx clay edit help    # every command, with examples
```

See [from scripts and AI agents](../organizing/clay-edit.md#from-scripts-and-ai-agents).

## clay check :badge[New in Clay 4]{tip}

```bash
npx clay check
```

Runs the [build checks](build-checks.md), broken links, settings, translations and versions, without building the site. It takes a second and exits with 1 when it finds a problem, so it suits a quick look after a change, pre-commit hooks and agents. With `--json`, it prints `{"ok": …, "pages": …, "problems": [...]}`.

## clay version

```bash
npx clay version 2.x
```

Copies `docs/` into `docs-archive/2.x/`, keeping the current state of the docs as an older version. In `clay edit`, <kbd>V</kbd> does the same. See [versions](../organizing/versions.md).

## Options

| Option | Commands | Default | Purpose |
|--------|----------|---------|---------|
| `--root <dir>` | all | current folder | The project folder with `clay.yaml` and `docs/` |
| `--out <dir>` | build, preview | `<root>/publish` | Output folder; the site goes to `<out>/public` |
| `--port <port>` | dev, preview | `3000`, `4173` | Port of the server |
| `--host` | dev, preview | off | Listen on all network interfaces, for example to open the site on your phone |
| `--strict` | build | off | Fail on warnings, see [build checks](build-checks.md) |
| `--verbose` | build, dev | off | Show the full output of Nuxt instead of the progress |
| `--json` | edit, check | off | Print the result as JSON, for scripts and agents |
| `--lang <code>` | edit | default language | Work in another language |
| `--docs-version <name>` | edit | latest | Work in an older version in `docs-archive/<name>/` |
| `--slug <name>` | edit | from the title | File or folder name for `new` and `move` |
| `--yes` | edit | off | Confirm `delete` |
| `-h`, `--help` | | | Show the help |
| `-v`, `--version` | | | Show Clay's version |

Examples:

```bash
# Docs in a subfolder of a larger repository
npx clay build --root documentation

# Build into dist/public
npx clay build --out dist

# Preview on another port, reachable from other devices
npx clay preview --port 8080 --host
```
