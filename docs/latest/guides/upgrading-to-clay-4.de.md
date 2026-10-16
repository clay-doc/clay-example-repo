---
title: Umstieg auf Clay 4
icon: fa-solid fa-circle-up
description: Eine Clay-3-Seite auf Clay 4 bringen - das Front-Matter-Feld cards heißt jetzt list, Dateien mit _ am Anfang sind Snippets, und ältere Versionen ziehen nach docs/.
---

# Umstieg auf Clay 4 :badge[Aktuell]{tip}

Clay 4 ändert drei Dinge: Das Front-Matter-Feld `cards` heißt jetzt `list`, Dateien und Ordner, deren Name mit `_` beginnt, sind keine Seiten mehr: Sie enthalten [Snippets](../writing/snippets-and-variables.md), und ältere Versionen ziehen von `docs-archive/` nach `docs/`. Alles andere, deine Seiten, Ordner, Links, Übersetzungen und die `clay.yaml`, bleibt, wie es ist. Bis du es umbenannt hast, meldet `clay build` jede Datei, die noch `cards` nutzt, mit einer Warnung, und `--strict` scheitert.

## Auf einen Blick

| Clay 3 | Clay 4 |
|--------|--------|
| `cards: true` in einer `index.md` | `list: true` |
| `docs/_entwuerfe/idee.md` ist eine Seite | Dateien und Ordner mit `_` am Anfang sind keine Seiten |
| `docs/` und `docs-archive/1.x/` | `docs/latest/` und `docs/1.x/`, verschoben von `npx clay version` |

Den Umstieg kann ein Coding-Agent übernehmen:

::: prompt
Stell die Clay-Dokumentation dieses Repositorys auf Clay 4 um, nach
https://clay-doc.github.io/clay-example-repo/de/guides/upgrading-to-clay-4.md.
Der Umstieg ist fertig, wenn `npx clay build --strict` durchläuft.
:::

## Schritte

::: steps
1. **Aktualisiere Clay.**

   ::: code-group
   ```bash [npm]
   npm install --save-dev clay-doc@4
   ```
   ```bash [pnpm]
   pnpm add --save-dev clay-doc@4
   ```
   ```bash [yarn]
   yarn add --dev clay-doc@4
   ```
   :::

2. **Benenne `cards` in `list` um.** Schreib in jeder `index.md` mit `cards: true` stattdessen `list: true`:

   ::: tabs
   == Clay 3
   ```markdown [docs/guides/index.md]
   ---
   title: Anleitungen
   cards: true
   ---
   ```
   == Clay 4
   ```markdown [docs/guides/index.md]
   ---
   title: Anleitungen
   list: true
   ---
   ```
   :::

   Durchsuche deine Dokumentation danach, oder lass dir die Dateien vom Build auflisten:

   ```bash
   grep -rl "^cards:" docs docs-archive
   ```

3. **Benenne Seiten um, die mit `_` beginnen**, falls es welche gibt, und die Links darauf. Finde sie mit:

   ```bash
   find docs docs-archive -name "_*"
   ```

4. **Verschiebe ältere Versionen**, falls du `docs-archive/` hast:

   ```bash
   npx clay version
   ```

   Das verschiebt `docs/` nach `docs/latest/` und jedes `docs-archive/<name>/` nach `docs/<name>/`, damit alle Versionen gleich tief liegen, und gibt Pfaden, die aus `docs/` hinausführen, ein `../` mehr. Es zeigt jede Änderung und fragt vorher; siehe [die erste Version](../organizing/versions.md#die-erste-version). Committe das Verschieben für sich.

5. **Prüfe.**

   ```bash
   npx clay build --strict
   ```

   Läuft der Build durch, ist der Umstieg geschafft.
:::

## Was sonst neu ist

::: cards
- [KI & Agenten](../features/ai-and-agents.md)
- [Komponenten](../writing/components/index.md)
- [Build-Prüfungen](../publishing/build-checks.md) {fa-solid fa-list-check}
  Auch Links auf Abschnitte werden geprüft, und eine Seite, die nicht gerendert werden kann, sagt, warum.
- [Snippets & Variablen](../writing/snippets-and-variables.md)
- [Suche](../features/search.md)
- [SEO](../features/seo.md) {fa-solid fa-chart-line}
  Jede Seite bekommt ein Bild für Link-Vorschauen, und Seiten unter einem Pfad die Adresse ihrer Sitemap.
:::

- `theme` in der `clay.yaml` setzt eigene Farben und Schriften, und `analytics` zählt Seitenaufrufe ohne Cookies, siehe [Designs](../features/themes-and-icons.md#eigene-farben-und-schriften) und [Analytics](../features/analytics.md).
- Einstellungen können in eigenen Dateien stehen, etwa `variables: config/variables.yaml`, siehe [clay.yaml](../configuration/clay-yaml.md#einstellungen-in-eigenen-dateien).
- `generate` in der `clay.yaml` führt vor jedem Build Werkzeuge aus, die Seiten schreiben, etwa eine API-Referenz aus dem Code, siehe [generierte Dokumentation](../writing/generated-docs.md).
- `head` in der `clay.yaml` fügt jeder Seite Skripte und Meta-Tags hinzu, siehe [clay.yaml](../configuration/clay-yaml.md#head).
- Videos und Einbettungen von YouTube, Vimeo, Figma und mehr, siehe [HTML](../writing/html.md#videos-und-einbettungen).
- Alte Adressen verschobener Seiten funktionieren weiter mit `redirects` im Front Matter, siehe [Weiterleitungen](../organizing/redirects.md).
- Codeblöcke zeigen den Namen ihrer Datei: ` ```yaml [clay.yaml] `, siehe [Codeblöcke](../writing/code-blocks.md#dateinamen).
- Auf schmaleren Bildschirmen klappt das Inhaltsverzeichnis einer Seite über ihr auf.
- Ein Link „Zum Inhalt springen“, ein deutlicherer Tastaturfokus und stärkere Kontraste machen die Seite mit der Tastatur besser bedienbar und leichter lesbar.
- Die Navigation wirkt ruhiger: Die Markierung in der Seitenleiste wandert mit, neue Brotkrumen gleiten herein und Seiten blenden ein. Ist in den Systemeinstellungen „Bewegung reduzieren“ an, bewegt sich nichts.
