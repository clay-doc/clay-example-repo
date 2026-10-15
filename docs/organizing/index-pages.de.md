---
title: Indexseiten
icon: fa-solid fa-flag-checkered
description: Die Startseite und die Seite jedes Ordners sind Markdown-Dateien namens index.md, mit optionalen Kacheln und einer großen Kopfzeile.
---

# Indexseiten

Jeder Ordner hat unter seiner URL eine Seite, und die Seite hat an ihrer Wurzel eine Startseite. Beide schreibst du in Markdown, in einer Datei namens `index.md`:

| Datei | Seite |
|-------|-------|
| `docs/index.md` | Die Startseite, `/` |
| `docs/guides/index.md` | Die Seite des Ordners `guides`, `/guides` |
| `docs/guides/index.de.md` | Ihre deutsche Übersetzung, `/de/guides` |

Eine Indexseite ist eine Seite wie jede andere, mit Überschrift, Text, Links, Code und Hinweisen. Ihr Front Matter benennt außerdem den Ordner, siehe [Ordner](folders.md).

## Kacheln und eine große Kopfzeile

Zwei Felder im Front Matter gestalten Indexseiten:

| Feld | Wirkung |
|------|---------|
| `cards: true` | Zeigt unter dem Text eine Kachel für jede Seite und jeden Unterordner |
| `hero: true` | Zeigt `title`, `icon` und `description` als große, zentrierte Kopfzeile über dem Text |

Die Startseite dieser Seite nutzt beides:

```markdown
---
title: Clay-Dokumentation
icon: fa-solid fa-book-open
description: Mach aus einem Ordner voller Markdown-Dateien eine schnelle, durchsuchbare Dokumentationsseite.
hero: true
cards: true
---

Neu bei Clay? Lies die [Einführung](introduction.md) …
```

Mit `hero: true` lässt du die `# Überschrift` weg: Die Kopfzeile zeigt den Titel bereits.

## Ordner ohne Indexseite

Ein Ordner ohne `index.md`, oder einer, dessen `index.md` keinen Text hat, bekommt eine Seite aus seinem Titel, seinem Icon und den Kacheln seiner Seiten. Die Seite funktioniert ganz ohne `index.md`; ergänze sie dort, wo ein Ordner eine Einleitung verdient.

Ohne `docs/index.md` zeigt die Startseite den Titel der Seite und Kacheln der Seiten und Ordner der obersten Ebene.

## In der Seitenleiste

Der Titel eines Ordners in der Seitenleiste öffnet seine Seite; der Pfeil daneben blendet die Seiten darin ein und aus. Brotkrumen und Links auf einen Ordner führen ebenfalls zu seiner Seite, genauso Links auf `index.md`:

```markdown
[Alle Anleitungen](guides/index.md)
[Alle Anleitungen](guides/)
```

Links in einer `index.md` sind relativ zu ihrem Ordner, wie auf GitHub: In `docs/guides/index.md` führt `[Einrichtung](setup.md)` zu `docs/guides/setup.md`.

> [!TIP]
> Ordnerseiten erscheinen in Suchergebnissen, und die Vor-/Zurück-Links führen durch sie hindurch, vor den Seiten ihres Ordners.
