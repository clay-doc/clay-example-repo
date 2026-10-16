---
title: Dateibäume
icon: fa-solid fa-folder-tree
description: Ordner und Dateien aus einer eingerückten Liste, mit Icons je Dateityp, Kommentaren und einklappbaren Ordnern.
---

# Dateibäume

Ein Dateibaum zeigt, wie ein Projekt aufgebaut ist. Schreib einen Codeblock in der Sprache `tree` mit einem Namen pro Zeile, eingerückt unter seinem Ordner:

````markdown
```tree
mein-projekt/
  docs/
    index.md       # die Startseite
    guides/
      setup.md
      img/
        screen.png
    ...
  clay.yaml        # Einstellungen
  package.json
```
````

```tree
mein-projekt/
  docs/
    index.md       # die Startseite
    guides/
      setup.md
      img/
        screen.png
    ...
  clay.yaml        # Einstellungen
  package.json
```

## Einen Baum schreiben

- **Rücke** jeden Eintrag unter seinem Ordner ein. Jede Einrückung funktioniert, solange Einträge desselben Ordners untereinander stehen.
- **Ordner** enden auf `/` oder haben Einträge unter sich.
- **Kommentare** folgen auf `#` und erscheinen neben dem Namen.
- **`...`** in einer eigenen Zeile steht für weitere Einträge.
- **Ordner mit Einträgen klappen** mit einem Klick auf ihren Pfeil ein und aus, wie in einem Editor.

## Icons

| Dateien | Icon |
|---------|------|
| `.md` | Markdown |
| Bilder (`.png`, `.jpg`, `.svg`, …) | Bild |
| Code und Einstellungen (`.yaml`, `.json`, `.ts`, `.js`, `.vue`, `.css`, …) | Code |
| `.pdf`, Archive | PDF, Archiv |
| Alles andere | Text |

## Aus dem Befehl `tree`

Die Ausgabe des Befehls `tree` funktioniert, wie sie ist: Ihre Linien zählen als Einrückung.

````markdown
```tree
docs
├── guides
│   └── setup.md
└── index.md
```
````

```tree
docs
├── guides
│   └── setup.md
└── index.md
```
