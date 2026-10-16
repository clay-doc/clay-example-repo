---
title: Erste Schritte
icon: fa-solid fa-rocket
description: Was Clay ist, wie du es installierst und in fünf Minuten eine erste Seite baust.
---

# Erste Schritte

Clay macht aus einem Ordner voller Markdown-Dateien eine Dokumentationsseite. Du schreibst Seiten in `docs/`, beschreibst die Seite in `clay.yaml`, und Clay erzeugt statische Dateien, die du überall veröffentlichen kannst. Keine Templates, kein Theme zum Einrichten, kein JavaScript zum Schreiben.

::: cards
- [Einführung](introduction.md)
- [Installation](installation.md)
- [Schnellstart](quick-start.md)
- [Projektstruktur](project-structure.md)
:::

## Deine ersten fünf Minuten

::: steps
1. **Installiere Clay** in deinem Projekt:

   ```bash
   npm install --save-dev clay-doc
   ```

2. **Benenne die Seite** in der `clay.yaml`:

   ```yaml [clay.yaml]
   title: "Mein Projekt"
   ```

3. **Schreib eine Seite**, `docs/index.md`:

   ```markdown [docs/index.md]
   # Willkommen

   Das ist die Dokumentation von **Mein Projekt**.
   ```

4. **Schau live zu** mit `npx clay dev`, unter [http://localhost:3000](http://localhost:3000).

5. **Bau sie** mit `npx clay build`. Die Seite liegt in `publish/public`, bereit zum Hochladen.
:::

Der [Schnellstart](quick-start.md) geht dieselben Schritte ausführlicher durch, mit einem eigenen Bereich und einem Blick aufs Ergebnis.

## Was du brauchst

| | |
|---|---|
| **Node.js** | 20.19 oder neuer, das npm mitbringt, siehe [Installation](installation.md) |
| **Deine Dokumentation** | Markdown-Dateien, oder die Lust, welche zu schreiben. Vorhandene READMEs funktionieren, wie sie sind |
| **Einen Editor** | Jeden. `clay dev` zeigt jede Änderung sofort im Browser |
| **Einen Hoster** | Später, zum Veröffentlichen: [GitHub Pages](../publishing/github-pages.md) ist kostenlos und in Minuten eingerichtet |

## Fragen vor dem Start

::: details Muss ich Vue, Nuxt oder JavaScript können?
Nein. Clay ist damit gebaut, aber du schreibst nur Markdown und ein paar Zeilen YAML. Es gibt kein Theme einzurichten und keinen Code zu schreiben.
:::

::: details Kann ich meine vorhandenen Markdown-Dateien nutzen?
Ja. Clay liest das Markdown, das du von GitHub kennst, und Links zwischen `.md`-Dateien funktionieren wie dort. Kopier deine Dateien nach `docs/`, starte `clay dev` und behebe, was die [Build-Prüfungen](../publishing/build-checks.md) melden.
:::

::: details Muss mein Projekt ein JavaScript-Projekt sein?
Nein. Clay läuft mit `npx` in jedem Repository, ob in Go, Python, Java oder etwas anderem geschrieben, siehe [ohne Installation](installation.md#ohne-installation).
:::

::: details Was kostet es?
Nichts. Clay ist Open Source unter der Apache-2.0-Lizenz, und die Seiten, die es baut, laufen auf jedem kostenlosen statischen Hoster.
:::

> [!TIP]
> Du hast schon eine Clay-Seite? Siehe [Umstieg auf Clay 4](../guides/upgrading-to-clay-4.md).
