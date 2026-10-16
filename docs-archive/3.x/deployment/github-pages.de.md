---
title: GitHub Pages
icon: fa-brands fa-github
description: Veröffentliche eine Clay-Seite auf GitHub Pages, mit einem Workflow, der die Dokumentation bei jedem Push prüft und ausliefert.
---

# GitHub Pages

[GitHub Pages](https://pages.github.com) hostet statische Seiten kostenlos, direkt aus einem Repository. Mit dem Workflow auf dieser Seite prüft jeder Push auf `main` die Dokumentation, baut die Seite und veröffentlicht sie. Diese Seite wird genau so ausgeliefert.

## 1. Die Basis-URL setzen

Die Seite eines Repositorys liegt unter seinem Namen, `https://<besitzer>.github.io/<repository>/`. Sag Clay das in der `clay.yaml`:

```yaml
baseURL: "/mein-projekt/"
siteURL: "https://meine-org.github.io"
```

| Art der Seite | Adresse | `baseURL` |
|---------------|---------|-----------|
| Projektseite | `https://meine-org.github.io/mein-projekt/` | `/mein-projekt/` |
| Benutzer- oder Organisationsseite (Repository `meine-org.github.io`) | `https://meine-org.github.io/` | `/` |
| Eigene Domain | `https://docs.example.com/` | `/` |

## 2. Pages einschalten

Öffne im Repository **Settings → Pages** und stelle **Source** auf **GitHub Actions**.

## 3. Den Workflow hinzufügen

Lege `.github/workflows/deploy.yaml` an:

```yaml
name: Deploy Docs

on:
  push:
    branches: [main]
  workflow_dispatch:

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v7
        with:
          # Ganze Historie, damit Seiten zeigen, wann sie zuletzt geändert wurden
          fetch-depth: 0

      - uses: actions/setup-node@v7
        with:
          node-version: lts/*
          cache: npm

      - run: npm ci

      # --strict lässt den Build bei kaputten Links und Tippfehlern in der Konfiguration scheitern
      - run: npx clay build --strict

      - uses: actions/configure-pages@v6

      - uses: actions/upload-pages-artifact@v5
        with:
          path: ./publish/public

      - id: deployment
        uses: actions/deploy-pages@v5
```

Pushe ihn. Nach etwa einer Minute ist die Seite online; der Lauf des Workflows zeigt ihre Adresse.

> [!TIP]
> Um nur zu bauen, wenn sich die Dokumentation ändert, ergänze Pfade im Auslöser:
>
> ```yaml
> on:
>   push:
>     branches: [main]
>     paths: ["docs/**", "docs-archive/**", "clay.yaml", "package-lock.json"]
> ```

## Ohne package.json

In Repositories, die keine JavaScript-Projekte sind, ersetzt du `npm ci` und den Build-Schritt durch eine feste Clay-Version:

```yaml
      - uses: actions/setup-node@v7
        with:
          node-version: lts/*

      - run: npx clay-doc@2.1.0 build --strict
```

## Geheimnisse

Werte, die nicht ins Repository gehören, etwa ein Font-Awesome-Kit, kommen unter **Settings → Secrets and variables → Actions** und erreichen Clay als [Umgebungsvariablen](../configuration/environment-variables.md):

```yaml
      - run: npx clay build --strict
        env:
          CLAY_FONTAWESOME_KIT: ${{ secrets.CLAY_FONTAWESOME_KIT }}
```

## Eigene Domain

Trag die Domain unter **Settings → Pages → Custom domain** ein und folge GitHubs Anleitung für die DNS-Einträge. Dann liefert die Seite von der Wurzel aus:

```yaml
baseURL: "/"
siteURL: "https://docs.example.com"
```

## Clay aktuell halten

Lass Dependabot Clay-Updates als Pull Requests vorschlagen, mit einer `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: weekly
```

Ergänze einen Workflow, der in Pull Requests `npx clay build --strict` ausführt, und jedes Update wird geprüft, bevor du es übernimmst.
