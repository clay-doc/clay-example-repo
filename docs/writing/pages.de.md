---
title: Seiten
icon: fa-solid fa-file-lines
description: Wie aus Markdown-Dateien Seiten werden, woher Seiten ihre Titel bekommen und welche Front-Matter-Felder Clay liest.
---

# Seiten

Jede Markdown-Datei in `docs/` ist eine Seite. Ihr Pfad bestimmt ihre URL:

| Datei | URL |
|-------|-----|
| `docs/introduction.md` | `/introduction` |
| `docs/guides/setup.md` | `/guides/setup` |
| `docs/guides/advanced/tuning.md` | `/guides/advanced/tuning` |

Auch Ordner bekommen eine Seite: `/guides` zeigt die Seiten und Ordner in `guides/` als Kacheln. Eine URL, die auf `.md` endet, wie `/guides/setup.md`, leitet zur Seite weiter.

> [!TIP]
> Dateinamen landen in URLs. Nimm kleingeschriebene Wörter mit Bindestrichen (`getting-started.md`) und benenne veröffentlichte Seiten möglichst nicht um: Links auf die alte URL funktionieren sonst nicht mehr.

## Titel

Der Titel einer Seite erscheint in der Seitenleiste, den Brotkrumen, Suchergebnissen und im Browser-Tab. Clay nimmt das Erste davon:

1. `title` im Front Matter,
2. die erste `# Überschrift` der Seite,
3. den Dateinamen, mit Leerzeichen statt Bindestrichen: `getting-started.md` wird zu „Getting started".

Die meisten Seiten brauchen nur eine `# Überschrift`. Nimm `title`, wenn die Seitenleiste etwas Kürzeres zeigen soll als die Überschrift.

## Front Matter

Front Matter ist ein optionaler Block mit Einstellungen ganz oben auf einer Seite, zwischen zwei `---`-Zeilen:

```markdown
---
title: Einrichtung
icon: fa-solid fa-wrench
description: So installierst und konfigurierst du das Projekt in fünf Schritten.
order: 2
---

# Das Projekt einrichten
```

| Feld | Standard | Zweck |
|------|----------|-------|
| `title` | erste Überschrift, dann Dateiname | Titel in Navigation, Suche und Browser-Tab |
| `icon` | `fa-solid fa-file` | [Font-Awesome](../features/themes-and-icons.md)-Icon in Seitenleiste und Brotkrumen |
| `description` | erster Absatz | Zusammenfassung für Suchmaschinen und Link-Vorschauen, siehe [SEO](../features/seo.md) |
| `order` | keiner | Position zwischen den Seiten und Ordnern daneben, siehe [Navigation](../organizing/navigation.md) |

Front Matter zählt nur, wenn `---` die allererste Zeile der Datei ist. Eine Trennlinie weiter unten wird also nie dafür gehalten. Werte dürfen in Anführungszeichen stehen, müssen aber nicht:

```markdown
---
title: "Einrichtung: der lange Weg"
icon: fa-solid fa-wrench
---
```

> [!NOTE]
> Felder, die Clay nicht kennt, ignoriert es. Felder anderer Werkzeuge, wie `tags` oder `author`, können im selben Block bleiben.

## Aufbau einer Seite

Jede Seite zeigt von oben nach unten:

- den Inhalt, aus Markdown gerendert,
- einen Link **Diese Seite bearbeiten** und das Datum der letzten Änderung (wenn eingerichtet, siehe [Seitendetails](../features/page-details.md)),
- Links zur vorherigen und nächsten Seite der Navigation.

Auf breiten Bildschirmen listet ein Inhaltsverzeichnis die `##`- und `###`-Überschriften der Seite und markiert den Abschnitt, den du gerade liest.
