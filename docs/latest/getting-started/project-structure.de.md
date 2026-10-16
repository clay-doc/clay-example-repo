---
title: Projektstruktur
icon: fa-solid fa-folder-tree
description: Die Dateien eines Clay-Projekts, wofür jede da ist und was ins Git gehört.
---

# Projektstruktur

Ein Clay-Projekt hat einen festen Aufbau. Clay sucht seine Dateien im Projektordner: dem Ordner, in dem du `clay` ausführst, oder dem, den du mit `--root` angibst.

```tree
mein-projekt/
  clay.yaml               # Pflicht: Einstellungen der Seite
  logo.svg                # optional: Logo und Favicon, genannt in clay.yaml
  docs/                   # Pflicht: die Seiten der aktuellen Version
    index.md              # optional: die Startseite
    introduction.md
    introduction.de.md    # optional: eine Übersetzung
    guides/
      index.md            # optional: Titel, Icon, Reihenfolge und Seite des Ordners
      setup.md
      img/
        screen.png        # Bilder und Dateien werden veröffentlicht, wie sie sind
  docs-archive/           # optional: ältere Versionen der Dokumentation
    1.x/                  # eine Kopie von docs/, wie sie für Version 1.x war
  package.json            # optional: Clay als Entwicklungsabhängigkeit
  publish/                # von clay build erzeugt; nicht committen
```

## Wofür jeder Teil da ist

| Pfad | Zweck | Mehr dazu |
|------|-------|-----------|
| `clay.yaml` | Titel, Basis-URL, Links in der Navigationsleiste, Sprachen | [clay.yaml](../configuration/clay-yaml.md) |
| `docs/` | Jede `.md`-Datei ist eine Seite; andere Dateien werden veröffentlicht, wie sie sind | [Seiten](../writing/pages.md) |
| `index.md` | Die Startseite (`docs/index.md`) sowie Titel, Icon, Reihenfolge und Seite eines Ordners | [Indexseiten](../organizing/index-pages.md) |
| `*.de.md` und ähnliche | Übersetzungen der Seite daneben | [Übersetzungen](../organizing/translations.md) |
| `docs-archive/<name>/` | Eine gespeicherte Kopie der Dokumentation eines älteren Releases | [Versionen](../organizing/versions.md) |
| `publish/public/` | Die fertige Website | [Befehle](../publishing/commands.md) |

## Regeln für den Ordner docs

- **Jede Markdown-Datei wird eine Seite.** Ihr Pfad ist ihre URL: `docs/guides/setup.md` liegt unter `/guides/setup`.
- **Ordner werden Bereiche** der Navigation. Ein Ordner erscheint nur, wenn er mindestens eine Seite enthält, in beliebiger Tiefe.
- **Jede andere Datei**, etwa Bilder, PDFs oder Downloads, wird unverändert in die Seite kopiert, damit Seiten auf sie verlinken können.
- **Namen, die mit einem Punkt beginnen** (`.DS_Store`, `.git`), werden ignoriert.

## Was ins Git gehört

Committe `clay.yaml`, `docs/`, `docs-archive/`, dein Logo sowie `package.json` mit ihrer Lockfile. Lass die Build-Ausgabe und die Abhängigkeiten weg:

```text [.gitignore]
node_modules/
publish/
```

> [!TIP]
> Clay zeigt, wann jede Seite zuletzt geändert wurde, und nimmt das aus Git. Halte die Dokumentation in einem Git-Repository und checke in der CI die ganze Historie aus, um diese Daten zu bekommen. Siehe [Seitendetails](../features/page-details.md).
