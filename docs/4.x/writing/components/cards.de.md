---
title: Karten
icon: fa-solid fa-table-cells-large
description: Links als Raster aus Karten, mit Icon und Beschreibung der Seiten, zu denen sie führen, oder eigenen.
---

# Karten

Karten sind Links, als Raster angeordnet: gut für eine Startseite, den Anfang eines Bereichs oder „wie es weitergeht“. Schreib eine Liste von Links:

```markdown
::: cards
- [Schnellstart](../../getting-started/quick-start.md)
- [Veröffentlichen](../../publishing/index.md)
- [Suche](../../features/search.md)
:::
```

::: cards
- [Schnellstart](../../getting-started/quick-start.md)
- [Veröffentlichen](../../publishing/index.md)
- [Suche](../../features/search.md)
:::

Eine Karte, die zu einer Seite deiner Dokumentation führt, zeigt deren `icon` und `description` aus dem [Front Matter](../../configuration/front-matter.md). Du schreibst sie einmal, und jede Karte bleibt aktuell.

## Eigenes Icon und eigener Text

Gib einer Karte ein Icon in geschweiften Klammern nach dem Link und ihren Text in den Zeilen darunter:

```markdown
::: cards
- [Clay auf GitHub](https://github.com/clay-doc/clay) {fa-brands fa-github}
  Quellcode, Issues und Releases.
- [Codeblöcke](../code-blocks.md) {fa-solid fa-star}
  Unsere Lieblingsseite: Hervorhebung, Diffs und Fokus.
:::
```

::: cards
- [Clay auf GitHub](https://github.com/clay-doc/clay) {fa-brands fa-github}
  Quellcode, Issues und Releases.
- [Codeblöcke](../code-blocks.md) {fa-solid fa-star}
  Unsere Lieblingsseite: Hervorhebung, Diffs und Fokus.
:::

- **Der Text des Links ist der Titel der Karte.** Die Karte führt dorthin, wohin der Link führt.
- **Das Icon** ist ein [Font-Awesome](../../features/themes-and-icons.md)-Icon, geschrieben als seine Klassen.
- **Der Text** ist bis zum Link eingerückt, wie die zweite Zeile jedes Listenpunkts. **Fett**, *kursiv* und `Code` funktionieren; Links darin erscheinen als Text, denn die ganze Karte ist ein Link.
- Karten zu anderen Websites haben keine Seite, von der sie Icon und Text übernehmen: Gib ihnen eigene.

## Karten oder `list`

`list: true` in der `index.md` eines Ordners listet *alle* Seiten des Ordners, in der Reihenfolge der Seitenleiste. Karten zeigen die Seiten, die du wählst, in der Reihenfolge, in der du sie schreibst, aus der ganzen Dokumentation und darüber hinaus. Siehe [Indexseiten](../../organizing/index-pages.md).

## Anordnung

Karten füllen so viele Spalten, wie Platz haben, und stehen auf Smartphones untereinander. Links in Karten werden bei jedem Build [geprüft](../../publishing/build-checks.md) wie alle anderen Links.
