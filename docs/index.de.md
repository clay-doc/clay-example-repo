---
title: Clay-Dokumentation
icon: fa-solid fa-book-open
description: Mach aus einem Ordner voller Markdown-Dateien eine schnelle, durchsuchbare Dokumentationsseite. Alles, was du zum Schreiben, Ordnen und Veröffentlichen mit Clay brauchst.
hero: true
---

Clay macht aus einem Ordner voller Markdown-Dateien eine Dokumentationsseite: eine Seitenleiste aus deinen Ordnern, Volltextsuche, Syntaxhervorhebung, Komponenten wie Tabs und Diagramme, helles und dunkles Design, Versionen und Übersetzungen. Du schreibst die Seiten; um den Rest kümmert sich Clay.

## In einer Minute starten

::: code-group
```bash [npm]
npm install --save-dev clay-doc
echo 'title: "Mein Projekt"' > clay.yaml
mkdir docs && echo '# Hallo, Clay' > docs/index.md
npx clay dev
```
```bash [pnpm]
pnpm add --save-dev clay-doc
echo 'title: "Mein Projekt"' > clay.yaml
mkdir docs && echo '# Hallo, Clay' > docs/index.md
pnpm exec clay dev
```
```bash [yarn]
yarn add --dev clay-doc
echo 'title: "Mein Projekt"' > clay.yaml
mkdir docs && echo '# Hallo, Clay' > docs/index.md
yarn clay dev
```
:::

Öffne [http://localhost:3000](http://localhost:3000); jede Änderung, die du speicherst, erscheint sofort. Der [Schnellstart](getting-started/quick-start.md) führt von dort aus weiter.

## Die Dokumentation

::: cards
- [Erste Schritte](getting-started/index.md)
- [Schreiben](writing/index.md)
- [Ordnen](organizing/index.md)
- [Funktionen](features/index.md)
- [Konfiguration](configuration/index.md)
- [Veröffentlichen](publishing/index.md)
- [Anleitungen](guides/index.md)
:::

## Warum Clay

- **Markdown rein, Website raus.** Seiten sind Markdown-Dateien in `docs/`, Ordner werden zur Navigation. Keine Templates, kein Theme zum Bauen.
- **Mehr als Markdown.** [Tabs, Schritte, Karten, Diagramme, Formeln und Dateibäume](writing/components/index.md), geschrieben als schlichter Text.
- **Suche inklusive.** Jede Seite und jeder Abschnitt ist durchsuchbar, auch mit Tippfehlern, mit <kbd>Strg</kbd> + <kbd>K</kbd> oder <kbd>⌘</kbd> + <kbd>K</kbd>.
- **Überall schnell.** Jede Seite wird vorab als HTML gerendert. Veröffentliche sie auf GitHub Pages, Netlify oder jedem Webserver.
- **Bei jedem Build geprüft.** Kaputte Links und unbekannte Einstellungen werden gemeldet, und `--strict` stoppt ein Deployment, das welche hat.
- **Versionen und Sprachen.** Halte die Dokumentation älterer Releases online und übersetze Seite für Seite.
- **Ordnen im Terminal.** `clay edit` legt Seiten an, ordnet, benennt und übersetzt sie, ohne dass du Front Matter von Hand anfasst.

> [!TIP]
> Diese Website ist eine Clay-Seite. Jede Seite ist eine Markdown-Datei im [Beispiel-Repository](https://github.com/clay-doc/clay-example-repo): Sieh dir an, wie sie gemacht ist, oder kopier sie als Ausgangspunkt. Du nutzt schon Clay 3? Siehe [Umstieg auf Clay 4](guides/upgrading-to-clay-4.md).
