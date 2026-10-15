---
title: Diagramme
icon: fa-solid fa-diagram-project
description: Flussdiagramme, Sequenzdiagramme, Kreisdiagramme und mehr aus Text mit Mermaid, in den Farben deiner Seite.
---

# Diagramme

Zeichne Diagramme aus Text mit [Mermaid](https://mermaid.js.org): Schreib einen Codeblock in der Sprache `mermaid`, und Clay zeichnet ihn in den Farben deiner Seite, hell oder dunkel.

## Flussdiagramme

````markdown
```mermaid
flowchart LR
  A[Markdown schreiben] --> B[clay build]
  B --> C{--strict?}
  C -- Warnungen --> D[Build scheitert]
  C -- keine Warnungen --> E([Seite in publish/public])
```
````

```mermaid
flowchart LR
  A[Markdown schreiben] --> B[clay build]
  B --> C{--strict?}
  C -- Warnungen --> D[Build scheitert]
  C -- keine Warnungen --> E([Seite in publish/public])
```

## Sequenzdiagramme

````markdown
```mermaid
sequenceDiagram
  participant Leser
  participant Seite
  Leser->>Seite: Seite öffnen
  Seite-->>Leser: Vorgerendertes HTML
  Note over Leser,Seite: Kein Code läuft auf dem Server
  Leser->>Seite: Suchen
  Seite-->>Leser: Suchindex, einmal geladen
```
````

```mermaid
sequenceDiagram
  participant Leser
  participant Seite
  Leser->>Seite: Seite öffnen
  Seite-->>Leser: Vorgerendertes HTML
  Note over Leser,Seite: Kein Code läuft auf dem Server
  Leser->>Seite: Suchen
  Seite-->>Leser: Suchindex, einmal geladen
```

## Kreisdiagramme

````markdown
```mermaid
pie title Seiten je Bereich
  "Schreiben" : 14
  "Konfiguration" : 4
  "Veröffentlichen" : 3
```
````

```mermaid
pie title Seiten je Bereich
  "Schreiben" : 14
  "Konfiguration" : 4
  "Veröffentlichen" : 3
```

Mermaid zeichnet viele weitere Arten: Zustands-, Klassen- und Entity-Relationship-Diagramme, Gantt-Diagramme, Zeitleisten, Mindmaps und Git-Graphen. Seine [Dokumentation](https://mermaid.js.org/intro/) zeigt jede mit Beispielen.

## Wie Diagramme gezeichnet werden

- **In den Farben deiner Seite.** Kästen, Linien und Text nehmen die Farben des hellen oder dunklen Designs an und werden neu gezeichnet, wenn Leser umschalten.
- **Nur wo nötig.** Mermaid ist groß, der Browser lädt es nur auf Seiten mit Diagrammen.
- **Bevor es geladen ist**, oder ohne JavaScript, erscheint der Quelltext des Diagramms.
- **Sicher.** Beschriftungen sind Text: Diagramme können keine Skripte ausführen, und Klicks darin bewirken nichts.
- **Fehler** zeigen eine Meldung mit dem Quelltext darunter, damit du siehst, was zu korrigieren ist.

> [!TIP]
> Gib einem Diagramm einen Titel und eine Beschreibung für Screenreader, mit Zeilen `accTitle: …` und `accDescr: …` unter seiner ersten Zeile.

## Auf GitHub

GitHub zeichnet `mermaid`-Codeblöcke ebenfalls, Diagramme sehen also auch im Repository richtig aus.
