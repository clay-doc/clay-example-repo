---
title: Umstieg auf Clay 4
icon: fa-solid fa-circle-up
description: Eine Clay-3-Seite auf Clay 4 umstellen - das Front-Matter-Feld cards heißt jetzt list.
---

# Umstieg auf Clay 4

Clay 4 ändert einen Namen: Das Front-Matter-Feld `cards` heißt jetzt `list`. Alles andere, deine Seiten, Ordner, Links, Übersetzungen und die `clay.yaml`, bleibt, wie es ist. Bis du es umbenannt hast, meldet `clay build` jede Datei, die noch `cards` nutzt, mit einer Warnung, und `--strict` schlägt fehl.

## 1. Clay aktualisieren

```bash
npm install --save-dev clay-doc@4
```

## 2. cards → list

Schreib in jeder `index.md` mit `cards: true` stattdessen `list: true`:

```markdown
---
title: Anleitungen
list: true
---
```

Durchsuche deine Dokumentation danach, oder lass dir die Dateien vom Build auflisten:

```bash
grep -rl "^cards:" docs docs-archive
```

## 3. Prüfen

```bash
npx clay build --strict
```

Läuft der Build durch, ist der Umstieg geschafft.

## Was sonst neu ist

- Links auf Abschnitte, etwa `pages.md#front-matter`, werden bei jedem Build geprüft, siehe [Build-Prüfungen](../cli/build-checks.md).
- Auf schmaleren Bildschirmen klappt das Inhaltsverzeichnis über der Seite auf.
- Ein Link „Zum Inhalt springen", ein deutlicherer Tastaturfokus und stärkere Kontraste machen die Seite mit der Tastatur besser bedienbar und leichter lesbar.
- Scheitert eine Seite beim Rendern, zeigt `clay build`, warum, und welche Seiten betroffen sind.
