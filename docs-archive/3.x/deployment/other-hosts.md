---
title: Other Hosts
icon: fa-solid fa-server
description: Deploy a Clay site to Netlify, Cloudflare Pages, GitLab Pages or your own web server.
order: 2
---

# Other Hosts

A Clay build is a folder of static files, `publish/public`. Any service or server that serves static files can host it. Three things matter everywhere:

1. **Build command**: `npx clay build --strict`
2. **Output folder**: `publish/public`
3. **Base URL**: if the site does not live at the root of its domain, set `baseURL` in `clay.yaml` or `CLAY_BASE_URL` in the build settings.

## Netlify

In **Site configuration → Build & deploy**, or in a `netlify.toml`:

```toml
[build]
  command = "npx clay build --strict"
  publish = "publish/public"

[build.environment]
  NODE_VERSION = "22"
```

Netlify serves `404.html` for unknown addresses on its own.

## Cloudflare Pages

Create a project from your repository and set:

| Setting | Value |
|---------|-------|
| Framework preset | None |
| Build command | `npx clay build --strict` |
| Build output directory | `publish/public` |
| Environment variable | `NODE_VERSION` = `22` |

## GitLab Pages

GitLab publishes the folder `public` of a job named `pages`. Move the build there in `.gitlab-ci.yml`:

```yaml
pages:
  image: node:22
  variables:
    GIT_DEPTH: 0   # full history for last-updated dates
  script:
    - npm ci
    - npx clay build --strict
    - mv publish/public public
  artifacts:
    paths:
      - public
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```

Project sites on GitLab live under the project's name, like on GitHub: set `baseURL: "/my-project/"`.

## Your own web server

Copy `publish/public` to the server and serve it as static files. Each page is a folder with an `index.html`, so the server should:

- serve `index.html` for folder addresses (`/guides/setup/` → `/guides/setup/index.html`),
- answer unknown addresses with `404.html` and status 404.

For nginx, with the site at the root of the domain:

```nginx
server {
    listen 80;
    server_name docs.example.com;
    root /var/www/docs;

    location / {
        try_files $uri $uri/ =404;
    }

    error_page 404 /404.html;
}
```

With Docker:

```dockerfile
FROM nginx:alpine
COPY publish/public /usr/share/nginx/html
```

> [!TIP]
> `npx clay preview` behaves like these hosts. If a page works there, it works on the server.
