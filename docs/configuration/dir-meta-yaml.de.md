---
title: dir-meta.yaml
icon: fa-solid fa-folder-tree
description: Referenz der dir-meta.yaml, die Ordnern Namen, Icons und eine Reihenfolge gibt.
---

# dir-meta.yaml

Die `dir-meta.yaml` ist optional. Sie liegt neben der `clay.yaml` und beschreibt die Ordner in `docs/`: ihre Anzeigenamen, Icons und ihre Position in der Navigation. Die Datei ist eine Liste von Einträgen, einer pro Ordner, verschachtelt wie die Ordner.

```yaml
- path: "getting-started"
  name: "Erste Schritte"
  icon: "fa-solid fa-rocket"
  order: 2

- path: "guides"
  name:
    en: "Guides"
    de: "Anleitungen"
  icon: "fa-solid fa-book-open"
  order: 3
  children:
    - path: "advanced"
      name: "Für Fortgeschrittene"
      icon: "fa-solid fa-graduation-cap"
```

## Felder

| Feld | Typ | Standard | Zweck |
|------|-----|----------|-------|
| `path` | Text | Pflicht | Name des Ordners (eine Ebene, kein Pfad) |
| `name` | Text oder einer pro Sprache | Ordnername, aufbereitet | Anzeigename |
| `icon` | Text | `fa-solid fa-folder` | Font-Awesome-Klassen des Icons |
| `order` | Zahl | keiner | Position zwischen den Nachbarn des Ordners |
| `children` | Liste | keine | Einträge für Unterordner, mit denselben Feldern |

## Wie Einträge gefunden werden

Clay sucht jeden Ordner über seinen Namen in der Liste seiner Ebene: Ordner der obersten Ebene in der obersten Liste, Unterordner in den `children` ihres Elternordners.

Ein Ordner ohne Eintrag gibt die Suche weiter: Seine Unterordner werden in derselben Liste gesucht wie er selbst. So bleiben kurze Dateien kurz, wenn nur ein verschachtelter Ordner einen Namen braucht.

## Versionen

Jede [ältere Version](../versions-and-languages/versions.md) hat ihre eigene `dir-meta.yaml` in `versions/<name>/`. Ordner lassen sich also in der aktuellen Dokumentation umbenennen, ohne ältere zu ändern. `clay version` kopiert die Datei zusammen mit der Dokumentation.

## Prüfungen

Unbekannte Felder werden bei jedem Build gemeldet: `dir-meta.yaml: unknown key "[0].icons" is ignored (typo?)`. Die Zahl in eckigen Klammern ist die Position des Eintrags in seiner Liste, beginnend bei 0.

> [!TIP]
> `clay edit` schreibt diese Datei für dich, wenn du Ordner umbenennst oder verschiebst, und behält dabei Kommentare und Formatierung bei. Siehe [clay edit](../organizing/clay-edit.md).
