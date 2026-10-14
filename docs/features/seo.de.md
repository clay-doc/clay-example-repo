---
title: SEO
icon: fa-solid fa-chart-line
description: Titel, Beschreibungen, kanonische URLs, Open-Graph-Tags, strukturierte Daten und eine Sitemap, die Clay für Suchmaschinen erzeugt.
---

# SEO

Clay bereitet jede Seite von sich aus für Suchmaschinen und Link-Vorschauen vor. Jede Seite wird vorab als vollständiges HTML gerendert, Crawler sehen also den ganzen Inhalt, ohne JavaScript auszuführen.

## Was jede Seite bekommt

| Tag | Inhalt |
|-----|--------|
| `<title>` | Seitentitel und Titel der Seite: „Suche · Clay" |
| `<meta name="description">` | Die Beschreibung der Seite, siehe unten |
| `og:title`, `og:description`, `og:type`, `og:site_name` | Dasselbe für Link-Vorschauen in Chats und sozialen Netzwerken |
| `<html lang>` | Die Sprache der Seite |
| `article:modified_time` | Das Datum der letzten Änderung, aus Git |

Mit `siteURL` bekommen Seiten außerdem:

| Tag | Inhalt |
|-----|--------|
| `<link rel="canonical">` | Die vollständige Adresse der Seite, damit Suchmaschinen wissen, welche URL sie zeigen sollen |
| `og:url` | Dasselbe für Link-Vorschauen |
| Brotkrumen (JSON-LD) | Wo die Seite liegt, in Suchergebnissen als „Clay › Funktionen › SEO" |
| `hreflang`-Links | Die [Übersetzungen](../versions-and-languages/translations.md) der Seite |

## Beschreibungen

Die Beschreibung ist der kurze Text, den Suchmaschinen unter einem Ergebnis zeigen. Clay nimmt das Erste davon:

1. `description` im [Front Matter](../writing/pages.md#front-matter) der Seite,
2. den ersten Absatz der Seite,
3. `index.description` aus der `clay.yaml`.

Sie wird an einer Wortgrenze auf 160 Zeichen gekürzt. Eine gute Beschreibung sagt in ein, zwei Sätzen, welche Frage die Seite beantwortet:

```markdown
---
description: Veröffentliche eine Clay-Seite auf GitHub Pages, mit einem Workflow, der bei jedem Push baut.
---
```

## Sitemap und robots.txt

Mit `siteURL` schreibt Clay eine `sitemap.xml` mit jeder Seite und dem Datum ihrer letzten Änderung, und eine `robots.txt`, die darauf verweist.

```yaml
siteURL: "https://meine-org.github.io"
baseURL: "/mein-projekt/"
```

Die Sitemap liegt dann unter `https://meine-org.github.io/mein-projekt/sitemap.xml`. Reiche sie in der [Google Search Console](https://search.google.com/search-console) und den [Bing Webmaster Tools](https://www.bing.com/webmasters) ein.

> [!NOTE]
> Suchmaschinen lesen die `robots.txt` nur an der Wurzel einer Domain. Liegt deine Seite unter einem Pfad, ist ihre `robots.txt` nur informativ; reiche die Sitemap stattdessen in den genannten Werkzeugen ein.

## Versionen und Übersetzungen

- Seiten [älterer Versionen](../versions-and-languages/versions.md) sind normale Seiten mit eigenen URLs und Einträgen in der Sitemap.
- Eine noch nicht übersetzte Seite zeigt in der anderen Sprache den Originaltext. Ihr kanonischer Link zeigt auf das Original, und sie fehlt in der Sitemap, damit Suchmaschinen keine doppelten Inhalte sehen.
