---
title: Installation
icon: fa-solid fa-download
description: Install Clay into a project with npm, pnpm or yarn, or run it without installing anything.
order: 2
---

# Installation

Clay is published on npm as [`clay-doc`](https://www.npmjs.com/package/clay-doc). It needs **Node.js 20.19 or newer**:

```bash
node --version   # v20.19.0 or newer
```

## Add Clay to a project

Install Clay as a development dependency of the project you want to document:

::: code-group
```bash [npm]
npm install --save-dev clay-doc
```
```bash [pnpm]
pnpm add --save-dev clay-doc
```
```bash [yarn]
yarn add --dev clay-doc
```
:::

This adds Clay to `package.json` and pins the exact version in the lockfile, so every build, on your machine or in CI, uses the same version.

Add scripts to `package.json`, so nobody has to remember the commands:

```json [package.json]
{
  "scripts": {
    "docs:dev": "clay dev",
    "docs:build": "clay build --strict",
    "docs:preview": "clay preview"
  }
}
```

Then `npm run docs:dev` starts the live preview.

> [!TIP]
> Clay installs two commands, `clay` and `clay-doc`. They do the same; use whichever reads better in your scripts.

## Without installing

Documentation often lives in repositories written in Go, Python, Java or other languages, where a `package.json` would be out of place. You do not need one: `npx` runs Clay straight from npm in any folder with a `clay.yaml` and a `docs/` folder.

::: tabs
== For a first look
```bash
npx clay-doc dev
```
== For builds
Name a version, so every build uses the same one:

```bash
npx clay-doc@4 build --strict
```
:::

> [!NOTE]
> Tools like Dependabot cannot update a version written into a command, so you update it yourself.

## Updating Clay

::: code-group
```bash [npm]
npm install --save-dev clay-doc@latest
```
```bash [pnpm]
pnpm add --save-dev clay-doc@latest
```
```bash [yarn]
yarn add --dev clay-doc@latest
```
:::

Clay follows [semantic versioning](https://semver.org): minor and patch releases add features and fix bugs without breaking your docs. Major releases come with an upgrade guide, like [upgrading to Clay 4](../guides/upgrading-to-clay-4.md). The [changelog](https://github.com/clay-doc/clay/blob/main/CHANGELOG.md) lists every change.

## Next

Build your first site with the [quick start](quick-start.md).
