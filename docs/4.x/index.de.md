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

## Bereit für KI :badge[Neu in Clay 4]{tip}

Deine Dokumentation, für Menschen und für die Assistenten, die sie fragen. Jede Seite wird auch als Markdown veröffentlicht, `llms.txt` listet alle für Sprachmodelle, und Leser kopieren eine Seite oder öffnen sie mit einem Klick in ChatGPT oder Claude. Coding-Agenten ändern und prüfen die Dokumentation mit `clay edit` und `clay check`.

::: cards
- [Jede Seite als Markdown](features/ai-and-agents.md#jede-seite-als-markdown) {fa-brands fa-markdown}
  Probier es aus: Auch diese Seite gibt es als index.md.
- [llms.txt](features/ai-and-agents.md#llmstxt) {fa-solid fa-robot}
  Der Index, nach dem Sprachmodelle suchen, bei jedem Build geschrieben.
- [Für Coding-Agenten](features/ai-and-agents.md#für-coding-agenten) {fa-solid fa-terminal}
  Eine Änderung pro Befehl, Ergebnisse als JSON und eine Hilfe für Agenten.
:::

::: prompt
Lies https://clay-doc.github.io/clay-example-repo/de/llms.txt und richte dann
eine Clay-Dokumentation für dieses Repository ein: eine clay.yaml mit dem Namen
des Projekts, einen Ordner docs/ mit einer Startseite und einen Workflow für
GitHub Pages. Führe `npx clay check` aus, bis es durchläuft.
:::

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
- **Bereit für KI.** Jede Seite als Markdown, `llms.txt` und Befehle, die Coding-Agenten verstehen, siehe [KI & Agenten](features/ai-and-agents.md).
- **Mehr als Markdown.** [Tabs, Schritte, Karten, Diagramme, Formeln und Dateibäume](writing/components/index.md), geschrieben als schlichter Text.
- **Suche inklusive.** Jede Seite und jeder Abschnitt ist durchsuchbar, auch mit Tippfehlern, mit <kbd>Strg</kbd> + <kbd>K</kbd> oder <kbd>⌘</kbd> + <kbd>K</kbd>.
- **Überall schnell.** Jede Seite wird vorab als HTML gerendert. Veröffentliche sie auf GitHub Pages, Netlify oder jedem Webserver.
- **Bei jedem Build geprüft.** Kaputte Links und unbekannte Einstellungen werden gemeldet, und `--strict` stoppt ein Deployment, das welche hat.
- **Versionen und Sprachen.** Halte die Dokumentation älterer Releases online und übersetze Seite für Seite.
- **Ordnen im Terminal.** `clay edit` legt Seiten an, ordnet, benennt und übersetzt sie, ohne dass du Front Matter von Hand anfasst.

> [!TIP]
> Diese Website ist eine Clay-Seite. Jede Seite ist eine Markdown-Datei im [Beispiel-Repository](https://github.com/clay-doc/clay-example-repo): Sieh dir an, wie sie gemacht ist, oder kopier sie als Ausgangspunkt. Du nutzt schon Clay 3? Siehe [Umstieg auf Clay 4](guides/upgrading-to-clay-4.md).
