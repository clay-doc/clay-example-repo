---
title: Konfiguration
icon: fa-solid fa-gear
list: true
---

# Konfiguration

Referenz der `clay.yaml`, des Front Matters von Seiten und Ordnern und der Umgebungsvariablen, die Einstellungen beim Build überschreiben.

Einstellungen stehen an drei Stellen, von der ganzen Seite bis zu einer einzelnen Seite:

| Wo | Was es festlegt | Referenz |
|----|-----------------|----------|
| `clay.yaml` | Die Seite: Titel, Links der Navigationsleiste, Versionen, Sprachen, Prüfungen | [clay.yaml](clay-yaml.md) |
| Front Matter | Eine Seite oder einen Ordner: Titel, Icon, Beschreibung, Reihenfolge, Layout | [Front Matter](front-matter.md) |
| Umgebungsvariablen | Einstellungen für einen Build, etwa in CI oder für eine Staging-Seite | [Umgebungsvariablen](environment-variables.md) |

## Das Wichtigste

- **Alles hat einen Standard.** Eine `clay.yaml` nur mit `title` und einfache Markdown-Dateien ergeben schon eine funktionierende Seite.
- **Umgebungsvariablen gewinnen.** Sie überschreiben die `clay.yaml` für einen Build, ohne die Datei zu ändern.
- **YAML musst du nicht von Hand bearbeiten.** `clay edit` ändert Einstellungen und Front Matter und behält deine Kommentare und Formatierung. Siehe [clay edit](../organizing/clay-edit.md).
