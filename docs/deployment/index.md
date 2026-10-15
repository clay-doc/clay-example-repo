---
title: Deployment
icon: fa-solid fa-cloud-arrow-up
order: 9
list: true
---

# Deployment

A Clay build is a folder of static files. Publish it on GitHub Pages with a ready-made workflow, or on any other host.

There is no server to run: any host that serves files can serve a Clay site. Two things matter everywhere:

- **The base URL.** A site at `https://example.com/docs/` needs to know it lives under `/docs/`.
- **Building in CI.** Let your host or a workflow run `clay build --strict` on every push, so the site always matches your docs.

| If you publish on … | Read |
|---------------------|------|
| GitHub Pages | [GitHub Pages](github-pages.md) |
| Netlify, Cloudflare Pages, GitLab Pages or your own server | [Other Hosts](other-hosts.md) |
