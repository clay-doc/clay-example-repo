---
title: clay.yaml
icon: fa-solid fa-sliders
description: Referenz aller Einstellungen der clay.yaml, mit Standardwerten und einem vollständigen Beispiel.
---

# clay.yaml

Die `clay.yaml` liegt im Projektordner und konfiguriert die ganze Seite. Nur `title` ist Pflicht; alles andere hat einen sinnvollen Standardwert.

## Beispiele

::: tabs
== Minimal
```yaml
title: "Mein Projekt"
```
== GitHub Pages
```yaml
title: "Mein Projekt"
baseURL: "/mein-projekt/"
siteURL: "https://meine-org.github.io"
editURL: "https://github.com/meine-org/mein-projekt/edit/main/docs/"
```
== Vollständig
```yaml
title: "Mein Projekt"
favicon: "logo.svg"
baseURL: "/mein-projekt/"
siteURL: "https://meine-org.github.io"
editURL: "https://github.com/meine-org/mein-projekt/edit/main/docs/"
fontawesomeKit: "abc123def4"
version: "3.2"
languages: ["de", "en"]

navbar:
  logo: "logo.svg"
  source:
    name: "GitHub"
    icon: "fa-brands fa-github"
    link: "https://github.com/meine-org/mein-projekt"
  links:
    - name: "Website"
      icon: "fa-solid fa-house"
      link: "https://example.com"
    - name: "Changelog"
      icon: "fa-solid fa-list"
      link: "https://github.com/meine-org/mein-projekt/releases"

messages:
  de:
    search: "Durchsuchen"
```
:::

## Seite

| Einstellung | Standard | Zweck |
|-------------|----------|-------|
| `title` | Pflicht | Name der Seite: Navigationsleiste, Browser-Tab, Suchergebnisse |
| `favicon` | keins | Pfad zum Favicon, relativ zum Projektordner |
| `baseURL` | `/` | Pfad, unter dem die Seite liegt, z. B. `/mein-projekt/` für Projektseiten auf GitHub |
| `siteURL` | keine | Ursprung der Seite, z. B. `https://meine-org.github.io`; ermöglicht kanonische URLs, die Sitemap, strukturierte Daten und volle Adressen in der `llms.txt` |
| `lang` | `en` | Sprache einer einsprachigen Seite: `<html lang>`, Datumsformate, Texte der Oberfläche |
| `editURL` | keine | Basis-URL zum Bearbeiten einer Seite; der Dateipfad der Seite wird angehängt |
| `fontawesomeKit` | keins | ID eines Font-Awesome-Kits; ohne werden die kostenlosen Icons genutzt |

### baseURL und siteURL

Zusammen ergeben sie die vollständige Adresse der Seite. Für `https://meine-org.github.io/mein-projekt/`:

```yaml
siteURL: "https://meine-org.github.io"
baseURL: "/mein-projekt/"
```

`baseURL` brauchst du immer dann, wenn die Seite nicht an der Wurzel ihrer Domain liegt; Links, Bilder und alle weiteren Dateien hängen davon ab. `siteURL` ist nur der Ursprung: Ein Pfad darin wird ignoriert, der Pfad kommt immer aus `baseURL`. Was `siteURL` ermöglicht, steht unter [SEO](../features/seo.md).

### editURL

Mit `editURL` zeigt jede Seite einen Link **Diese Seite bearbeiten**. Lass ihn auf den `docs/`-Ordner deines Repositorys zeigen; Clay hängt die Datei der Seite an:

```yaml
editURL: "https://github.com/meine-org/mein-projekt/edit/main/docs/"
```

Die Seite `docs/guides/setup.md` verlinkt dann auf `…/edit/main/docs/guides/setup.md`. Das funktioniert mit GitHub, GitLab, Gitea und jedem Hoster mit ähnlichem URL-Schema. Endet die URL auf `docs/`, verlinken Seiten [älterer Versionen](../organizing/versions.md) nach `docs-archive/<name>/`.

## Navigationsleiste

| Einstellung | Standard | Zweck |
|-------------|----------|-------|
| `navbar.logo` | keins | Bild neben dem Titel der Seite |
| `navbar.source.name`, `.icon`, `.link` | keine | Ein Link, meist zum Repository, als Icon mit dem Namen als Tooltip |
| `navbar.links` | keine | Weitere Links wie der Quellcode-Link, daneben; jeder hat `name`, `icon` und `link` |

Logo und Favicon können Dateien im Projektordner sein (Clay kopiert sie in die Seite) oder vollständige URLs.

## Startseite

Die Startseite wird hier nicht eingestellt: Sie ist `docs/index.md`, eine Markdown-Seite mit optionaler Seitenliste und einer großen Kopfzeile. Siehe [Indexseiten](../organizing/index-pages.md).

## Versionen und Sprachen

| Einstellung | Standard | Zweck |
|-------------|----------|-------|
| `version` | `Latest` | Bezeichnung von `docs/` im Versionsumschalter |
| `languages` | `[lang]` | Sprachcodes der Seite; der erste ist die Standardsprache |
| `messages` | keine | Eigene Texte der Oberfläche, pro Sprache |

Siehe [Versionen](../organizing/versions.md) und [Übersetzungen](../organizing/translations.md).

## Werte pro Sprache

Auf einer mehrsprachigen Seite kann jede Texteinstellung einen Wert pro Sprache haben. Sprachen ohne Wert nutzen den der Standardsprache:

```yaml
title:
  de: "Mein Projekt"
  en: "My Project"
navbar:
  links:
    - name: { de: "Webseite", en: "Website" }
      icon: "fa-solid fa-house"
      link: "https://example.com"
```

## Prüfungen

Clay prüft die `clay.yaml` bei jedem Build und warnt vor:

- unbekannten Einstellungen, meist Tippfehlern: `clay.yaml: unknown key "navbar.lgo" is ignored (typo?)`,
- einem fehlenden `title`,
- `langs`, einer Einstellung aus Clay 1, die nicht mehr nötig ist,
- `index`, `dir-meta.yaml` und `versions/` aus Clay 2, siehe [Umstieg auf Clay 3](../guides/upgrading-to-clay-3.md).

Mit `--strict` lassen diese Warnungen den Build scheitern. Siehe [Build-Prüfungen](../publishing/build-checks.md).

> [!TIP]
> Einstellungen wie `baseURL` oder `title` lassen sich in der CI überschreiben, ohne die Datei zu ändern, siehe [Umgebungsvariablen](environment-variables.md). Und `clay edit` bearbeitet all diese Einstellungen im Terminal, siehe [clay edit](../organizing/clay-edit.md).
