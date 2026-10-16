---
title: Veröffentlichen
icon: fa-solid fa-cloud-arrow-up
description: Die clay-Befehle, die Prüfungen jedes Builds und wie die Seite auf GitHub Pages oder bei einem anderen Hoster online geht.
---

# Veröffentlichen

Ein Clay-Build ist ein Ordner statischer Dateien: Es gibt keinen Server zu betreiben, und jeder Hoster, der Dateien ausliefert, kann eine Clay-Seite ausliefern.

::: cards
- [Befehle](commands.md)
- [Build-Prüfungen](build-checks.md)
- [GitHub Pages](github-pages.md)
- [Andere Hoster](other-hosts.md)
:::

## Von deiner Dokumentation ins Web

::: steps
1. **Schau beim Schreiben zu** mit `npx clay dev`.
2. **Bau und prüfe** mit `npx clay build --strict`. Kaputte Links und Tippfehler in den Einstellungen stoppen den Build.
3. **Sieh dir das Ergebnis an** mit `npx clay preview`, so wie ein Webhoster es ausliefert.
4. **Veröffentliche `publish/public`**, am besten mit einem Workflow bei jedem Push, siehe [GitHub Pages](github-pages.md) oder [andere Hoster](other-hosts.md).
:::

## Wo hosten

| Hoster | Kosten | Eingerichtet mit |
|--------|--------|------------------|
| [GitHub Pages](github-pages.md) | Kostenlos für öffentliche Repositories | Einer Workflow-Datei, siehe Anleitung |
| [Netlify, Cloudflare Pages](other-hosts.md#hosting-dienste) | Kostenlose Tarife | Den Build-Einstellungen des Hosters |
| [GitLab Pages](other-hosts.md#hosting-dienste) | Kostenlos | `.gitlab-ci.yml` |
| [Dein eigener Server](other-hosts.md#dein-eigener-webserver) | Dein Server | nginx, Caddy oder Docker |

## Bevor du online gehst

::: details Liegt die Seite unter einem Pfad?
Eine Seite unter `https://meine-org.github.io/mein-projekt/` braucht `baseURL: "/mein-projekt/"` in der `clay.yaml`, sonst brechen Styles und Links. Prüf es mit `npx clay preview`, das die Seite unter ihrer `baseURL` ausliefert.
:::

::: details Willst du Links und Daten für Suchmaschinen?
Setz `siteURL` auf den Ursprung der Seite, etwa `https://meine-org.github.io`: Seiten bekommen dann kanonische Links, und der Build schreibt eine Sitemap. Siehe [SEO](../features/seo.md).
:::

::: details Holt die CI die ganze Historie?
Clay nimmt das Änderungsdatum jeder Seite aus Git. Die meisten CI-Systeme klonen nur den letzten Commit; checke die ganze Historie aus, um die Daten zu bekommen, siehe [Seitendetails](../features/page-details.md).
:::

> [!TIP]
> Führ `npx clay build --strict` vor dem Pushen lokal aus. Es dauert ein paar Sekunden und findet dieselben Probleme wie die CI.
