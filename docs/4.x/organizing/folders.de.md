---
title: Ordner
icon: fa-solid fa-folder-open
description: Seiten in Ordnern gruppieren und Ordnern mit index.md Titel, Icon, Reihenfolge und eine eigene Seite geben.
---

# Ordner

Ordner in `docs/` werden zu Bereichen der Navigation, so tief verschachtelt wie deine Ordner. Ein Ordner erscheint nur, wenn er mindestens eine Seite enthält.

## Titel, Icon und Reihenfolge

Ein Ordner beschreibt sich in einer `index.md` darin, mit demselben Front Matter wie eine Seite:

```tree
docs/guides/
  index.md       # Titel, Icon und Reihenfolge des Ordners
  setup.md
  deploying.md
```

```markdown [docs/guides/index.md]
---
title: Anleitungen
icon: fa-solid fa-book-open
order: 3
---
```

| Feld | Standard | Zweck |
|------|----------|-------|
| `title` | die erste Überschrift der `index.md`, dann der Ordnername | Titel in Seitenleiste, Brotkrumen und Suche |
| `icon` | `fa-solid fa-folder` | [Font-Awesome](../features/themes-and-icons.md)-Icon |
| `order` | keine | Position unter den Seiten und Ordnern daneben |

Ohne `index.md` heißt ein Ordner wie sein Ordnername: Aus `getting-started` wird „Getting started“.

## Eine Seite für den Ordner

Hat die `index.md` Text unter ihrem Front Matter, ist dieser Text die Seite des Ordners, die Leser unter seiner URL (`/guides`) sehen. Eine `index.md` nur mit Front Matter benennt den Ordner bloß; seine Seite listet dann die Seiten darin. Siehe [Indexseiten](index-pages.md).

## Ordner in anderen Sprachen

Übersetze einen Ordner wie eine Seite: Eine `index.de.md` neben der `index.md` gibt dem Ordner seinen deutschen Titel und seine deutsche Seite.

::: tabs
== index.md
```markdown
---
title: Guides
order: 3
---

# Guides

Step-by-step guides for …
```
== index.de.md
```markdown
---
title: Anleitungen
---

# Anleitungen

Schritt-für-Schritt-Anleitungen für …
```
:::

Die Reihenfolge kommt immer aus der ursprünglichen `index.md`.

> [!TIP]
> `clay edit` legt Ordner mit ihrer `index.md` an und schreibt Titel, Icon und Reihenfolge bestehender Ordner. Siehe [clay edit](clay-edit.md).
