---
title: Andere Hoster
icon: fa-solid fa-server
description: Eine Clay-Seite auf Netlify, Cloudflare Pages, GitLab Pages oder dem eigenen Webserver veröffentlichen.
---

# Andere Hoster

Ein Clay-Build ist ein Ordner statischer Dateien, `publish/public`. Jeder Dienst und jeder Server, der statische Dateien ausliefert, kann ihn hosten. Drei Einstellungen zählen überall:

| Einstellung | Wert |
|-------------|------|
| Build-Befehl | `npx clay build --strict` |
| Ausgabeordner | `publish/public` |
| Basis-URL | `/` an der Wurzel einer Domain; sonst `baseURL` in der `clay.yaml` oder `CLAY_BASE_URL` in den Build-Einstellungen |

## Hosting-Dienste

::: tabs
== Netlify
Unter **Site configuration → Build & deploy** oder in einer `netlify.toml`:

```toml
[build]
  command = "npx clay build --strict"
  publish = "publish/public"

[build.environment]
  NODE_VERSION = "22"
```

Netlify liefert `404.html` für unbekannte Adressen von selbst aus.
== Cloudflare Pages
Leg ein Projekt aus deinem Repository an und setz:

| Einstellung | Wert |
|-------------|------|
| Framework preset | None |
| Build command | `npx clay build --strict` |
| Build output directory | `publish/public` |
| Umgebungsvariable | `NODE_VERSION` = `22` |
== GitLab Pages
GitLab veröffentlicht den Ordner `public` eines Jobs namens `pages`. Verschieb den Build in der `.gitlab-ci.yml` dorthin:

```yaml
pages:
  image: node:22
  variables:
    GIT_DEPTH: 0   # ganze Historie für die Änderungsdaten
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

Projektseiten liegen auf GitLab unter dem Namen des Projekts, wie auf GitHub: Setz `baseURL: "/mein-projekt/"`.
:::

## Dein eigener Webserver

Kopier `publish/public` auf den Server und liefere es als statische Dateien aus. Jede Seite ist ein Ordner mit einer `index.html`, der Server sollte also:

- für Ordneradressen die `index.html` ausliefern (`/guides/setup/` → `/guides/setup/index.html`),
- unbekannte Adressen mit `404.html` und Status 404 beantworten.

::: tabs
== nginx
Mit der Seite an der Wurzel der Domain:

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
== Docker
```dockerfile
FROM nginx:alpine
COPY publish/public /usr/share/nginx/html
```
== Caddy
```text
docs.example.com {
    root * /var/www/docs
    file_server
    handle_errors {
        rewrite * /404.html
        file_server
    }
}
```
:::

> [!TIP]
> `npx clay preview` verhält sich wie diese Hoster. Funktioniert eine Seite dort, funktioniert sie auch auf dem Server.
