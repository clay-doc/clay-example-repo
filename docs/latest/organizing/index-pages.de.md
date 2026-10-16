---
title: Indexseiten
icon: fa-solid fa-flag-checkered
description: Die Startseite und die Seite jedes Ordners sind Markdown-Dateien namens index.md, mit optionaler Liste der Seiten und großem Kopf.
---

# Indexseiten

Jeder Ordner hat eine Seite unter seiner URL, und die Website hat eine Startseite an ihrer Wurzel. Beide schreibst du in Markdown, in einer Datei namens `index.md`:

```tree
docs/
  index.md          # die Startseite, /
  index.de.md       # ihre deutsche Übersetzung, /de
  guides/
    index.md        # die Seite des Ordners guides, /guides
    index.de.md     # ihre deutsche Übersetzung, /de/guides
```

Eine Indexseite ist eine Seite wie jede andere, mit Überschrift, Text, Links, Code, Hinweisen und Komponenten. Ihr Front Matter benennt außerdem den Ordner, siehe [Ordner](folders.md).

## Eine Liste der Seiten und ein großer Kopf

Zwei Front-Matter-Felder gestalten Indexseiten:

| Feld | Wirkung |
|------|---------|
| `list: true` | Listet die Seiten und Unterordner des Ordners unter dem Text |
| `hero: true` | Zeigt `title`, `icon` und `description` als großen, zentrierten Kopf über dem Text |

Die Startseite dieser Website nutzt `hero`:

```markdown
---
title: Clay-Dokumentation
icon: fa-solid fa-book-open
description: Mach aus einem Ordner voller Markdown-Dateien eine schnelle, durchsuchbare Dokumentationsseite.
hero: true
---

Clay macht aus einem Ordner voller Markdown-Dateien eine Dokumentationsseite …
```

Mit `hero: true` lässt du die `# Überschrift` weg: Der Kopf zeigt den Titel schon.

> [!TIP]
> `list` zeigt jede Seite des Ordners, in der Reihenfolge der Seitenleiste, wie bei den [Anleitungen](../guides/index.md) dieser Website. Für einige ausgewählte Seiten, mit ihren Icons und Beschreibungen, nimm stattdessen [Karten](../writing/components/cards.md), wie die anderen Bereichsseiten.

## Ordner ohne Indexseite

Ein Ordner ohne `index.md`, oder einer, dessen `index.md` keinen Text hat, bekommt eine Seite aus seinem Titel, seinem Icon und der Liste seiner Seiten. Die Website funktioniert ohne jede `index.md`; leg sie dort an, wo ein Ordner eine Einführung verdient.

Ohne `docs/index.md` zeigt die Startseite den Titel der Website und eine Liste der obersten Seiten und Ordner.

## Links auf Ordner

Der Titel eines Ordners in der Seitenleiste öffnet seine Seite; der Pfeil daneben zeigt und versteckt die Seiten darin. Brotkrumen und Links auf einen Ordner führen ebenfalls zu seiner Seite, genauso Links auf die `index.md`:

```markdown
[Alle Anleitungen](guides/index.md)
[Alle Anleitungen](guides/)
```

Links in einer `index.md` sind relativ zu ihrem Ordner, wie auf GitHub: In `docs/guides/index.md` führt `[Einrichtung](setup.md)` zu `docs/guides/setup.md`.

> [!NOTE]
> Seiten von Ordnern erscheinen in Suchergebnissen, und die Links zur vorigen und nächsten Seite führen durch sie hindurch, vor den Seiten ihres Ordners.
