---
title: Ordnen
icon: fa-solid fa-sitemap
description: Wie aus Seiten und Ordnern die Navigation wird, wie Ordner ihre Seiten bekommen und wie Versionen und Sprachen funktionieren.
---

# Ordnen

Clay baut die Navigation aus deinen Dateien: Jeder Ordner in `docs/` ist ein Bereich, jede Markdown-Datei eine Seite. Titel, Icons und Reihenfolge legst du im Front Matter fest, oder du überlässt das `clay edit`. Auch ältere Releases und andere Sprachen sind Ordner und Dateien.

::: cards
- [Navigation](navigation.md)
- [Ordner](folders.md)
- [Indexseiten](index-pages.md)
- [Versionen](versions.md)
- [Übersetzungen](translations.md)
- [Bearbeiten mit clay edit](clay-edit.md)
- [Weiterleitungen](redirects.md)
:::

## Von Dateien zur Navigation

::: tabs
== Deine Dateien
```tree
docs/
  index.md               # die Startseite
  introduction.md        # order: 1
  guides/
    index.md             # title: Anleitungen, order: 2
    setup.md
    deploying.md
  reference/
    api.md
```
== Die Seitenleiste
```tree
Introduction
Anleitungen/
  Deploying
  Setup
Reference/
  Api
```

Seiten mit `order` kommen zuerst; der Rest folgt alphabetisch. Titel kommen aus dem Front Matter, der ersten Überschrift oder dem Dateinamen.
:::

## Ein Projekt, viele Ausgaben

Versionen und Sprachen vervielfachen denselben Aufbau. Jede Ausgabe bekommt eigene Adresse, Navigation und Suche:

```tree
mein-projekt/
  docs/
    latest/               # neueste, Englisch: /
      setup.md
      setup.de.md         # neueste, Deutsch: /de/setup
    1.x/                  # Version 1.x: /1.x
      setup.md
```

Leser wechseln Version und Sprache in der Navigationsleiste und bleiben auf der Seite, die sie lesen.

## Das Wichtigste

- **Der Dateibaum ist die Navigation.** Verschiebst du eine Datei, wandert sie in der Seitenleiste mit.
- **`order` bringt Einträge in Reihenfolge.** Einträge ohne folgen alphabetisch.
- **Die `index.md` eines Ordners beschreibt den Ordner.** Ihr Front Matter benennt ihn; ihr Text, falls vorhanden, ist die Seite des Ordners.
- **Die neueste Version ist `docs/`**, oder `docs/latest/`, sobald es Versionen gibt. Ältere sind Kopien daneben, etwa `docs/1.x/`.
- **Übersetze so viel du magst.** Seiten ohne Übersetzung zeigen das Original, mit einem Hinweis.

> [!TIP]
> `npx clay edit` erledigt all das im Terminal: Seiten anlegen, ordnen, umbenennen, verschieben und übersetzen, ohne Front Matter von Hand zu schreiben. Siehe [clay edit](clay-edit.md).
