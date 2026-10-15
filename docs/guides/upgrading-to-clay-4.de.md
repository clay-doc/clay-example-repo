---
title: Umstieg auf Clay 4
icon: fa-solid fa-circle-up
description: Eine Clay-3-Seite auf Clay 4 bringen - das Front-Matter-Feld cards heißt jetzt list.
---

# Umstieg auf Clay 4 :badge[Aktuell]{tip}

Clay 4 ändert einen Namen: Das Front-Matter-Feld `cards` heißt jetzt `list`. Alles andere, deine Seiten, Ordner, Links, Übersetzungen und die `clay.yaml`, bleibt, wie es ist. Bis du es umbenannt hast, meldet `clay build` jede Datei, die noch `cards` nutzt, mit einer Warnung, und `--strict` scheitert.

## Auf einen Blick

| Clay 3 | Clay 4 |
|--------|--------|
| `cards: true` in einer `index.md` | `list: true` |

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
   ```markdown
   ---
   title: Anleitungen
   cards: true
   ---
   ```
   == Clay 4
   ```markdown
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

3. **Prüfe.**

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
- [Suche](../features/search.md)
- [SEO](../features/seo.md) {fa-solid fa-chart-line}
  Seiten unter einem Pfad bekommen die Adresse ihrer Sitemap zum Einreichen.
:::

- Auf schmaleren Bildschirmen klappt das Inhaltsverzeichnis einer Seite über ihr auf.
- Ein Link „Zum Inhalt springen“, ein deutlicherer Tastaturfokus und stärkere Kontraste machen die Seite mit der Tastatur besser bedienbar und leichter lesbar.
- Die Navigation wirkt ruhiger: Die Markierung in der Seitenleiste wandert mit, neue Brotkrumen gleiten herein und Seiten blenden ein. Ist in den Systemeinstellungen „Bewegung reduzieren“ an, bewegt sich nichts.
