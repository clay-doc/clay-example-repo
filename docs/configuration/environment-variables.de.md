---
title: Umgebungsvariablen
icon: fa-solid fa-terminal
description: Einstellungen der clay.yaml beim Build überschreiben, etwa in der CI oder für eine Staging-Seite.
---

# Umgebungsvariablen

Manche Einstellungen unterscheiden sich je nach Umgebung: Eine Staging-Seite liegt unter einem anderen Pfad, ein Fork veröffentlicht auf eine andere Domain, das Font-Awesome-Kit ist geheim. Umgebungsvariablen überschreiben diese Einstellungen, ohne die `clay.yaml` zu ändern:

| Variable | Überschreibt | Beispiel |
|----------|--------------|----------|
| `CLAY_TITLE` | `title` | `CLAY_TITLE="Meine Doku (Vorschau)"` |
| `CLAY_BASE_URL` | `baseURL` | `CLAY_BASE_URL="/preview/"` |
| `CLAY_SITE_URL` | `siteURL` | `CLAY_SITE_URL="https://staging.example.com"` |
| `CLAY_FONTAWESOME_KIT` | `fontawesomeKit` | `CLAY_FONTAWESOME_KIT="abc123def4"` |

Sie gelten für `clay build` und `clay dev`. Leere Variablen werden ignoriert.

::: tabs
== macOS und Linux
```bash
CLAY_BASE_URL="/preview/" CLAY_TITLE="Meine Doku (Vorschau)" npx clay build
```
== Windows (PowerShell)
```powershell
$env:CLAY_BASE_URL = "/preview/"; $env:CLAY_TITLE = "Meine Doku (Vorschau)"; npx clay build
```
:::

Auch `clay preview` liest `CLAY_BASE_URL`. Liefere einen Build also mit demselben Wert aus, mit dem er gebaut wurde:

```bash
CLAY_BASE_URL="/preview/" npx clay preview
```

> [!IMPORTANT]
> Die Werte werden beim Build fest in die Seite eingebaut. Sie nachträglich auf dem Webserver zu ändern, hat keine Wirkung; baue stattdessen neu.

## In der CI

Übergib Variablen im Workflow, und Geheimnisse aus den Einstellungen des Repositorys:

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
Geheimnisse wie die Kit-ID gehören unter **Settings → CI/CD → Variables**, von wo GitLab sie an jeden Job übergibt.
:::

Diese Seite macht es genau so: Ihre `clay.yaml` enthält einen Platzhalter, und die echte Kit-ID kommt aus einem Secret des Repositorys, damit sie nie im Repository steht. Ein Wert, der keine Kit-ID ist, wie der Platzhalter, wird ignoriert, und die kostenlosen Icons werden genutzt. So funktionieren auch lokale Builds.

## Staging und Vorschauen für Pull Requests

Baue dieselbe Dokumentation für mehrere Ziele, indem du nur die Variablen änderst:

```bash
# Produktion
npx clay build

# Staging unter anderem Pfad und anderer Domain
CLAY_SITE_URL="https://staging.example.com" CLAY_BASE_URL="/docs/" npx clay build --out publish-staging
```
