---
title: Seitendetails
icon: fa-solid fa-circle-info
description: Das Inhaltsverzeichnis, Daten der letzten Änderung, Bearbeiten-Links und Vor-/Zurück-Links rund um jede Seite.
---

# Seitendetails

Rund um den Inhalt jeder Seite ergänzt Clay, was Leser zur Orientierung brauchen: ein Inhaltsverzeichnis, wann die Seite zuletzt geändert wurde, einen Link, um sie zu verbessern, und den Weg zur nächsten Seite.

## Inhaltsverzeichnis

Auf breiten Bildschirmen listet ein Inhaltsverzeichnis neben der Seite ihre `##`- und `###`-Überschriften. Beim Scrollen markiert eine Linie daneben jeden Abschnitt, der zu sehen ist; ein Klick springt dorthin. Auf schmaleren Bildschirmen klappt es stattdessen über der Seite auf. Seiten mit nur einer Überschrift kommen ohne aus.

## Zuletzt aktualisiert

Unten auf jeder Seite zeigt Clay, wann sie zuletzt geändert wurde, aus dem letzten Git-Commit, der die Datei verändert hat:

> Zuletzt aktualisiert: 14. Oktober 2026

Das Datum wird in der Sprache der Seite formatiert. Dafür muss die Dokumentation in einem Git-Repository mit seiner Historie liegen. Checke in der CI die ganze Historie aus; die meisten CI-Systeme klonen standardmäßig nur den letzten Commit:

::: tabs
== GitHub Actions
```yaml
- uses: actions/checkout@v7
  with:
    fetch-depth: 0
```
== GitLab CI
```yaml
variables:
  GIT_DEPTH: 0
```
:::

Ohne Git-Historie fehlen die Daten, und der Build weist darauf hin:

```text
▲ the docs are not in a git repository: last-updated dates are skipped
```

Diese Warnung lässt einen Build nie scheitern, auch nicht mit `--strict`.

## Diese Seite bearbeiten

Mit `editURL` in der `clay.yaml` verlinkt jede Seite ihre Quelldatei, damit Leser einen Tippfehler in einer Minute beheben können:

```yaml
editURL: "https://github.com/meine-org/mein-projekt/edit/main/docs/"
```

Auf übersetzten Seiten führt der Link zur Übersetzung, in [älteren Versionen](../organizing/versions.md) nach `docs-archive/<name>/`.

## Vor und zurück

Das letzte Element jeder Seite verlinkt auf die vorherige und die nächste Seite, in der Reihenfolge der Seitenleiste, über Ordnergrenzen hinweg. So lässt sich die Dokumentation von vorne bis hinten lesen, ohne die Seitenleiste zu öffnen.
