---
title: Bearbeiten mit clay edit
icon: fa-solid fa-pen-to-square
description: Seiten und Ordner anlegen, bearbeiten, ordnen, umbenennen, verschieben und löschen, übersetzen und die Einstellungen bearbeiten, für jede Version und Sprache.
---

# Bearbeiten mit clay edit

`clay edit` ist ein Editor im Terminal für alles rund um deine Seiten: Seiten und Ordner anlegen, ihr Front Matter, ihre Reihenfolge, sie umbenennen, verschieben und löschen, Übersetzungen, Versionen und die Einstellungen in der `clay.yaml`. Er schreibt dieselben Dateien, die du sonst von Hand bearbeitest; beide Wege lassen sich also beliebig mischen.

```bash
npx clay edit
```

```text
┌  Clay · edit   Pages   Settings   latest · de
│
│   ⌂ Clay-Dokumentation          fa-solid fa-book-open
│   ◆ Einführung                  fa-solid fa-house
│ › ▾ Erste Schritte              fa-solid fa-rocket
│   │  ◆ Installation             fa-solid fa-download
│   │  ◆ Schnellstart             fa-solid fa-bolt
│   ▸ Schreiben                   fa-solid fa-pen-nib
│
└  ⏎ details · n page · f folder · m order · o move · r rename · x delete · v/V version · l language · tab · q
```

Änderungen werden sofort geschrieben, Datei für Datei, und der Editor zeigt, welche Dateien er geschrieben hat. Mit Git prüfst du sie oder machst sie rückgängig. Der Editor selbst ist englisch.

## Seiten und Ordner

Der Reiter **Pages** zeigt die Startseite (`⌂`), die Ordner (`▾`) und die Seiten (`◆`) in der Reihenfolge der Navigation. Grau dargestellte Titel sind Standardwerte, aus der ersten Überschrift oder dem Dateinamen.

| Taste | Aktion |
|-------|--------|
| <kbd>↑</kbd> <kbd>↓</kbd> | Eintrag auswählen |
| <kbd>←</kbd> <kbd>→</kbd> | Ordner zu- und aufklappen |
| <kbd>⏎</kbd> | Details öffnen: alle Front-Matter-Felder des Eintrags |
| <kbd>t</kbd> / <kbd>i</kbd> | Titel / Icon direkt bearbeiten |
| <kbd>n</kbd> | Eine Seite im gewählten Ordner anlegen (oder neben der gewählten Seite) |
| <kbd>f</kbd> | Einen Ordner anlegen, mit einer `index.md` |
| <kbd>m</kbd> | Eintrag aufnehmen; mit <kbd>↑</kbd> <kbd>↓</kbd> verschieben, mit <kbd>⏎</kbd> ablegen |
| <kbd>o</kbd> | Eintrag in einen anderen Ordner verschieben |
| <kbd>r</kbd> | Datei oder Ordner umbenennen |
| <kbd>x</kbd> | Eintrag löschen, nach Rückfrage |
| <kbd>Tab</kbd> | Zu den Einstellungen wechseln |
| <kbd>q</kbd> | Beenden |

Neue Seiten bekommen ihren Titel als Front Matter und als erste Überschrift, und einen Dateinamen aus dem Titel, den du vor dem Anlegen ändern kannst. Neue Ordner bekommen eine `index.md` mit ihrem Titel und `list: true`.

Beim Ordnen nummeriert Clay alles im Ordner durch (`order: 1`, `2`, `3`, …) und schreibt nur die Dateien, deren Nummer sich geändert hat.

Umbenennen und Verschieben nehmen die Übersetzungen der Seite mit. Links auf den Eintrag schreibt Clay nicht um; stattdessen listet es die Links, die dadurch kaputtgegangen sind, damit du sie korrigieren kannst:

```text
Moved setup.md → guides/setup.md · 2 link(s) broke: introduction.md: "setup.md" points to a missing page (/setup) …
```

## Die Details

<kbd>⏎</kbd> öffnet alle Front-Matter-Felder des gewählten Eintrags: Titel, Icon, Beschreibung und Reihenfolge, für Ordner und die Startseite auch `list` und `hero` (siehe [Indexseiten](index-pages.md)). Wähle ein Feld und drück <kbd>⏎</kbd>, um es zu ändern; Ja/Nein-Felder schaltest du mit <kbd>⏎</kbd> um. <kbd>Esc</kbd> führt zurück zur Liste.

In einem Textfeld übernimmt <kbd>⏎</kbd> die Eingabe, <kbd>Esc</kbd> bricht ab. Lass ein Feld leer, um den Wert zu entfernen und zum Standard zurückzukehren. Für einen Ordner ohne `index.md` legt der Editor eine an.

## Versionen und Sprachen

Die Kopfzeile zeigt, welche Version und Sprache du bearbeitest.

| Taste | Aktion |
|-------|--------|
| <kbd>v</kbd> | Zur nächsten Version wechseln |
| <kbd>V</kbd> | Die aktuelle Dokumentation als neue Version speichern, siehe [Versionen](../versions-and-languages/versions.md) |
| <kbd>l</kbd> | Zur nächsten Sprache wechseln |
| <kbd>c</kbd> | Eine Übersetzung des gewählten Eintrags beginnen: kopiert das Original nach `*.de.md` und so weiter |

In einer anderen Sprache sind Seiten ohne Übersetzung als **untranslated** markiert. Setzt du ein Feld einer solchen Seite, legt der Editor die Übersetzung zuerst aus dem Original an. Die Reihenfolge ist in jeder Sprache gleich; du änderst sie deshalb in der Standardsprache.

## Einstellungen

Der Reiter **Settings** listet die Einstellungen der `clay.yaml`. Wähle eine aus und drück <kbd>⏎</kbd>, um sie zu ändern. Einstellungen mit einem Wert pro Sprache bearbeitest du in der Sprache, die die Kopfzeile zeigt. Links der Navigationsleiste fügst du mit **+ Add link** hinzu und entfernst sie mit <kbd>d</kbd>.

Clay ändert nur die Werte, die du bearbeitest. Kommentare, Anführungszeichen, die Reihenfolge der Schlüssel und der Rest jeder Datei bleiben, wie sie waren; der Diff in Git zeigt also genau deine Änderung.

> [!TIP]
> Lass `npx clay dev` in einem zweiten Terminal laufen: Die Seite lädt bei jeder Änderung im Editor neu.
