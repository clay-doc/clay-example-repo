---
title: Environment Variables
icon: fa-solid fa-terminal
description: Override settings from clay.yaml at build time, for example in CI or for a staging site.
order: 3
---

# Environment Variables

Some settings differ between environments: a staging site lives under another path, a fork deploys to another domain, the Font Awesome kit is a secret. Environment variables override these settings without changing `clay.yaml`:

| Variable | Overrides | Example |
|----------|-----------|---------|
| `CLAY_TITLE` | `title` | `CLAY_TITLE="My Docs (Preview)"` |
| `CLAY_BASE_URL` | `baseURL` | `CLAY_BASE_URL="/preview/"` |
| `CLAY_SITE_URL` | `siteURL` | `CLAY_SITE_URL="https://staging.example.com"` |
| `CLAY_FONTAWESOME_KIT` | `fontawesomeKit` | `CLAY_FONTAWESOME_KIT="abc123def4"` |

They apply to `clay build` and `clay dev`. Empty variables are ignored.

::: tabs
== macOS and Linux
```bash
CLAY_BASE_URL="/preview/" CLAY_TITLE="My Docs (Preview)" npx clay build
```
== Windows (PowerShell)
```powershell
$env:CLAY_BASE_URL = "/preview/"; $env:CLAY_TITLE = "My Docs (Preview)"; npx clay build
```
:::

`clay preview` reads `CLAY_BASE_URL` too, so serve a build with the same value it was built with:

```bash
CLAY_BASE_URL="/preview/" npx clay preview
```

> [!IMPORTANT]
> The values are baked into the site when it is built. Changing them on the web server afterwards has no effect; build again instead.

## In CI

Pass variables in the workflow, and secrets from the repository settings:

::: tabs
== GitHub Actions
```yaml
- name: Build docs
  run: npx clay build --strict
  env:
    CLAY_FONTAWESOME_KIT: ${{ secrets.CLAY_FONTAWESOME_KIT }}
```
== GitLab CI
```yaml
build-docs:
  script: npx clay build --strict
  variables:
    CLAY_BASE_URL: "/docs/"
```
Secrets like the kit ID go into **Settings → CI/CD → Variables**, where GitLab passes them to every job.
:::

This site works that way: its `clay.yaml` contains a placeholder kit, and the real kit ID comes from a repository secret, so it never appears in the repository. A value that is not a kit ID, like the placeholder, is ignored and the free icons are used, which keeps local builds working.

## Staging and pull request previews

Build the same docs for several targets by changing only the variables:

```bash
# Production
npx clay build

# Staging under another path and domain
CLAY_SITE_URL="https://staging.example.com" CLAY_BASE_URL="/docs/" npx clay build --out publish-staging
```
