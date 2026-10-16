---
title: Installation
icon: fa-solid fa-download
description: Install Clay into a project with npm, or try it without installing anything.
order: 1
---

# Installation

Clay is published on npm as [`clay-doc`](https://www.npmjs.com/package/clay-doc). It needs **Node.js 20.19 or newer**, which comes with `npm` and `npx`.

```bash
node --version   # v20.19.0 or newer
```

## Add Clay to a project

Install Clay as a development dependency of the project you want to document:

```bash
npm install --save-dev clay-doc
```

This adds Clay to `package.json` and pins the exact version in `package-lock.json`, so every build, on your machine or in CI, uses the same version.

Add scripts to `package.json` so nobody has to remember the commands:

```json
{
  "scripts": {
    "docs:dev": "clay dev",
    "docs:build": "clay build",
    "docs:preview": "clay preview"
  }
}
```

Then `npm run docs:dev` starts the live preview.

> [!TIP]
> Clay installs two commands, `clay` and `clay-doc`. They do the same; use whichever reads better in your scripts.

## Try Clay without installing

In any folder with a `clay.yaml` and a `docs/` folder, `npx` runs Clay straight from npm:

```bash
npx clay-doc dev
```

This is handy for a first look. For builds in CI, use a fixed version, either through `package.json` or with an explicit version:

```bash
npx clay-doc@2.1.0 build --strict
```

## Projects without package.json

Documentation often lives in repositories written in Go, Python, Java or other languages. You do not need a `package.json` there: run Clay with `npx clay-doc@<version>` locally and in CI. The trade-off is that tools like Dependabot cannot update a version written into a command, so you update it yourself.

## Updating Clay

```bash
npm install --save-dev clay-doc@latest
```

Clay follows [semantic versioning](https://semver.org): minor and patch releases add features and fix bugs without breaking your docs. The [changelog](https://github.com/clay-doc/clay/blob/main/CHANGELOG.md) lists every change.

## Next steps

Continue with the [quick start](quick-start.md) to build your first site.
