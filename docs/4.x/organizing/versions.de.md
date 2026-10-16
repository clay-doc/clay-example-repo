---
title: Versionen
icon: fa-solid fa-code-branch
description: Die Dokumentation älterer Releases online halten, mit Versionswahl und einem Hinweis, der zur neuesten Dokumentation führt.
---

# Versionen

Wenn ein Release ändert, wie dein Projekt funktioniert, brauchen Leser älterer Releases weiterhin die alte Dokumentation. Clay hält ältere Versionen neben der neuesten online, jede mit eigener Navigation, Suche und URLs.

## So funktionieren Versionen

Die meisten Projekte brauchen nie Versionen. Ihre Seiten liegen direkt in `docs/`, und Clay zeigt keine Versionswahl.

Mit Versionen hat jede Version einen eigenen Ordner in `docs/`:

```tree
mein-projekt/
  clay.yaml          # version: "3.x" benennt die neueste
  docs/
    latest/          # die neueste Dokumentation, unter /
      index.md
      guides/
    2.x/             # unter /2.x
    1.x/             # unter /1.x
```

- `docs/latest/` ist immer die **neueste** Version. Sie liegt an der Wurzel der Website: `/guides/setup`.
- Jeder andere Ordner in `docs/` ist eine **ältere** Version, eine Kopie von `docs/latest/`, gespeichert, als diese Version aktuell war. `docs/1.x/` liegt unter `/1.x`: `/1.x/guides/setup`.
- **Alle Versionen liegen gleich tief**, deshalb funktioniert ein Pfad, der aus der Dokumentation hinausführt, etwa ein [Include](../writing/snippets-and-variables.md) von `../../../clay.yaml`, in jeder Kopie gleich.

Diese Website arbeitet so: Ihre Seiten liegen in `docs/latest/`, die Dokumentation von Clay 4 in `docs/4.x/` und die von Clay 3 in `docs/3.x/`, online unter [/4.x](https://clay-doc.github.io/clay-example-repo/4.x/) und [/3.x](https://clay-doc.github.io/clay-example-repo/3.x/).

## Eine Version speichern

::: steps
1. **Speichere die neueste Dokumentation**, kurz bevor das Release sie ändert:

   ```bash
   npx clay version 2.x
   ```

   Das kopiert `docs/latest/` nach `docs/2.x/`. In `clay edit` tut <kbd>V</kbd> dasselbe und wechselt den Editor in die neue Version.

   Eine gespeicherte Version behält den heutigen Text: In der Kopie setzt Clay die [Variablen](../writing/snippets-and-variables.md) ein und schreibt Includes von Dateien außerhalb von `docs/latest/` aus, etwa aus `config/` oder `docs/_snippets/`. Wechselt die neueste Dokumentation zu einer neuen Versionsnummer, behalten die alten ihre.

2. **Benenne die neueste Dokumentation** in der `clay.yaml`. Ohne `version` heißt sie in der Versionswahl „Latest“.

   ```yaml [clay.yaml]
   version: "3.x"
   ```

3. **Aktualisiere `docs/latest/`** für das neue Release, committe und veröffentliche. Die alte Dokumentation ist ab dem ersten Build unter `/2.x` online.
:::

Versionsnamen werden Teil von URLs; sie dürfen Buchstaben, Ziffern, `.`, `-` und `_` enthalten. `latest`, `docs`, `_clay` und `_nuxt` sind reserviert.

## Die erste Version

Solange die Seiten direkt in `docs/` liegen, verschiebt das erste `clay version` sie nach `docs/latest/`, bevor es die Kopie speichert. Es zeigt, was es vorhat, und fragt vorher:

```text
Clay keeps each version of the docs in a folder of its own inside docs/:

  docs/latest/  at /     the latest docs: docs/ moves here (110 files)
  docs/1.x/     at /1.x  a copy of docs/latest/

Every version sits at the same depth, so paths that lead out of docs/ work in each copy.

docs/latest/ is one level deeper than docs/, so Clay changes these paths:
  docs/latest/writing/snippets.md: ../../clay.yaml#variables → ../../../clay.yaml#variables

These name paths in docs/, which Clay does not change; point them into docs/latest/ if they mean the latest docs:
  .gitignore: docs/api/

Git keeps the history of the moved files. Commit the move on its own, so it is easy to review.

Go ahead? (y/N)
```

- **Pfade, die aus `docs/` hinausführen**, bekommen ein `../` mehr: Includes, Links, Bilder und Dateien in HTML. Pfade innerhalb der Dokumentation ziehen mit um und bleiben, wie sie sind.
- **`favicon` und `navbar.logo`** in der `clay.yaml` ziehen mit, wenn sie nach `docs/` zeigen.
- **Befehle und Listen**, die Pfade in `docs/` nennen, etwa `generate` in der `clay.yaml`, die `.gitignore` oder die Skripte in der `package.json`, listet Clay zum Prüfen auf: Nur du weißt, ob sie die neueste Dokumentation meinen.
- **Daten bleiben**: Clay liest „zuletzt aktualisiert“ aus git, und git sieht das Verschieben als Umbenennung.

In Skripten und CI, wo niemand antworten kann, häng `--yes` an. Ohne ändert sich nichts.

> [!TIP]
> Ordner in `docs/`, die mit `_` beginnen, sind keine Versionen. Snippets, die sich alle Versionen teilen, können in `docs/_snippets/` liegen.

## Die Versionswahl

Sobald es eine ältere Version gibt, zeigt die Navigationsleiste eine Versionswahl, die neueste zuerst. Ein Wechsel behält die Seite, die du liest, wenn die andere Version sie hat, und öffnet sonst die Startseite dieser Version. Auch die [Sprache](translations.md) bleibt.

Seiten älterer Versionen zeigen einen Hinweis, zu welcher Version sie gehören, mit einem Link zur selben Seite in der neuesten Version.

## Was jede Version für sich hat

| | Je Version |
|---|---|
| Seiten, Bilder und Dateien | `docs/<name>/` |
| Startseite, Titel, Icons und Reihenfolge der Ordner | Die `index.md`-Dateien der Version |
| Suchindex | Ergebnisse bleiben in der Version |
| Bearbeiten-Links | Führen nach `docs/<name>/`, wenn `editURL` auf `docs/` endet |
| Übersetzungen | `*.de.md`-Dateien im Ordner der Version |
| [Weiterleitungen](redirects.md) | Bleiben in der Version |

Die `clay.yaml` teilen sich alle: Alle Versionen haben denselben Titel und dieselbe Navigationsleiste.

## Ältere Versionen bearbeiten

Ältere Versionen sind schlichte Dateien: Korrigiere einen Tippfehler in `docs/1.x/` wie überall sonst, oder wechsle in `clay edit` mit <kbd>v</kbd> in die Version. Links in einer älteren Version bleiben in dieser Version, solange sie relativ sind: `[Einrichtung](setup.md)` verweist auf `/1.x/setup`. Links, die mit `/` beginnen, führen in die neueste Version.

> [!NOTE]
> Jede gespeicherte Version fügt dem Build ihre Seiten hinzu. Behalte die Versionen, die deine Nutzer wirklich einsetzen, und lösch die Ordner von Versionen, die niemand mehr nutzt.
