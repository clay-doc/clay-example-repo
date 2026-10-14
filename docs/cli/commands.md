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
| `clay edit` | Edit order, titles, icons and settings in the terminal |
| `clay version <name>` | Save the current docs as an older version |

Run it with `npx clay …` in a project that has Clay installed, or through scripts in `package.json`.

## clay dev

```bash
npx clay dev
```

Starts a development server at [http://localhost:3000](http://localhost:3000). It renders each page when you open it and reloads the browser whenever you change a page, an image, `clay.yaml` or `dir-meta.yaml`. Use it while writing; it is not meant to be put online.

## clay build

```bash
npx clay build
```

Checks the docs, renders every page to HTML and writes the finished site to `publish/public`. While it runs, Clay shows its progress:

```text
┌  Clay 2.1.0
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

| Path | Content |
|------|---------|
| `index.html`, `guides/setup/index.html`, … | One HTML file per page |
| `404.html` | The page for unknown addresses |
| `docs/` | Your images and files |
| `_nuxt/` | Scripts and styles |
| `_clay/search.json` | The search index |
| `sitemap.xml`, `robots.txt` | For search engines, see [SEO](../features/seo.md) |

The [build checks](build-checks.md) explain the warnings and `--strict`.

## clay preview

```bash
npx clay preview
```

Serves the last build at [http://localhost:4173](http://localhost:4173), behaving like GitHub Pages and most static hosts:

- the site is served under its `baseURL`,
- `/guides/setup` redirects to `/guides/setup/`,
- unknown addresses get the `404.html` page with status 404.

Run it before you deploy: a page that works in `clay preview` works on the host.

## clay edit

```bash
npx clay edit
```

Opens an editor in the terminal for the order, titles and icons of pages and folders, and for the settings in `clay.yaml`. See [clay edit](../organizing/clay-edit.md).

## clay version

```bash
npx clay version 2.x
```

Copies `docs/` and `dir-meta.yaml` into `versions/2.x/`, keeping the current state of the docs as an older version. See [versions](../versions-and-languages/versions.md).

## Options

| Option | Commands | Default | Purpose |
|--------|----------|---------|---------|
| `--root <dir>` | all | current folder | The project folder with `clay.yaml` and `docs/` |
| `--out <dir>` | build, preview | `<root>/publish` | Output folder; the site goes to `<out>/public` |
| `--port <port>` | dev, preview | `3000`, `4173` | Port of the server |
| `--host` | dev, preview | off | Listen on all network interfaces, for example to open the site on your phone |
| `--strict` | build | off | Fail on warnings, see [build checks](build-checks.md) |
| `--verbose` | build | off | Show the full build output instead of the progress |
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
