---
title: Andere Hoster
icon: fa-solid fa-server
description: Veröffentliche eine Clay-Seite auf Netlify, Cloudflare Pages, GitLab Pages oder deinem eigenen Webserver.
---

# Andere Hoster

Ein Clay-Build ist ein Ordner mit statischen Dateien, `publish/public`. Jeder Dienst und jeder Server, der statische Dateien ausliefert, kann ihn hosten. Überall kommt es auf drei Dinge an:

1. **Build-Befehl**: `npx clay build --strict`
2. **Ausgabeordner**: `publish/public`
3. **Basis-URL**: Liegt die Seite nicht an der Wurzel ihrer Domain, setze `baseURL` in der `clay.yaml` oder `CLAY_BASE_URL` in den Build-Einstellungen.

## Netlify

Unter **Site configuration → Build & deploy** oder in einer `netlify.toml`:

```toml
[build]
  command = "npx clay build --strict"
  publish = "publish/public"

[build.environment]
  NODE_VERSION = "22"
```

Netlify liefert für unbekannte Adressen von selbst die `404.html` aus.

## Cloudflare Pages

Lege aus deinem Repository ein Projekt an und stelle ein:

| Einstellung | Wert |
|-------------|------|
| Framework preset | None |
| Build command | `npx clay build --strict` |
| Build output directory | `publish/public` |
| Umgebungsvariable | `NODE_VERSION` = `22` |

## GitLab Pages

GitLab veröffentlicht den Ordner `public` eines Jobs namens `pages`. Verschiebe den Build in der `.gitlab-ci.yml` dorthin:

```yaml
pages:
  image: node:22
  variables:
    GIT_DEPTH: 0   # ganze Historie für die Daten der letzten Änderung
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

Projektseiten auf GitLab liegen wie auf GitHub unter dem Namen des Projekts: Setze `baseURL: "/mein-projekt/"`.

## Dein eigener Webserver

Kopiere `publish/public` auf den Server und liefere es als statische Dateien aus. Jede Seite ist ein Ordner mit einer `index.html`, der Server sollte also:

- für Ordneradressen die `index.html` ausliefern (`/guides/setup/` → `/guides/setup/index.html`),
- unbekannte Adressen mit der `404.html` und Status 404 beantworten.

Für nginx, mit der Seite an der Wurzel der Domain:

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

Mit Docker:

```dockerfile
FROM nginx:alpine
COPY publish/public /usr/share/nginx/html
```

> [!TIP]
> `npx clay preview` verhält sich wie diese Hoster. Funktioniert eine Seite dort, funktioniert sie auch auf dem Server.
