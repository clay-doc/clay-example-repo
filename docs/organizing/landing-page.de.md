---
title: Startseite
icon: fa-solid fa-flag-checkered
description: Richte die Startseite deiner Seite mit Titel, Beschreibung und Icon ein.
---

# Startseite

Die Startseite ist das Erste, was Besucher an der Wurzel deiner Seite sehen. Sie zeigt einen großen Titel, eine kurze Beschreibung und eine Kachel für jede Seite und jeden Ordner der obersten Ebene, in der Reihenfolge der Navigation.

Du richtest sie im Abschnitt `index` der `clay.yaml` ein:

```yaml
title: "Mein Projekt"
index:
  title: "Willkommen bei Mein Projekt"
  description: "Alles, was du zum Installieren, Konfigurieren und Betreiben von Mein Projekt brauchst."
  icon: "fa-solid fa-rocket"
```

| Feld | Standard | Zweck |
|------|----------|-------|
| `index.title` | der `title` der Seite | Die große Überschrift |
| `index.description` | keine | Der Text unter der Überschrift |
| `index.icon` | keins | Ein Icon vor der Überschrift |

Die Beschreibung hat eine zweite Aufgabe: Sie ist die Zusammenfassung der Startseite für Suchmaschinen und Link-Vorschauen, und die Ersatzbeschreibung für Seiten ohne eigene. Siehe [SEO](../features/seo.md).

## Auf mehrsprachigen Seiten

Gib jedem Feld einen Wert pro Sprache:

```yaml
index:
  title:
    en: "Welcome to My Project"
    de: "Willkommen bei Mein Projekt"
  description:
    en: "Everything you need to know."
    de: "Alles, was du wissen musst."
```

Jede Sprache hat ihre eigene Startseite: `/` für die Standardsprache, `/de` für Deutsch und so weiter. Siehe [Übersetzungen](../versions-and-languages/translations.md).

> [!TIP]
> Die Kacheln der Startseite sind die oberste Ebene deiner Dokumentation. Halte sie kurz, fünf bis acht Einträge, und fasse den Rest in Ordnern zusammen.
