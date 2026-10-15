---
title: Ordner
icon: fa-solid fa-folder-open
description: Seiten in Ordnern gruppieren, und Ordnern mit index.md einen Namen, ein Icon, eine Reihenfolge und eine eigene Seite geben.
---

# Ordner

Ordner in `docs/` werden zu Abschnitten der Navigation, so tief verschachtelt wie deine Ordner. Ein Ordner erscheint nur, wenn er mindestens eine Seite enthält.

## Name, Icon und Reihenfolge

Ein Ordner beschreibt sich selbst in einer `index.md` darin, mit demselben Front Matter wie eine Seite:

```text
docs/guides/
├── index.md       # Name, Icon und Reihenfolge des Ordners
├── setup.md
└── deploying.md
```

```markdown
---
title: Anleitungen
icon: fa-solid fa-book-open
order: 3
---
```

| Feld | Standard | Zweck |
|------|----------|-------|
| `title` | die erste Überschrift der `index.md`, dann der Ordnername | Name in Seitenleiste, Brotkrumen und Suche |
| `icon` | `fa-solid fa-folder` | [Font-Awesome](../features/themes-and-icons.md)-Icon |
| `order` | keiner | Position zwischen den Seiten und Ordnern daneben |

Ohne `index.md` heißt ein Ordner wie sein Ordnername: `getting-started` wird zu „Getting started".

## Eine Seite für den Ordner

Hat die `index.md` unter ihrem Front Matter Text, ist dieser Text die Seite des Ordners. Sie erscheint, wenn Leser den Ordner unter seiner URL öffnen (`/guides`). Eine `index.md` nur mit Front Matter benennt den Ordner bloß; seine Seite zeigt dann Kacheln der Seiten darin. Siehe [Indexseiten](index-pages.md).

## Ordner in anderen Sprachen

Übersetze einen Ordner wie eine Seite: Eine `index.de.md` neben der `index.md` gibt dem Ordner seinen deutschen Namen und seine deutsche Seite.

```markdown
---
title: Anleitungen
---

# Anleitungen

Schritt-für-Schritt-Anleitungen für …
```

Die Reihenfolge kommt immer aus der originalen `index.md`.

> [!TIP]
> `clay edit` legt Ordner mit ihrer `index.md` an und schreibt Titel, Icon und Reihenfolge bestehender Ordner. Siehe [clay edit](clay-edit.md).
