---
title: Ordnen
icon: fa-solid fa-sitemap
list: true
---

# Ordnen

Wie Seiten und Ordner zur Navigation werden, wie Ordner ihre Seiten bekommen und wie `clay edit` alles in Ordnung hält.

Clay baut die Seitenleiste aus deinen Dateien: Jeder Ordner in `docs/` ist ein Abschnitt, jede Markdown-Datei eine Seite. Namen, Icons und Reihenfolge legst du im Front Matter fest, oder du überlässt das `clay edit`.

| Wenn du … willst | Lies |
|------------------|------|
| Seitenleiste, Brotkrumen und Vor-/Zurück-Links verstehen | [Navigation](navigation.md) |
| Einen Ordner benennen, ihm ein Icon geben oder ihn einordnen | [Ordner](folders.md) |
| Eine Einleitung für einen Ordner oder die Startseite schreiben | [Indexseiten](index-pages.md) |
| Seiten anlegen, ordnen, umbenennen oder verschieben, ohne Dateien von Hand anzufassen | [Bearbeiten mit clay edit](clay-edit.md) |

## Das Wichtigste

- **Der Dateibaum ist die Navigation.** Verschiebst du eine Datei, wandert sie auch in der Seitenleiste.
- **`order` legt die Reihenfolge fest.** Einträge ohne folgen alphabetisch.
- **Die `index.md` eines Ordners beschreibt den Ordner.** Ihr Front Matter benennt ihn; ihr Text, falls vorhanden, ist die Seite des Ordners.
