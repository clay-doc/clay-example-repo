---
title: Seiten
icon: fa-solid fa-file-lines
description: Wie aus Markdown-Dateien Seiten werden, woher Seiten ihre Titel bekommen und welche Front-Matter-Felder Clay liest.
---

# Seiten

Jede Markdown-Datei in `docs/` ist eine Seite, und ihr Pfad ist ihre URL:

```tree
docs/
  introduction.md      # /introduction
  guides/
    index.md           # /guides, die Seite des Ordners
    setup.md           # /guides/setup
    advanced/
      tuning.md        # /guides/advanced/tuning
```

Auch Ordner bekommen eine Seite: `/guides` zeigt die [index.md](../organizing/index-pages.md) des Ordners oder sonst eine Liste der Seiten und Ordner in `guides/`. Eine URL, die auf `.md` endet, etwa `/guides/setup.md`, zeigt die Seite als Markdown, für Sprachmodelle und Agenten, siehe [KI & Agenten](../features/ai-and-agents.md).

> [!TIP]
> Dateinamen landen in URLs. Nutze kleingeschriebene Wörter mit Bindestrichen (`getting-started.md`) und benenne veröffentlichte Seiten möglichst nicht um: Links auf die alte URL funktionieren dann nicht mehr.

## Titel

Der Titel einer Seite erscheint in der Seitenleiste, den Brotkrumen, Suchergebnissen und dem Browser-Tab. Clay nimmt das Erste von:

::: steps
1. `title` im Front Matter,
2. die erste `# Überschrift` der Seite,
3. der Dateiname, mit Leerzeichen statt Bindestrichen: Aus `getting-started.md` wird „Getting started“.
:::

Die meisten Seiten brauchen nur eine `# Überschrift`. Nutze `title`, wenn die Seitenleiste etwas Kürzeres zeigen soll als die Überschrift.

## Front Matter

Das Front Matter ist ein optionaler Block mit Einstellungen ganz oben auf einer Seite, zwischen zwei `---`-Zeilen:

```markdown
---
title: Einrichtung
icon: fa-solid fa-wrench
description: Wie du das Projekt in fünf Schritten installierst und konfigurierst.
order: 2
---

# Das Projekt einrichten
```

| Feld | Standard | Zweck |
|------|----------|-------|
| `title` | erste Überschrift, dann Dateiname | Titel in Navigation, Suche und Browser-Tab |
| `icon` | `fa-solid fa-file` | [Font-Awesome](../features/themes-and-icons.md)-Icon in Seitenleiste, Brotkrumen und [Karten](components/cards.md) |
| `description` | erster Absatz | Zusammenfassung für Suchmaschinen, Linkvorschauen und [Karten](components/cards.md), siehe [SEO](../features/seo.md) |
| `order` | keine | Position unter den Seiten und Ordnern daneben, siehe [Navigation](../organizing/navigation.md) |
| `list`, `hero` | `false` | Nur für `index.md`: eine Liste der Seiten des Ordners und ein großer Kopf, siehe [Indexseiten](../organizing/index-pages.md) |

Jedes Feld ist in der [Front-Matter-Referenz](../configuration/front-matter.md) beschrieben. Eine Datei namens `index.md` ist keine eigene Seite: Sie ist die Seite ihres Ordners.

::: details Wann liest Clay das Front Matter?
Nur wenn `---` die allererste Zeile der Datei ist; eine waagerechte Linie weiter unten wird also nie dafür gehalten. Werte dürfen in Anführungszeichen stehen oder nicht; setz welche, wenn ein Doppelpunkt darin vorkommt:

```markdown
---
title: "Einrichtung: der lange Weg"
icon: fa-solid fa-wrench
---
```

Clay ignoriert Felder, die es nicht kennt; Felder anderer Werkzeuge, etwa `tags` oder `author`, können im selben Block bleiben.
:::

## Was eine Seite zeigt

Von oben nach unten:

- den Inhalt der Seite, aus Markdown gerendert,
- einen Link **Diese Seite bearbeiten** und das Datum der letzten Änderung, wenn eingerichtet, siehe [Seitendetails](../features/page-details.md),
- Links zur vorigen und zur nächsten Seite der Navigation.

Auf breiten Bildschirmen steht das Inhaltsverzeichnis der Seite, ihre `##`- und `###`-Überschriften, daneben und markiert die Abschnitte, die du gerade liest. Auf schmaleren Bildschirmen klappt es über der Seite auf.
