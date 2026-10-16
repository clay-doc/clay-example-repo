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
```yaml [clay.yaml]
title: "Mein Projekt"
```
== GitHub Pages
```yaml [clay.yaml]
title: "Mein Projekt"
baseURL: "/mein-projekt/"
siteURL: "https://meine-org.github.io"
editURL: "https://github.com/meine-org/mein-projekt/edit/main/docs/"
```
== Vollständig
```yaml [clay.yaml]
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

variables:
  major: "4"

head:
  meta:
    - name: "google-site-verification"
      content: "abc123"
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
| `socialImages` | `true` mit `siteURL` | Ein Bild je Seite für Link-Vorschauen; `false` schaltet sie ab, siehe [SEO](../features/seo.md#vorschaubilder) |
| `pageActions` | alle sichtbar | Einträge des Seitenmenüs: `copyMarkdown`, `openMarkdown`, `chatgpt`, `claude`; `false` blendet einen aus, siehe [das Seitenmenü](../features/ai-and-agents.md#das-seitenmenü) |

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

Die Seite `docs/guides/setup.md` verlinkt dann auf `…/edit/main/docs/guides/setup.md`. Das funktioniert mit GitHub, GitLab, Gitea und jedem Hoster mit ähnlichem URL-Schema. Mit [Versionen](../organizing/versions.md) verlinken Seiten in den Ordner ihrer Version, `docs/latest/` oder `docs/<name>/`, solange die URL auf `docs/` endet.

## Navigationsleiste

| Einstellung | Standard | Zweck |
|-------------|----------|-------|
| `navbar.logo` | keins | Bild neben dem Titel der Seite |
| `navbar.source.name`, `.icon`, `.link` | keine | Ein Link, meist zum Repository, als Icon mit dem Namen als Tooltip |
| `navbar.links` | keine | Weitere Links wie der Quellcode-Link, daneben; jeder hat `name`, `icon` und `link` |

Logo und Favicon können Dateien im Projektordner sein (Clay kopiert sie in die Seite) oder vollständige URLs.

## Variablen

`variables` legt Werte fest, die Seiten mit `\{{name}}` einsetzen, etwa die aktuelle Version. Siehe [Snippets & Variablen](../writing/snippets-and-variables.md).

```yaml
variables:
  major: "4"
  node: "20.19"
```

## Generate

`generate` führt vor jedem Build Befehle aus, die Seiten in `docs/` schreiben, etwa eine API-Referenz aus deinem Code. Siehe [generierte Dokumentation](../writing/generated-docs.md).

```yaml
generate:
  - npx typedoc --plugin typedoc-plugin-markdown --entryFileName index --out docs/api src/index.ts
```

## Head

`head` fügt jeder Seite Tags im `<head>` hinzu: das Skript eines Chat-Widgets, eine Bestätigung für die Google Search Console, eine Schrift. Jeder Eintrag sind die Attribute des Tags; den Code eines Skripts nimmt `code` auf.

```yaml
head:
  script:
    - src: "https://widget.example.com/chat.js"
      async: true
    - code: "window.chatSettings = {position: 'right'}"
  link:
    - rel: "preconnect"
      href: "https://fonts.example.com"
  meta:
    - name: "google-site-verification"
      content: "abc123"
```

Wie jeder Text können die Werte je Sprache verschieden sein. Die `clay.yaml` gehört zum Projekt: Skripte darin laufen auf jeder Seite, prüf sie also wie Code.

## Startseite

Die Startseite wird hier nicht eingestellt: Sie ist `docs/index.md`, eine Markdown-Seite mit optionaler Seitenliste und einer großen Kopfzeile. Siehe [Indexseiten](../organizing/index-pages.md).

## Versionen und Sprachen

| Einstellung | Standard | Zweck |
|-------------|----------|-------|
| `version` | `Latest` | Bezeichnung von `docs/` im Versionsumschalter |
| `languages` | `[lang]` | Sprachcodes der Seite; der erste ist die Standardsprache |
| `messages` | keine | Eigene Texte der Oberfläche, pro Sprache |

Siehe [Versionen](../organizing/versions.md) und [Übersetzungen](../organizing/translations.md).

## Theme und Analytics

`theme` setzt eigene Farben, Ecken und Schriften, siehe [Designs & Icons](../features/themes-and-icons.md#eigene-farben-und-schriften). `analytics` zählt Seitenaufrufe ohne Cookies, mit Plausible, Umami oder GoatCounter, siehe [Analytics](../features/analytics.md).

```yaml
theme:
  primary: "#2563eb"
  font: "Lora, serif"
analytics:
  plausible: {}
```

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

## Einstellungen in eigenen Dateien :badge[Neu in Clay 4]{tip}

Eine Einstellung kann eine YAML-Datei nennen, die ihren Wert enthält, relativ zur `clay.yaml`:

```yaml [clay.yaml]
title: "Mein Projekt"
siteURL: "https://meine-org.github.io"
navbar: config/navbar.yaml
variables: config/variables.yaml
head: config/head.yaml
```

Das funktioniert für `navbar`, `messages`, `variables`, `head`, `analytics`, `theme`, `generate` und `languages`. Die Dateien werden geprüft wie die `clay.yaml` selbst, und `clay dev` lädt neu, wenn sie sich ändern.

**Wann aufteilen.** Halte die `clay.yaml` als den einen Ort, an dem man die Seite auf einen Blick versteht: Titel, Adressen, Sprachen. Verschiebe eine Einstellung in eine eigene Datei, wenn sie lang ist oder jemand oder etwas anderes sie pflegt:

- `variables`, wenn ein Release-Skript die Version schreibt, damit es die `clay.yaml` nie anfasst,
- `messages`, wenn Übersetzer die Texte der Oberfläche betreuen,
- `head`, wenn sich Skripte und Bestätigungen häufen,
- `navbar`, wenn es viele Links sind.

Kurze Einstellungen findet man am leichtesten, wo sie sind; eine Seite mit einer Handvoll Einstellungen braucht keine Aufteilung. Diese Website hält ihre Oberflächentexte in [`config/messages.yaml`](https://github.com/clay-doc/clay-example-repo/blob/main/config/messages.yaml).

> [!NOTE]
> `clay edit` ändert Einstellungen in der `clay.yaml` selbst. Einstellungen in eigenen Dateien bearbeitest du in diesen Dateien.

## Prüfungen

Clay prüft die `clay.yaml` bei jedem Build und warnt vor:

- unbekannten Einstellungen, meist Tippfehlern: `clay.yaml: unknown key "navbar.lgo" is ignored (typo?)`,
- einem fehlenden `title`,
- `langs`, einer Einstellung aus Clay 1, die nicht mehr nötig ist,
- `index`, `dir-meta.yaml` und `versions/` aus Clay 2, siehe [Umstieg auf Clay 3](../guides/upgrading-to-clay-3.md).

Mit `--strict` lassen diese Warnungen den Build scheitern. Siehe [Build-Prüfungen](../publishing/build-checks.md).

> [!TIP]
> Einstellungen wie `baseURL` oder `title` lassen sich in der CI überschreiben, ohne die Datei zu ändern, siehe [Umgebungsvariablen](environment-variables.md). Und `clay edit` bearbeitet all diese Einstellungen im Terminal, siehe [clay edit](../organizing/clay-edit.md).
