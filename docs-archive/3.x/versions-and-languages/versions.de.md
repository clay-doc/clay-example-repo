---
title: Versionen
icon: fa-solid fa-code-branch
description: Die Dokumentation älterer Releases online halten, mit einem Versionsumschalter und einem Banner, das zur neuesten Dokumentation führt.
---

# Versionen

Wenn ein Release ändert, wie dein Projekt funktioniert, brauchen Nutzer älterer Releases weiterhin die alte Dokumentation. Clay hält ältere Versionen der Dokumentation neben der aktuellen online, jede mit eigener Navigation, Suche und eigenen URLs.

## So funktionieren Versionen

- `docs/` ist immer die **neueste** Version. Sie liegt an der Wurzel der Seite: `/guides/setup`.
- Jeder Ordner in `docs-archive/` ist eine **ältere** Version, eine Kopie von `docs/`, gespeichert, als diese Version aktuell war. `docs-archive/1.x/` liegt unter `/1.x`: `/1.x/guides/setup`.

```text
mein-projekt/
├── clay.yaml
├── docs/                 # neueste, unter /
└── docs-archive/
    ├── 2.x/              # unter /2.x
    │   ├── index.md
    │   └── guides/
    └── 1.x/              # unter /1.x
```

Die meisten Projekte brauchen nie Versionen: Ohne `docs-archive/` zeigt Clay gar keinen Versionsumschalter.

## Eine Version speichern

Speichere den aktuellen Stand direkt bevor ein Release die Dokumentation ändert:

```bash
npx clay version 2.x
```

Das kopiert `docs/` nach `docs-archive/2.x/`. In `clay edit` tut <kbd>V</kbd> dasselbe und wechselt den Editor zur neuen Version. Danach passt du `docs/` an das neue Release an und gibst ihm in der `clay.yaml` eine Bezeichnung:

```yaml
version: "3.x"
```

Ohne `version` nennt der Umschalter die neueste Dokumentation „Latest".

> [!TIP]
> Ein typischer Ablauf: `npx clay version 2.x`, committen, `version: "3.x"` setzen, die Dokumentation anpassen, veröffentlichen. Die alte Dokumentation ist ab dem ersten Build unter `/2.x` online.

Versionsnamen werden Teil von URLs. Sie dürfen deshalb Buchstaben, Ziffern, `.`, `-` und `_` enthalten. `docs`, `api`, `_clay` und `_nuxt` sind reserviert.

## Der Versionsumschalter

Sobald es einen Ordner in `docs-archive/` gibt, zeigt die Navigationsleiste einen Versionsumschalter, neueste zuerst. Beim Wechseln bleibt die Seite, die du liest, wenn die andere Version sie hat; sonst öffnet sich die Startseite dieser Version. Auch die [Sprache](translations.md) bleibt erhalten.

Seiten älterer Versionen zeigen ein Banner, das sagt, zu welcher Version sie gehören, und auf dieselbe Seite in der neuesten Version verlinkt.

## Was jede Version für sich hat

| | Pro Version |
|---|---|
| Seiten, Bilder und Dateien | `docs-archive/<name>/` |
| Startseite, Namen, Icons und Reihenfolge der Ordner | Die `index.md`-Dateien der Version |
| Suchindex | Ergebnisse bleiben in der Version |
| Bearbeiten-Links | Führen nach `docs-archive/<name>/` |
| Übersetzungen | `*.de.md`-Dateien im Ordner der Version |

Die `clay.yaml` teilen sich alle Versionen: Sie haben denselben Titel und dieselbe Navigationsleiste.

## Ältere Versionen bearbeiten

Ältere Versionen sind ganz normale Dateien: Einen Tippfehler in `docs-archive/1.x/` behebst du wie überall sonst, oder du wechselst `clay edit` mit <kbd>v</kbd> zur Version. Links in einer älteren Version bleiben in dieser Version, solange sie relativ sind: `[Einrichtung](setup.md)` verlinkt auf `/1.x/setup`. Links, die mit `/` beginnen, führen zur neuesten Version.

> [!NOTE]
> Jede gespeicherte Version fügt dem Build ihre Seiten hinzu. Behalte die Versionen, die deine Nutzer tatsächlich einsetzen, und lösche die Ordner von Versionen, die niemand mehr nutzt.
