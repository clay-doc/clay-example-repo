---
title: Troubleshooting
icon: fa-solid fa-screwdriver-wrench
description: Solutions for the most common problems with Clay sites, from missing styles to missing dates.
order: 4
---

# Troubleshooting

## The deployed site has no styles, or links lead to 404

The site is served under a path, but Clay built it for the root. Set `baseURL` to that path, with slashes on both sides:

```yaml
baseURL: "/my-project/"
```

Check it with `npx clay preview`: it serves the site under its `baseURL`, like the host does.

## Images do not show

Reference images relative to the page, like `img/screen.png` or `../img/screen.png`. Paths starting with `/` point to the root of the domain, not to your docs, and break under a `baseURL`. `npx clay build` reports images that do not exist.

## "Last updated" is missing

Clay reads the dates from git. Either the docs are not in a git repository, or CI checked out only the last commit. In GitHub Actions:

```yaml
- uses: actions/checkout@v7
  with:
    fetch-depth: 0
```

In GitLab CI, set `GIT_DEPTH: 0`.

## Icons are missing or show as squares

- Check the icon's classes on [fontawesome.com](https://fontawesome.com/icons): both the style and the name are needed, `fa-solid fa-rocket`.
- Pro icons only work with a [kit](../features/themes-and-icons.md#font-awesome-kits) that includes them.
- With a kit, add your site's domain to the kit's allowed domains in your Font Awesome account.

## Changes do not show up in clay dev

`clay dev` reloads the browser when a page, an image or `clay.yaml` changes. If nothing happens, check that you edit the files of the project `clay dev` was started in, and look at its output for errors.

## The port is in use

Another program uses port 3000 (or 4173 for `clay preview`). Choose another one:

```bash
npx clay dev --port 3001
```

## The build fails on a page

Clay shows which page failed and why. Common causes:

- **A link in raw HTML** points to a page that does not exist. The link check only sees Markdown links; fix the HTML link.
- **Front matter** is not closed: the second `---` line is missing.

Run `npx clay build --verbose` for the complete output.

## Opening index.html directly looks broken

The site needs a web server: opened from disk (`file://…`), the browser cannot load its styles, scripts and search. Use `npx clay preview`.

## Node.js is too old

Clay needs Node.js 20.19 or newer. Check with `node --version`, and update Node.js from [nodejs.org](https://nodejs.org) or with your version manager.

## Still stuck?

Open an issue in the [Clay repository](https://github.com/clay-doc/clay/issues) with the command you ran and its output.
