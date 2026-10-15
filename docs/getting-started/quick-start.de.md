---
title: Schnellstart
icon: fa-solid fa-bolt
description: Deine erste Clay-Seite, von einem leeren Ordner bis zum fertigen Build in fünf Minuten.
---

# Schnellstart

Von einem leeren Ordner zu einer fertigen Dokumentationsseite in etwa fünf Minuten.

::: steps
1. **Leg das Projekt an.**

   ```bash
   mkdir meine-docs && cd meine-docs
   npm init -y
   npm install --save-dev clay-doc
   ```

2. **Konfiguriere die Seite.** Leg `clay.yaml` im Projektordner an. Nur der Titel ist Pflicht:

   ```yaml
   title: "Mein Projekt"
   ```

3. **Schreib die erste Seite.** Leg `docs/introduction.md` an:

   ```markdown
   ---
   title: Einführung
   icon: fa-solid fa-door-open
   ---

   # Einführung

   Willkommen bei **Mein Projekt**. Das ist die erste Seite seiner Dokumentation.
   ```

   Der Teil zwischen den `---`-Zeilen ist das Front Matter. Es ist optional; ohne es nimmt Clay den Titel aus der ersten Überschrift. Siehe [Seiten](../writing/pages.md).

4. **Schau beim Schreiben zu.**

   ```bash
   npx clay dev
   ```

   Öffne [http://localhost:3000](http://localhost:3000) und klick auf deine Seite. Ändere die Markdown-Datei und speichere: Der Browser zeigt die Änderung sofort.

5. **Füg einen Bereich hinzu.** Seiten in einem Ordner werden zu einem Bereich der Navigation. Leg `docs/guides/setup.md` an:

   ```markdown
   # Einrichtung

   Wie du Mein Projekt einrichtest.
   ```

   Die Seitenleiste zeigt jetzt **Guides**. Für einen anderen Titel, ein Icon und eine eigene Seite des Ordners leg `docs/guides/index.md` an:

   ```markdown
   ---
   title: Anleitungen
   icon: fa-solid fa-book
   list: true
   ---

   # Anleitungen

   Alles, was du zum Benutzen von Mein Projekt brauchst, Schritt für Schritt.
   ```

   Siehe [Indexseiten](../organizing/index-pages.md).

6. **Bau die Seite.**

   ```bash
   npx clay build
   ```

   Clay prüft deine Dokumentation, rendert jede Seite und schreibt eine statische Seite nach `publish/public`. Mit `npx clay preview` prüfst du sie so, wie ein Webhoster sie ausliefert.
:::

Dein Projekt sieht jetzt so aus:

```tree
meine-docs/
  clay.yaml
  docs/
    introduction.md
    guides/
      index.md
      setup.md
  node_modules/
  package.json
  publish/      # die gebaute Seite, bereit zum Hochladen
```

> [!NOTE]
> Trag `publish/` und `node_modules/` in deine `.gitignore` ein. Die Build-Ausgabe entsteht bei jedem Build neu und gehört nicht ins Repository.

## Wie es weitergeht

::: cards
- [GitHub Pages](../publishing/github-pages.md)
- [Indexseiten](../organizing/index-pages.md)
- [Navigation](../organizing/navigation.md)
- [Komponenten](../writing/components/index.md)
:::
