---
title: Ordner
icon: fa-solid fa-folder-open
description: Seiten in Ordnern gruppieren und Ordnern mit der dir-meta.yaml Namen, Icons und eine Reihenfolge geben.
---

# Ordner

Ordner in `docs/` werden zu Abschnitten der Navigation. Ohne weitere Einstellungen heißt ein Ordner wie sein Ordnername: `getting-started` wird zu „Getting started", mit einem Ordner-Icon.

## Namen, Icons und Reihenfolge

Die `dir-meta.yaml` neben der `clay.yaml` beschreibt Ordner. Jeder Eintrag nennt einen Ordner über `path` und legt fest, was er zeigt:

```yaml
- path: "getting-started"
  name: "Erste Schritte"
  icon: "fa-solid fa-rocket"
  order: 1

- path: "guides"
  name: "Anleitungen"
  icon: "fa-solid fa-book-open"
  order: 2
```

| Feld | Standard | Zweck |
|------|----------|-------|
| `path` | Pflicht | Name des Ordners in `docs/` (nur der Name, kein Pfad) |
| `name` | Ordnername, aufbereitet | Name in Seitenleiste, Brotkrumen und Suche |
| `icon` | `fa-solid fa-folder` | [Font-Awesome](../features/themes-and-icons.md)-Icon |
| `order` | keiner | Position zwischen den Seiten und Ordnern daneben |
| `children` | keine | Einträge für die Unterordner |

## Unterordner

Unterordner beschreibst du in `children` des Eintrags ihres Elternordners, so tief deine Ordner gehen:

```yaml
- path: "guides"
  name: "Anleitungen"
  icon: "fa-solid fa-book-open"
  children:
    - path: "advanced"
      name: "Für Fortgeschrittene"
      icon: "fa-solid fa-graduation-cap"
      children:
        - path: "performance"
          name: "Performance"
```

Ein Ordner ohne Eintrag gibt die Suche weiter: Seine Unterordner werden in derselben Liste gesucht wie er selbst. Du brauchst also nur Einträge für die Ordner, die du ändern möchtest.

## Namen in mehreren Sprachen

Auf einer [mehrsprachigen Seite](../versions-and-languages/translations.md) gibst du `name` einen Wert pro Sprache:

```yaml
- path: "guides"
  name:
    en: "Guides"
    de: "Anleitungen"
```

Sprachen ohne Wert nutzen den Namen der Standardsprache.

## Ordnerseiten

Jeder Ordner hat eine Seite, die seine Seiten und Unterordner als Kacheln zeigt, siehe [Navigation](navigation.md#ordnerseiten).

> [!TIP]
> Die `dir-meta.yaml` wird bei jedem Build geprüft: Ein falsch geschriebenes Feld wie `ordre` oder `icons` wird als Warnung gemeldet. Die Referenz findest du unter [dir-meta.yaml](../configuration/dir-meta-yaml.md).
