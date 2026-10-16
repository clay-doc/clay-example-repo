---
title: Diagrams
icon: fa-solid fa-diagram-project
description: Flowcharts, sequence diagrams, pie charts and more from text with Mermaid, in the colors of your site.
order: 8
---

# Diagrams

Draw diagrams from text with [Mermaid](https://mermaid.js.org): write a code block in the language `mermaid`, and Clay draws it in the colors of your site, light or dark.

## Flowcharts

````markdown
```mermaid
flowchart LR
  A[Write Markdown] --> B[clay build]
  B --> C{--strict?}
  C -- warnings --> D[Build fails]
  C -- no warnings --> E([Site in publish/public])
```
````

```mermaid
flowchart LR
  A[Write Markdown] --> B[clay build]
  B --> C{--strict?}
  C -- warnings --> D[Build fails]
  C -- no warnings --> E([Site in publish/public])
```

## Sequence diagrams

````markdown
```mermaid
sequenceDiagram
  participant Reader
  participant Site
  Reader->>Site: Open a page
  Site-->>Reader: Pre-rendered HTML
  Note over Reader,Site: No server-side code runs
  Reader->>Site: Search
  Site-->>Reader: Search index, loaded once
```
````

```mermaid
sequenceDiagram
  participant Reader
  participant Site
  Reader->>Site: Open a page
  Site-->>Reader: Pre-rendered HTML
  Note over Reader,Site: No server-side code runs
  Reader->>Site: Search
  Site-->>Reader: Search index, loaded once
```

## Pie charts

````markdown
```mermaid
pie title Pages by section
  "Writing" : 14
  "Configuration" : 4
  "Deployment" : 3
```
````

```mermaid
pie title Pages by section
  "Writing" : 14
  "Configuration" : 4
  "Deployment" : 3
```

Mermaid draws many more kinds: state, class and entity-relationship diagrams, Gantt charts, timelines, mind maps and Git graphs. Its [documentation](https://mermaid.js.org/intro/) shows each with examples.

## How diagrams are drawn

- **In your site's colors.** Boxes, lines and text take the colors of the light or the dark theme, and are drawn again when a reader switches.
- **Only where needed.** Mermaid is large, so the browser only loads it on pages with diagrams.
- **Before it loads**, or without JavaScript, the diagram's source shows instead.
- **Safely.** Labels are text: diagrams cannot run scripts, and clicks in them do nothing.
- **Mistakes** show a message with the source below it, so you see what to fix.

> [!TIP]
> Give a diagram a title and a description for screen readers with `accTitle: …` and `accDescr: …` lines below its first line.

## On GitHub

GitHub draws `mermaid` code blocks too, so diagrams look right in the repository as well.
