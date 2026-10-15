---
title: Publishing
icon: fa-solid fa-cloud-arrow-up
description: The clay commands, the checks every build runs, and how to put the site online on GitHub Pages or any other host.
order: 6
---

# Publishing

A Clay build is a folder of static files: there is no server to run, and any host that serves files can serve a Clay site.

::: cards
- [Commands](commands.md)
- [Build Checks](build-checks.md)
- [GitHub Pages](github-pages.md)
- [Other Hosts](other-hosts.md)
:::

## From your docs to the web

::: steps
1. **Preview while you write** with `npx clay dev`.
2. **Build and check** with `npx clay build --strict`. Broken links and typos in the settings stop the build.
3. **Look at the result** with `npx clay preview`, the way a web host serves it.
4. **Publish `publish/public`**, best by a workflow on every push, see [GitHub Pages](github-pages.md) or [other hosts](other-hosts.md).
:::

## Where to host

| Host | Cost | Set up in |
|------|------|-----------|
| [GitHub Pages](github-pages.md) | Free for public repositories | A workflow file, see the guide |
| [Netlify, Cloudflare Pages](other-hosts.md#hosting-services) | Free plans | The host's build settings |
| [GitLab Pages](other-hosts.md#hosting-services) | Free | `.gitlab-ci.yml` |
| [Your own server](other-hosts.md#your-own-web-server) | Your server | nginx, Caddy or Docker |

## Before you go live

::: details Does the site live under a path?
A site at `https://my-org.github.io/my-project/` needs `baseURL: "/my-project/"` in `clay.yaml`, or its styles and links break. Check with `npx clay preview`, which serves the site under its `baseURL`.
:::

::: details Do I want links and dates for search engines?
Set `siteURL` to the site's origin, like `https://my-org.github.io`: pages then get canonical links, and the build writes a sitemap. See [SEO](../features/seo.md).
:::

::: details Does CI fetch the full history?
Clay takes the last-updated date of each page from git. Most CI systems clone only the last commit; check out the full history to get the dates, see [page details](../features/page-details.md).
:::

> [!TIP]
> Run `npx clay build --strict` locally before you push. It takes a few seconds and catches the same problems CI would.
