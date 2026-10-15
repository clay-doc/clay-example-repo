---
title: Projektstruktur
icon: fa-solid fa-folder-tree
description: Die Dateien eines Clay-Projekts, was jede davon tut und was ins Git gehört.
---

# Projektstruktur

Ein Clay-Projekt hat einen festen Aufbau. Clay sucht seine Dateien im Projektordner: dem Ordner, in dem du `clay` ausführst, oder dem, den du mit `--root` angibst.

```text
mein-projekt/
├── clay.yaml              # Pflicht: Einstellungen der Seite
├── logo.svg               # optional: Logo und Favicon, angegeben in der clay.yaml
├── docs/                  # Pflicht: die Seiten der aktuellen Version
│   ├── index.md           # optional: die Startseite
│   ├── introduction.md
│   ├── introduction.de.md # optional: eine Übersetzung
│   └── guides/
│       ├── index.md       # optional: Name, Icon, Reihenfolge und Seite des Ordners
│       ├── setup.md
│       └── img/
│           └── screen.png # Bilder und Dateien werden unverändert veröffentlicht
├── docs-archive/          # optional: ältere Versionen der Dokumentation
│   └── 1.x/               # eine Kopie von docs/, wie es für Version 1.x war
├── package.json           # optional: Clay als Entwicklungsabhängigkeit
└── publish/               # entsteht durch clay build; nicht committen
```

## Was die Teile tun

| Pfad | Zweck | Mehr dazu |
|------|-------|-----------|
| `clay.yaml` | Titel, Basis-URL, Links in der Navigationsleiste, Sprachen | [clay.yaml](../configuration/clay-yaml.md) |
| `index.md` | Die Startseite (`docs/index.md`), sowie Name, Icon, Reihenfolge und Seite eines Ordners | [Indexseiten](../organizing/index-pages.md) |
| `docs/` | Jede `.md`-Datei ist eine Seite; andere Dateien werden mitveröffentlicht | [Seiten](../writing/pages.md) |
| `*.de.md` und ähnliche | Übersetzungen der Seite daneben | [Übersetzungen](../versions-and-languages/translations.md) |
| `docs-archive/<name>/` | Eine gespeicherte Kopie der Dokumentation eines älteren Releases | [Versionen](../versions-and-languages/versions.md) |
| `publish/public/` | Die fertige Website | [Befehle](../cli/commands.md) |

## Regeln für den docs-Ordner

- Jede Markdown-Datei (`.md`) wird zu einer Seite. Ihr Pfad wird ihre URL: `docs/guides/setup.md` liegt unter `/guides/setup`.
- Ordner werden zu Abschnitten der Navigation. Ein Ordner erscheint nur, wenn er mindestens eine Seite enthält, in beliebiger Tiefe.
- Jede andere Datei, etwa Bilder, PDFs oder Downloads, wird unverändert in die Seite kopiert, damit Seiten darauf verlinken können.
- Dateien und Ordner, deren Name mit einem Punkt beginnt (`.DS_Store`, `.git`), werden ignoriert.

## Was ins Git gehört

Committe `clay.yaml`, `docs/`, `docs-archive/`, dein Logo sowie `package.json` mit `package-lock.json`. Die Ausgabe des Builds und die Abhängigkeiten gehören nicht dazu:

```text
# .gitignore
node_modules/
publish/
```

> [!TIP]
> Clay zeigt, wann jede Seite zuletzt geändert wurde, und liest das aus Git. Halte die Dokumentation in einem Git-Repository und checke in der CI die ganze Historie aus, damit die Daten erscheinen. Siehe [Seitendetails](../features/page-details.md).
