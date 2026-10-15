---
title: Versionen
icon: fa-solid fa-code-branch
description: Die Dokumentation älterer Releases online halten, mit Versionswahl und einem Hinweis, der zur neuesten Dokumentation führt.
---

# Versionen

Wenn ein Release ändert, wie dein Projekt funktioniert, brauchen Leser älterer Releases weiterhin die alte Dokumentation. Clay hält ältere Versionen neben der aktuellen online, jede mit eigener Navigation, Suche und URLs.

## So funktionieren Versionen

- `docs/` ist immer die **neueste** Version. Sie liegt an der Wurzel der Website: `/guides/setup`.
- Jeder Ordner in `docs-archive/` ist eine **ältere** Version, eine Kopie von `docs/`, gespeichert, als diese Version aktuell war. `docs-archive/1.x/` liegt unter `/1.x`: `/1.x/guides/setup`.

```tree
mein-projekt/
  clay.yaml
  docs/              # neueste, unter /
  docs-archive/
    2.x/             # unter /2.x
      index.md
      guides/
    1.x/             # unter /1.x
```

Die meisten Projekte brauchen nie Versionen: Ohne `docs-archive/` zeigt Clay gar keine Versionswahl.

## Eine neue Version veröffentlichen

::: steps
1. **Speichere die aktuelle Dokumentation**, kurz bevor das Release sie ändert:

   ```bash
   npx clay version 2.x
   ```

   Das kopiert `docs/` nach `docs-archive/2.x/`. In `clay edit` tut <kbd>V</kbd> dasselbe und wechselt den Editor in die neue Version.

2. **Benenne die neueste Dokumentation** in der `clay.yaml`. Ohne `version` heißt sie in der Versionswahl „Latest“.

   ```yaml
   version: "3.x"
   ```

3. **Aktualisiere `docs/`** für das neue Release, committe und veröffentliche. Die alte Dokumentation ist ab dem ersten Build unter `/2.x` online.
:::

Versionsnamen werden Teil von URLs; sie dürfen Buchstaben, Ziffern, `.`, `-` und `_` enthalten. `docs`, `_clay` und `_nuxt` sind reserviert.

## Die Versionswahl

Sobald es einen Ordner in `docs-archive/` gibt, zeigt die Navigationsleiste eine Versionswahl, die neueste zuerst. Ein Wechsel behält die Seite, die du liest, wenn die andere Version sie hat, und öffnet sonst die Startseite dieser Version. Auch die [Sprache](translations.md) bleibt.

Seiten älterer Versionen zeigen einen Hinweis, zu welcher Version sie gehören, mit einem Link zur selben Seite in der neuesten Version.

## Was jede Version für sich hat

| | Je Version |
|---|---|
| Seiten, Bilder und Dateien | `docs-archive/<name>/` |
| Startseite, Titel, Icons und Reihenfolge der Ordner | Die `index.md`-Dateien der Version |
| Suchindex | Ergebnisse bleiben in der Version |
| Bearbeiten-Links | Führen nach `docs-archive/<name>/` |
| Übersetzungen | `*.de.md`-Dateien im Ordner der Version |

Die `clay.yaml` teilen sich alle: Alle Versionen haben denselben Titel und dieselbe Navigationsleiste.

## Ältere Versionen bearbeiten

Ältere Versionen sind schlichte Dateien: Korrigiere einen Tippfehler in `docs-archive/1.x/` wie überall sonst, oder wechsle in `clay edit` mit <kbd>v</kbd> in die Version. Links in einer älteren Version bleiben in dieser Version, solange sie relativ sind: `[Einrichtung](setup.md)` verweist auf `/1.x/setup`. Links, die mit `/` beginnen, führen in die neueste Version.

> [!NOTE]
> Jede gespeicherte Version fügt dem Build ihre Seiten hinzu. Behalte die Versionen, die deine Nutzer wirklich einsetzen, und lösch die Ordner von Versionen, die niemand mehr nutzt.
