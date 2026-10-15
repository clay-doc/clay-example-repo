---
title: Schreiben
icon: fa-solid fa-pen-nib
description: Alles rund um den Inhalt einer Seite, von Markdown und Codeblöcken bis zu Komponenten, Links und Bildern.
---

# Schreiben

Jede Seite ist eine Markdown-Datei in `docs/`, geschrieben in **Clay Flavored Markdown** (CFM): dem Markdown, das du von GitHub kennst, plus Syntaxhervorhebung, Hinweisen und Komponenten. Clay prüft bei jedem Build deine Links.

::: cards
- [Seiten](pages.md)
- [Markdown](markdown.md)
- [Codeblöcke](code-blocks.md)
- [Hinweise](alerts.md)
- [Komponenten](components/index.md)
- [Links & Bilder](links-and-images.md)
- [HTML](html.md)
- [Snippets & Variablen](snippets-and-variables.md)
:::

## Eine Seite auf einen Blick

Eine Datei, vom Front Matter bis zu den Komponenten:

::: tabs
== Ergebnis
**Einrichtung** ist der Titel der Seite in der Seitenleiste; ihr Text beginnt so:

> [!TIP]
> Schon installiert? Spring zur [Konfiguration](../configuration/clay-yaml.md).

::: code-group
```bash [npm]
npm install --save-dev clay-doc
```
```bash [pnpm]
pnpm add --save-dev clay-doc
```
:::
== Markdown
````markdown
---
title: Einrichtung
icon: fa-solid fa-wrench
description: Das Projekt in fünf Minuten installieren und konfigurieren.
---

# Das Projekt einrichten

> [!TIP]
> Schon installiert? Spring zur [Konfiguration](../configuration/clay-yaml.md).

::: code-group
```bash [npm]
npm install --save-dev clay-doc
```
```bash [pnpm]
pnpm add --save-dev clay-doc
```
:::
````
:::

## Was wann passt

| Du willst … | Nimm |
|-------------|------|
| Einen Befehl oder eine Datei zeigen | einen [Codeblock](code-blocks.md), mit markierten Zeilen oder einem Diff |
| Dasselbe für npm, pnpm und yarn zeigen, oder für jedes System | [Tabs oder eine Codegruppe](components/tabs.md) |
| Leser der Reihe nach durch etwas führen | [Schritte](components/steps.md) |
| Auf einen Tipp, eine Warnung oder ein Risiko hinweisen | einen [Hinweis](alerts.md) |
| Verbergen, was nur manche Leser brauchen | [Details](components/details.md) |
| Leser zu anderen Seiten führen | [Karten](components/cards.md) oder [Links](links-and-images.md) |
| Erklären, wie Teile zusammenpassen | ein [Diagramm](components/diagrams.md) oder einen [Dateibaum](components/file-trees.md) |
| Vorschlagen, was man einen KI-Assistenten oder Agenten fragt | einen [Prompt](components/prompts.md) |
| Etwas als neu oder veraltet markieren | einen [Badge](components/badges.md) |

## Das Wichtigste

- **Eine Datei, eine Seite.** Aus `docs/guides/setup.md` wird `/guides/setup`.
- **Links funktionieren wie auf GitHub.** Verlinke die `.md`-Datei; Clay macht daraus die URL der Seite und meldet Links, die ins Leere führen.
- **Dateien neben deinen Seiten werden veröffentlicht.** Bilder und Downloads in `docs/` behalten ihre relativen Pfade.
- **Schlichter Text bleibt schlicht.** Auch Komponenten sind Text, jede Seite liest sich also gut im Editor und auf GitHub.
