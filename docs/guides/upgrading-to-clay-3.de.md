---
title: Umstieg auf Clay 3
icon: fa-solid fa-circle-up
description: Bring eine Clay-2-Seite auf Clay 3 - index.md-Dateien statt dir-meta.yaml, die Startseite in docs/index.md und ältere Versionen in docs-archive/.
---

# Umstieg auf Clay 3

Clay 3 verlagert drei Dinge in die Dokumentation selbst: Ordnernamen, die Startseite und ältere Versionen. Alles andere, deine Seiten, Links, Übersetzungen und der Rest der `clay.yaml`, bleibt, wie es ist. Bis du sie verschoben hast, meldet `clay build` mit einer Warnung, was noch übrig ist, und `--strict` scheitert.

## 1. Clay aktualisieren

```bash
npm install --save-dev clay-doc@3
```

## 2. Ordnernamen: dir-meta.yaml → index.md

Jeder Eintrag der `dir-meta.yaml` wird zum Front Matter einer `index.md` in diesem Ordner. Aus `name` wird `title`:

`dir-meta.yaml` (Clay 2):

```yaml
- path: "guides"
  name: "Guides"
  icon: "fa-solid fa-book-open"
  order: 3
```

`docs/guides/index.md` (Clay 3):

```markdown
---
title: Guides
icon: fa-solid fa-book-open
order: 3
---
```

Namen pro Sprache (`name: {en: Guides, de: Anleitungen}`) kommen in Übersetzungen der `index.md`: eine `index.de.md` mit `title: Anleitungen`. Danach löschst du die `dir-meta.yaml`.

Eine `index.md` nur mit Front Matter benennt bloß ihren Ordner. Schreib Text darunter, und sie wird zur Seite des Ordners; siehe [Indexseiten](../organizing/index-pages.md).

## 3. Die Startseite: index in der clay.yaml → docs/index.md

Der Abschnitt `index` der `clay.yaml` wird zu `docs/index.md`. Für dasselbe Aussehen wie bisher, eine große Kopfzeile und Kacheln der Seiten der obersten Ebene, setzt du `hero` und `cards`:

`clay.yaml` (Clay 2):

```yaml
index:
  title: "Willkommen bei Mein Projekt"
  description: "Alles, was du wissen musst."
  icon: "fa-solid fa-rocket"
```

`docs/index.md` (Clay 3):

```markdown
---
title: Willkommen bei Mein Projekt
description: Alles, was du wissen musst.
icon: fa-solid fa-rocket
hero: true
cards: true
---
```

Werte pro Sprache kommen in `docs/index.de.md` und so weiter. Danach entfernst du `index` aus der `clay.yaml`.

## 4. Ältere Versionen: versions/ → docs-archive/

Ältere Versionen rücken eine Ebene nach oben: Aus `versions/1.x/docs/` wird `docs-archive/1.x/`. Ihre `dir-meta.yaml` wird wie in Schritt 2 zu `index.md`-Dateien.

```bash
mkdir docs-archive
git mv versions/1.x/docs docs-archive/1.x
```

## 5. Prüfen

```bash
npx clay build --strict
```

Läuft der Build durch, ist der Umstieg geschafft. Links auf `index.md`-Dateien und auf Ordner führen zu den Seiten der Ordner; bestehende Links funktionieren also weiter.

## Was sonst neu ist

- In der Seitenleiste öffnet der Titel eines Ordners seine Seite; der Pfeil blendet seine Seiten ein und aus.
- [clay edit](../organizing/clay-edit.md) legt Seiten und Ordner an, benennt sie um, verschiebt und löscht sie, bearbeitet das ganze Front Matter und arbeitet in jeder Version und Sprache.
- Abschnittsüberschriften zeigen einen `#`-Link zum Kopieren.
