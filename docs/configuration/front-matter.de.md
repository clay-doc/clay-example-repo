---
title: Front Matter
icon: fa-solid fa-file-code
description: Referenz aller Front-Matter-Felder von Seiten, Ordnern (index.md) und der Startseite, mit Standardwerten und Beispielen.
---

# Front Matter

Front Matter ist der Block mit Einstellungen oben in einer Markdown-Datei, zwischen zwei `---`-Zeilen. Seiten nutzen ihn für ihren Titel und ihre Position, Ordner in ihrer `index.md` für Name, Icon, Position und Gestaltung.

```markdown
---
title: Einrichtung
icon: fa-solid fa-wrench
description: So installierst und konfigurierst du das Projekt in fünf Schritten.
order: 2
---

# Das Projekt einrichten
```

## Felder

| Feld | Typ | Standard | Für | Zweck |
|------|-----|----------|-----|-------|
| `title` | Text | erste `# Überschrift`, dann Datei- oder Ordnername | alle | Titel in Seitenleiste, Brotkrumen, Suche und Browser-Tab |
| `icon` | Text | `fa-solid fa-file`, Ordner `fa-solid fa-folder` | alle | [Font-Awesome](../features/themes-and-icons.md)-Icon |
| `description` | Text | erster Absatz | alle | Zusammenfassung für Suchmaschinen und Link-Vorschauen, siehe [SEO](../features/seo.md) |
| `order` | Zahl | keiner | alle | Position zwischen den Einträgen daneben, siehe [Navigation](../organizing/navigation.md) |
| `list` | `true` / `false` | `false` | `index.md` | Liste mit Links zu den Seiten des Ordners unter dem Text |
| `hero` | `true` / `false` | `false` | `index.md` | `title`, `icon` und `description` als große, zentrierte Kopfzeile |
| `redirects` | Liste | keine | alle | Alte Adressen, die zur Seite führen, siehe [Weiterleitungen](../organizing/redirects.md) |

## Regeln

- Front Matter zählt nur, wenn `---` die allererste Zeile der Datei ist; eine Trennlinie weiter unten wird nie dafür gehalten.
- Werte dürfen in Anführungszeichen stehen: `title: "Einrichtung: der lange Weg"`. Setze Werte in Anführungszeichen, die `: ` enthalten oder mit einem Sonderzeichen beginnen.
- Felder, die Clay nicht kennt, bleiben unangetastet; andere Werkzeuge können ihre Felder wie `tags` oder `author` also im selben Block behalten.
- In einer Übersetzung gehören `title`, `icon` und `description` der Übersetzung; `order` kommt immer aus dem Original.

## Wofür das Front Matter einer Datei gilt

| Datei | Beschreibt |
|-------|------------|
| `docs/setup.md` | Die Seite `/setup` |
| `docs/guides/index.md` | Den Ordner `guides`: seinen Namen, sein Icon, seine Reihenfolge und seine Seite `/guides` |
| `docs/index.md` | Die Startseite `/` |
| `docs/setup.de.md` | Die deutsche Seite `/de/setup` |

> [!TIP]
> `clay edit` bearbeitet all diese Felder für jede Seite und jeden Ordner, in jeder Version und Sprache. Siehe [clay edit](../organizing/clay-edit.md).
