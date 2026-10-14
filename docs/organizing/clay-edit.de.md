---
title: Bearbeiten mit clay edit
icon: fa-solid fa-pen-to-square
description: Seiten und Ordner umsortieren, umbenennen und die Einstellungen der Seite in einem Editor im Terminal bearbeiten.
---

# Bearbeiten mit clay edit

`clay edit` öffnet einen Editor im Terminal für alles rund um deine Seiten: ihre Reihenfolge, Titel und Icons, die Namen der Ordner und die Einstellungen in der `clay.yaml`. Er schreibt dieselben Dateien, die du sonst von Hand bearbeitest; beide Wege lassen sich also beliebig mischen.

```bash
npx clay edit
```

```text
┌  Clay · edit   Pages   Settings
│
│ › ◆ Introduction             fa-solid fa-house
│   ▾ Getting Started          fa-solid fa-rocket
│   │  ◆ Installation          fa-solid fa-download •
│   │  ◆ Quick Start           fa-solid fa-bolt
│   ▸ Guides                   fa-solid fa-book-open
│
└  ↑↓ select · m move · ←→ fold · ⏎ title · i icon · tab settings · s save · q quit
   1 unsaved change(s)
```

## Seiten

Der Reiter **Pages** zeigt deine Dokumentation in der Reihenfolge der Navigation. Grau dargestellte Titel sind Standardwerte (aus der ersten Überschrift oder dem Ordnernamen), ein gelber Punkt markiert Einträge, die du geändert hast.

| Taste | Aktion |
|-------|--------|
| <kbd>↑</kbd> <kbd>↓</kbd> | Eintrag auswählen |
| <kbd>m</kbd> oder <kbd>Leertaste</kbd> | Eintrag aufnehmen; mit <kbd>↑</kbd> <kbd>↓</kbd> verschieben, mit <kbd>⏎</kbd> ablegen |
| <kbd>←</kbd> <kbd>→</kbd> | Ordner zu- und aufklappen |
| <kbd>⏎</kbd> oder <kbd>t</kbd> | Titel bearbeiten |
| <kbd>i</kbd> | Icon bearbeiten |
| <kbd>Tab</kbd> | Zu den Einstellungen wechseln |
| <kbd>s</kbd> | Speichern |
| <kbd>q</kbd> | Beenden; fragt nach, wenn ungespeicherte Änderungen da sind |

Einträge bewegen sich innerhalb ihres Ordners. Sobald du einen verschiebst, nummeriert Clay alles in diesem Ordner durch (`order: 1`, `2`, `3`, …) und schreibt nur die Dateien, deren Nummer sich geändert hat.

In einem Textfeld übernimmt <kbd>⏎</kbd> die Eingabe, <kbd>Esc</kbd> bricht ab. Lass ein Feld leer, um den Wert zu entfernen und zum Standard zurückzukehren.

## Einstellungen

Der Reiter **Settings** listet die Einstellungen der `clay.yaml`: Seite, Navigationsleiste und Startseite. Wähle eine aus und drück <kbd>⏎</kbd>, um sie zu ändern. Links der Navigationsleiste fügst du mit **+ Add link** hinzu und entfernst sie mit <kbd>d</kbd>.

Der Editor selbst ist englisch.

## Was er schreibt

| Änderung | Geschrieben in |
|----------|----------------|
| Titel, Icon, Reihenfolge einer Seite | Das Front Matter der Seite |
| Name, Icon, Reihenfolge eines Ordners | `dir-meta.yaml` |
| Einstellungen | `clay.yaml` |

Clay ändert nur die Werte, die du bearbeitet hast. Kommentare, Anführungszeichen, die Reihenfolge der Schlüssel und der Rest jeder Datei bleiben, wie sie waren; der Diff in Git zeigt also genau deine Änderung.

> [!TIP]
> Lass `npx clay dev` in einem zweiten Terminal laufen: Die Seite lädt bei jedem Speichern im Editor neu.

> [!NOTE]
> Auf einer [mehrsprachigen Seite](../versions-and-languages/translations.md) arbeitet der Editor mit der Standardsprache. Titel von Übersetzungen stehen in den übersetzten Dateien; Ordnernamen, die pro Sprache angegeben sind, behalten ihre anderen Sprachen.
