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
| `hreflang`-Links | Die [Übersetzungen](../organizing/translations.md) der Seite |
| `og:image`, `twitter:card` | Das [Vorschaubild](#vorschaubilder) der Seite |

## Beschreibungen

Die Beschreibung ist der kurze Text, den Suchmaschinen unter einem Ergebnis zeigen. Clay nimmt das Erste davon:

1. `description` im [Front Matter](../writing/pages.md#front-matter) der Seite,
2. den ersten Absatz der Seite,
3. die Beschreibung der Startseite, `docs/index.md`.

Sie wird an einer Wortgrenze auf 160 Zeichen gekürzt. Eine gute Beschreibung sagt in ein, zwei Sätzen, welche Frage die Seite beantwortet:

```markdown
---
description: Veröffentliche eine Clay-Seite auf GitHub Pages, mit einem Workflow, der bei jedem Push baut.
---
```

Fehlende Beschreibungen kann ein Coding-Agent schreiben:

::: prompt
Lies https://clay-doc.github.io/clay-example-repo/de/features/seo.md. Gib dann jeder
Seite in docs/ ohne Beschreibung eine: ein, zwei Sätze, höchstens 160 Zeichen,
die sagen, welche Frage die Seite beantwortet. Finde die Seiten mit
`npx clay edit list --json` und setze die Beschreibungen mit `npx clay edit set`.
:::

## Vorschaubilder :badge[Neu in Clay 4]{tip}

Ein Link auf eine Seite, geteilt in einem Chat oder einem sozialen Netzwerk, zeigt ein Bild von ihr: Logo und Titel der Seite, den Bereich, den Titel der Seite und ihre Beschreibung, in den Farben des dunklen Designs.

![Das Vorschaubild der Anleitung zu GitHub Pages](https://clay-doc.github.io/clay-example-repo/_clay/social/de/publishing/github-pages.png)

Clay zeichnet sie beim Bauen der Seite, eines für jede Seite, unter `/_clay/social/<seite>.png`. Sie brauchen `siteURL`, denn Link-Vorschauen laden Bilder nur über ihre volle Adresse. Ohne sie bauen:

```yaml [clay.yaml]
socialImages: false
```

- **Jede Schrift, und Emoji.** Clay bringt die Schrift für lateinische, griechische und kyrillische Buchstaben mit. Für andere Schriften, etwa Arabisch, Hebräisch, Hindi, Thai, Chinesisch, Japanisch oder Koreanisch, und für Emoji holt der Build nur die Buchstaben, die die Bilder brauchen, einmal von Google Fonts und legt sie in `node_modules/.cache` ab; Leser kontaktieren Google nie. Seiten, die von rechts nach links geschrieben werden, bekommen ein gespiegeltes Bild.
- **Ohne Verbindung** bleiben Texte, deren Schriften nicht geladen werden konnten, von ihren Bildern weg, und der nächste Build versucht es erneut.
- **Das Zeichnen geht schnell**, Dutzende Seiten pro Sekunde, und Clay legt die Bilder im Cache ab: Es zeichnet sie nur neu, wenn sich Titel oder Beschreibung einer Seite ändern.
- **Skia zeichnet sie**, die Grafik-Engine von Chrome, über ein Paket, das fertig gebaut für macOS, Linux und Windows kommt. Auf einer Plattform ohne Build davon baut Clay die Seite ohne Vorschaubilder und sagt das.

## Sitemap und robots.txt

Mit `siteURL` schreibt Clay eine `sitemap.xml` mit jeder Seite und dem Datum ihrer letzten Änderung, und eine `robots.txt`, die darauf verweist, und auf die [`llms.txt`](ai-and-agents.md#llmstxt) für Sprachmodelle.

```yaml [clay.yaml]
siteURL: "https://meine-org.github.io"
baseURL: "/mein-projekt/"
```

Die Sitemap liegt dann unter `https://meine-org.github.io/mein-projekt/sitemap.xml`. Reiche sie in der [Google Search Console](https://search.google.com/search-console) und den [Bing Webmaster Tools](https://www.bing.com/webmasters) ein.

### Seiten unter einem Pfad

Suchmaschinen lesen die `robots.txt` nur an der Wurzel einer Domain, etwa `https://meine-org.github.io/robots.txt`. Eine Seite unter einem Pfad wie `/mein-projekt/` kann dort keine ablegen, Suchmaschinen erfahren über sie also nichts von ihrer Sitemap. Clay hilft auf drei Arten:

- **`clay build` erinnert dich.** Mit `siteURL` und einer `baseURL` außer `/` zeigt der Build die Adresse der Sitemap zum Einreichen:

  ```text
  ●  Loaded 42 pages from docs
  │  ℹ robots.txt only counts at the root of a domain; submit https://meine-org.github.io/mein-projekt/sitemap.xml in Google Search Console and Bing Webmaster Tools
  ```

- **Jede Seite verweist auf die Sitemap** in ihrem Kopf (`<link rel="sitemap">`), für Werkzeuge, die dort danach suchen.
- **Suchmaschinen finden deine Seiten trotzdem**, indem sie Links folgen; die Sitemap macht es schneller und vollständig.

Reiche die Sitemap einmal in der [Google Search Console](https://search.google.com/search-console) und den [Bing Webmaster Tools](https://www.bing.com/webmasters) ein. Gehört dir die Seite an der Wurzel, etwa das Repository `meine-org.github.io`, kannst du stattdessen eine Zeile in deren `robots.txt` ergänzen: `Sitemap: https://meine-org.github.io/mein-projekt/sitemap.xml`. Mit [eigener Domain](../publishing/github-pages.md) liegt die Seite an der Wurzel, und ihre `robots.txt` wirkt, wie sie ist.

## Versionen und Übersetzungen

- Seiten [älterer Versionen](../organizing/versions.md) sind normale Seiten mit eigenen URLs und Einträgen in der Sitemap.
- Eine noch nicht übersetzte Seite zeigt in der anderen Sprache den Originaltext. Ihr kanonischer Link zeigt auf das Original, und sie fehlt in der Sitemap, damit Suchmaschinen keine doppelten Inhalte sehen.
