---
title: Navigation
icon: fa-solid fa-compass
description: Wie Clay Seitenleiste, Brotkrumen und Vor-/Zurück-Links baut, und wie du Seiten in eine Reihenfolge bringst.
---

# Navigation

Clay baut die Navigation aus deinem `docs/`-Ordner; ein eigenes Menü musst du nicht pflegen. Füge eine Seite hinzu, und sie erscheint; verschiebe sie in einen Ordner, und sie wandert in der Seitenleiste mit.

## Die Seitenleiste

Die Seitenleiste listet jede Seite und jeden Ordner, der Seiten enthält, verschachtelt wie deine Ordner. Ordner lassen sich auf- und zuklappen; die Seite, die du liest, ist markiert. Auf kleinen Bildschirmen wandert die Seitenleiste in eine ausklappbare Navigation hinter dem Menü-Button oben links.

## Reihenfolge

In jedem Ordner werden Seiten und Ordner gemeinsam sortiert:

1. Einträge mit `order` kommen zuerst, von der kleinsten Zahl aufwärts.
2. Alle anderen folgen alphabetisch nach ihrem Datei- oder Ordnernamen.

Seiten bekommen ihr `order` im [Front Matter](../writing/pages.md#front-matter), Ordner in der [dir-meta.yaml](../configuration/dir-meta-yaml.md):

```markdown
---
title: Installation
order: 1
---
```

```yaml
- path: "guides"
  order: 3
```

Dieser Ordner zum Beispiel:

```text
docs/
├── changelog.md          (ohne order)
├── faq.md                (ohne order)
├── guides/               (order: 2 in der dir-meta.yaml)
├── installation.md       (order: 1)
└── introduction.md       (order: 0)
```

erscheint so: Introduction, Installation, Guides, Changelog, FAQ.

> [!TIP]
> Nummeriere in Zehnerschritten (10, 20, 30), damit Platz für später hinzugefügte Seiten bleibt, oder lass [clay edit](clay-edit.md) die Nummern vergeben: Es setzt `order` für alles in einem Ordner, sobald du einen Eintrag verschiebst.

Zahlen dürfen negativ sein, und Einträge mit derselben Zahl behalten ihre alphabetische Reihenfolge.

## Brotkrumen

Die Navigationsleiste zeigt, wo die aktuelle Seite liegt: **Anleitungen › Fortgeschritten › Tuning**. Jeder Teil verlinkt auf die Seite seines Ordners. Tief verschachtelte Seiten zeigen die letzten drei Ebenen. Auf kleinen Bildschirmen sind die Brotkrumen ausgeblendet; dort übernimmt die ausklappbare Navigation.

## Ordnerseiten

Jeder Ordner hat eine eigene Seite unter seinem Pfad: `/guides` für `docs/guides/`. Sie zeigt Titel und Icon des Ordners und eine Kachel für jede Seite und jeden Unterordner darin. Brotkrumen und Links auf einen Ordner führen dorthin.

## Vor und zurück

Unten auf jeder Seite führen Links zur vorherigen und nächsten Seite. Sie folgen der Reihenfolge der Seitenleiste über Ordnergrenzen hinweg, sodass man die Dokumentation wie ein Buch von vorne bis hinten lesen kann.
