---
title: Navigation
icon: fa-solid fa-compass
description: Wie Clay Seitenleiste, Brotkrumen und Links zur vorigen und nächsten Seite baut, und wie du Seiten ordnest.
---

# Navigation

Clay baut die Navigation aus deinem Ordner `docs/`; es gibt kein eigenes Menü zu pflegen. Leg eine Seite an, und sie erscheint; verschieb sie in einen Ordner, und sie wandert in der Seitenleiste mit.

## Die Seitenleiste

Die Seitenleiste listet jede Seite und jeden Ordner mit Seiten, verschachtelt wie deine Ordner. Der Titel eines Ordners öffnet seine Seite; der Pfeil daneben zeigt und versteckt die Seiten darin. Die Seite, die du liest, ist markiert, und die Ordner darum herum öffnen sich von selbst. Auf kleinen Bildschirmen liegt die Seitenleiste in einer Schublade hinter dem Menüknopf oben links.

## Reihenfolge

In jedem Ordner werden Seiten und Ordner gemeinsam sortiert:

::: steps
1. Einträge mit `order` kommen zuerst, von der kleinsten Zahl an.
2. Alle anderen folgen alphabetisch nach ihrem Datei- oder Ordnernamen.
:::

Seiten bekommen ihr `order` in ihrem [Front Matter](../writing/pages.md#front-matter), Ordner im Front Matter ihrer [index.md](folders.md):

::: tabs
== Eine Seite
`docs/installation.md`:

```markdown
---
title: Installation
order: 1
---
```
== Ein Ordner
`docs/guides/index.md`:

```markdown
---
title: Anleitungen
order: 2
---
```
:::

Zum Beispiel dieser Ordner:

```tree
docs/
  changelog.md       # kein order
  faq.md             # kein order
  guides/            # order: 2 in guides/index.md
  installation.md    # order: 1
  introduction.md    # order: 0
```

erscheint als: Introduction, Installation, Guides, Changelog, FAQ.

> [!TIP]
> Nummeriere in Zehnerschritten (10, 20, 30), um Platz für spätere Seiten zu lassen, oder lass [clay edit](clay-edit.md) nummerieren: Es setzt `order` für alles in einem Ordner, wenn du einen Eintrag verschiebst.

Zahlen dürfen negativ sein, und Einträge mit derselben Zahl behalten ihre alphabetische Reihenfolge.

## Brotkrumen

Die Navigationsleiste zeigt, wo die aktuelle Seite liegt: **Anleitungen › Fortgeschritten › Feinschliff**. Jeder Teil verlinkt die Seite seines Ordners. Tief verschachtelte Seiten zeigen die letzten drei Ebenen. Auf kleinen Bildschirmen sind die Brotkrumen ausgeblendet; dort übernimmt die Schublade.

## Seiten von Ordnern

Jeder Ordner hat eine eigene Seite unter seinem Pfad: `/guides` für `docs/guides/`. Das ist die `index.md` des Ordners oder, ohne sie, der Titel des Ordners mit einer Liste seiner Seiten und Unterordner. Brotkrumen und Links auf einen Ordner führen dorthin. Siehe [Indexseiten](index-pages.md).

## Vorige und nächste Seite

Unten auf jeder Seite führen Links zur vorigen und zur nächsten Seite. Sie folgen der Reihenfolge der Seitenleiste über Ordner hinweg, samt den Seiten der Ordner, so lässt sich die Dokumentation von vorne bis hinten lesen wie ein Buch.
