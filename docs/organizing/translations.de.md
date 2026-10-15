---
title: Übersetzungen
icon: fa-solid fa-language
description: Die Dokumentation Seite für Seite übersetzen, mit Sprachwahl, Ersatz für nicht übersetzte Seiten und einer Oberfläche in zwölf Sprachen.
---

# Übersetzungen

Clay-Seiten können mehrere Sprachen haben. Du übersetzt Seite für Seite, in deinem Tempo: Noch nicht übersetzte Seiten erscheinen in der Originalsprache, die Dokumentation ist also vom ersten Tag an in jeder Sprache vollständig.

Diese Website ist ein Beispiel: Wechsle in der Navigationsleiste zu **English**.

## Einrichten

::: steps
1. **Liste die Sprachen** in der `clay.yaml` auf. Die erste ist die Standardsprache:

   ```yaml
   languages: ["en", "de"]
   ```

   Nutze Sprachcodes wie `en`, `de`, `fr`, `pt-BR` oder `zh-TW`.

2. **Übersetze eine Seite.** Leg die Übersetzung neben die Seite und setz den Sprachcode vor `.md`:

   ```tree
   docs/guides/
     setup.md       # Englisch, das Original
     setup.de.md    # deutsche Übersetzung
   ```

3. **Übersetze die Einstellungen**, die Leser sehen, etwa den Titel, siehe [Einstellungen je Sprache](#einstellungen-je-sprache).
:::

Die Standardsprache liegt an der Wurzel der Website, jede andere Sprache unter ihrem Code:

| Seite | Englisch (Standard) | Deutsch |
|-------|---------------------|---------|
| Startseite | `/` | `/de` |
| `docs/guides/setup.md` | `/guides/setup` | `/de/guides/setup` |
| In Version 1.x | `/1.x/guides/setup` | `/1.x/de/guides/setup` |

## Eine übersetzte Seite

Die Übersetzung ist eine vollständige eigene Seite: mit eigenem Front Matter, eigenen Überschriften, eigenem Text.

```markdown
---
title: Einrichtung
description: So richtest du das Projekt in fünf Schritten ein.
---

# Das Projekt einrichten
```

Ihr `title`, `icon` und ihre `description` gehören ihr. Ihre **Position** in der Navigation kommt vom Original, alle Sprachen haben also denselben Aufbau.

Ordner und die Startseite übersetzt du genauso: Eine `index.de.md` neben der `index.md` gibt einem Ordner seinen deutschen Titel und seine Seite, und `docs/index.de.md` ist die deutsche Startseite. Siehe [Indexseiten](index-pages.md).

## Seiten ohne Übersetzung

Eine Seite ohne Übersetzung in einer Sprache erscheint trotzdem in deren Navigation, mit dem Originaltext und einem Hinweis:

> Diese Seite ist noch nicht übersetzt und wird auf Englisch angezeigt.

Für Suchmaschinen verweist eine solche Seite auf das Original und fehlt in der Sitemap. Fügst du die Übersetzung hinzu, tritt sie einfach an die Stelle der Seite.

## Einstellungen je Sprache

Texteinstellungen in der `clay.yaml` können einen Wert je Sprache haben. Fehlende Sprachen nutzen den Wert der Standardsprache:

```yaml
title:
  en: "My Project"
  de: "Mein Projekt"
navbar:
  links:
    - name:
        en: "Website"
        de: "Webseite"
      icon: "fa-solid fa-house"
      link: "https://example.com"
```

## Die Oberfläche

Suche, Navigation, Seitenfuß und Hinweise gibt es in zwölf Sprachen:

| | | | |
|---|---|---|---|
| Englisch `en` | Deutsch `de` | Französisch `fr` | Spanisch `es` |
| Italienisch `it` | Portugiesisch `pt` | Niederländisch `nl` | Polnisch `pl` |
| Russisch `ru` | Japanisch `ja` | Chinesisch `zh` | Koreanisch `ko` |

Regionale Codes nutzen ihre Grundsprache: `pt-BR` bekommt Portugiesisch. Andere Sprachen bekommen Englisch, außer du lieferst die Texte.

::: details Eigene Texte
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
:::

## Die Sprachwahl

Mit mehr als einer Sprache zeigt die Navigationsleiste eine Sprachwahl. Sie behält die Seite, die du liest, und die [Version](versions.md). Auf Smartphones sitzt sie in der Navigationsschublade.

## Links in Übersetzungen

Schreib Links in Übersetzungen genau wie im Original: relativ zur Seite. `[Einrichtung](setup.md)` in `docs/guides/intro.de.md` führt zu `/de/guides/setup`, der deutschen Seite. Bilder und Dateien teilen sich alle Sprachen; eine Übersetzung verweist mit denselben Pfaden auf sie wie das Original.

## Prüfungen

Der Build warnt vor Übersetzungen ohne Original (`setup.de.md` ohne `setup.md`) und vor Sprachcodes, die er nicht nutzen kann. Beim Build meldet Clay, wie weit jede Sprache ist:

```text
●  Loaded 29 pages from docs  languages de (27/29 translated)
```
