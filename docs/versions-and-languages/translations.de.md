---
title: Übersetzungen
icon: fa-solid fa-language
description: Übersetze deine Dokumentation Seite für Seite, mit Sprachumschalter, Ersatz für nicht übersetzte Seiten und einer Oberfläche in zwölf Sprachen.
---

# Übersetzungen

Clay-Seiten können in mehreren Sprachen erscheinen. Du übersetzt Seite für Seite, in deinem eigenen Tempo: Noch nicht übersetzte Seiten erscheinen in der Originalsprache, die Dokumentation ist also vom ersten Tag an in jeder Sprache vollständig.

Diese Seite ist ein Beispiel: Wechsle in der Navigationsleiste zu **English**.

## Sprachen einrichten

Liste die Sprachen in der `clay.yaml` auf. Die erste ist die Standardsprache:

```yaml
languages: ["en", "de"]
```

Nutze Sprachcodes wie `en`, `de`, `fr`, `pt-BR` oder `zh-TW`. Die Standardsprache liegt an der Wurzel der Seite, jede andere Sprache unter ihrem Code:

| Seite | Englisch (Standard) | Deutsch |
|-------|---------------------|---------|
| Startseite | `/` | `/de` |
| `docs/guides/setup.md` | `/guides/setup` | `/de/guides/setup` |
| In Version 1.x | `/1.x/guides/setup` | `/1.x/de/guides/setup` |

## Eine Seite übersetzen

Leg die Übersetzung neben die Seite und setze den Sprachcode vor das `.md`:

```text
docs/guides/
├── setup.md       # Englisch, das Original
└── setup.de.md    # deutsche Übersetzung
```

Die Übersetzung ist eine vollständige eigene Seite: mit eigenem Front Matter, eigenen Überschriften, eigenem Text.

```markdown
---
title: Einrichtung
description: So richtest du das Projekt in fünf Schritten ein.
---

# Das Projekt einrichten
```

`title`, `icon` und `description` gehören der Übersetzung. Ihre **Position** in der Navigation kommt vom Original, damit alle Sprachen dieselbe Struktur haben.

## Seiten ohne Übersetzung

Eine Seite ohne Übersetzung für eine Sprache erscheint trotzdem in der Navigation dieser Sprache, mit dem Originaltext und einem Hinweis:

> Diese Seite ist noch nicht übersetzt und wird auf Englisch angezeigt.

Für Suchmaschinen verweist eine solche Seite auf das Original und fehlt in der Sitemap. Fügst du die Übersetzung hinzu, tritt sie einfach an die Stelle der Seite.

## Einstellungen pro Sprache

Texteinstellungen in der `clay.yaml` können einen Wert pro Sprache haben. Fehlende Sprachen nutzen den Wert der Standardsprache:

```yaml
title:
  en: "My Project"
  de: "Mein Projekt"
index:
  title:
    en: "Welcome"
    de: "Willkommen"
  description:
    en: "Everything you need to know."
    de: "Alles, was du wissen musst."
```

Dasselbe funktioniert für Ordnernamen in der `dir-meta.yaml`:

```yaml
- path: "guides"
  name:
    en: "Guides"
    de: "Anleitungen"
```

## Die Oberfläche

Suche, Navigation, Seitenfuß und Hinweise gibt es in zwölf Sprachen:

| | | | |
|---|---|---|---|
| Englisch `en` | Deutsch `de` | Französisch `fr` | Spanisch `es` |
| Italienisch `it` | Portugiesisch `pt` | Niederländisch `nl` | Polnisch `pl` |
| Russisch `ru` | Japanisch `ja` | Chinesisch `zh` | Koreanisch `ko` |

Regionale Codes nutzen ihre Grundsprache: `pt-BR` bekommt Portugiesisch. Andere Sprachen bekommen Englisch, es sei denn, du lieferst die Texte.

### Eigene Texte

`messages` in der `clay.yaml` ersetzt einzelne Texte oder liefert eine Sprache, die Clay nicht mitbringt:

```yaml
languages: ["en", "sv"]
messages:
  sv:
    search: "Sök"
    searchDocs: "Sök i dokumentationen"
    onThisPage: "På den här sidan"
    previous: "Föregående"
    next: "Nästa"
```

Die vollständige Liste der Texte mit ihren englischen Standardwerten steht in Clays [`common/i18n.ts`](https://github.com/clay-doc/clay/blob/main/common/i18n.ts).

## Der Sprachumschalter

Mit mehr als einer Sprache zeigt die Navigationsleiste einen Sprachumschalter. Er behält die Seite, die du liest, und die [Version](versions.md). Auf Smartphones sitzt er in der ausklappbaren Navigation.

## Links in Übersetzungen

Schreib Links in Übersetzungen genau wie im Original: relativ zur Seite. `[Einrichtung](setup.md)` in `docs/guides/intro.de.md` führt zu `/de/guides/setup`, der deutschen Seite. Bilder und Dateien teilen sich alle Sprachen; eine Übersetzung bindet sie mit denselben Pfaden ein wie das Original.

Nur Anker zu Abschnitten unterscheiden sich, weil sie aus dem Text der Überschriften entstehen: Verlinke in einer Übersetzung die Anker der übersetzten Überschriften.

## Prüfungen

Der Build warnt vor Übersetzungen ohne Original (`setup.de.md` ohne `setup.md`) und vor Sprachcodes, die er nicht verwenden kann. Während des Builds meldet Clay, wie weit jede Sprache ist:

```text
●  Loaded 29 pages from docs  languages de (27/29 translated)
```
