---
title: Einführung
icon: fa-solid fa-house
description: Was Clay ist, was es für dich erledigt und wie eine Clay-Seite entsteht.
---

# Einführung

Clay macht aus einem Ordner voller Markdown-Dateien eine schnelle, durchsuchbare Dokumentationsseite. Du schreibst Seiten in Markdown, beschreibst deine Seite in einer kleinen Konfigurationsdatei, und Clay baut daraus eine statische Website, die du überall hosten kannst: auf GitHub Pages, Netlify, Cloudflare Pages oder jedem Webserver.

Diese Website ist selbst eine Clay-Seite. Jede Seite, die du hier liest, ist eine Markdown-Datei im [Beispiel-Repository](https://github.com/clay-doc/clay-example-repo), und das Repository dient gleichzeitig als Vorlage zum Abschauen.

## Was du bekommst

| Funktion | Was sie deinen Lesern bringt |
|----------|------------------------------|
| Navigation | Eine Seitenleiste aus deinen Ordnern, Brotkrumen und Links zur vorherigen und nächsten Seite |
| Suche | Volltextsuche über alle Seiten und Abschnitte, mit Tippfehlertoleranz und markierten Treffern |
| Code | Syntaxhervorhebung für über 200 Sprachen, hervorgehobene Zeilen, Diffs und ein Kopier-Button |
| Schnelle Seiten | Jede Seite wird vorab als HTML gerendert, lädt sofort und funktioniert ohne JavaScript |
| Suchmaschinen | Titel, Beschreibungen, kanonische Links, eine Sitemap und strukturierte Daten, ohne Aufwand |
| Hell und dunkel | Folgt der Systemeinstellung der Leser, mit einem Schalter, der sich die Wahl merkt |
| Versionen | Die Dokumentation älterer Releases bleibt online, mit einem Versionsumschalter |
| Sprachen | Übersetze Seite für Seite; nicht übersetzte Seiten zeigen das Original |
| Smartphones | Ein Layout für kleine Bildschirme, mit einer ausklappbaren Navigation |

## So funktioniert es

Ein Clay-Projekt ist ein Ordner mit einer Konfigurationsdatei und deiner Dokumentation:

```text
mein-projekt/
├── clay.yaml        # Titel und Links
└── docs/            # deine Markdown-Seiten, Bilder und Dateien
    └── index.md     # optional: die Startseite
```

Du arbeitest mit drei Befehlen:

```bash
npx clay dev       # Live-Vorschau beim Schreiben
npx clay build     # die statische Seite nach publish/public bauen
npx clay preview   # den Build so prüfen, wie ein Webhoster ihn ausliefert
```

Clay ist ein einziges npm-Paket, `clay-doc`. Es baut auf [Nuxt](https://nuxt.com) und [Vue](https://vuejs.org) auf, aber mit beidem musst du nie in Berührung kommen: Es gibt kein Theme einzurichten und keinen Code zu schreiben.

## Wie es weitergeht

- Neu bei Clay? Beginne mit der [Installation](getting-started/installation.md) und dem [Schnellstart](getting-started/quick-start.md).
- Du schreibst Seiten? Sieh dir [Seiten](writing/pages.md), [Markdown](writing/markdown.md) und [Codeblöcke](writing/code-blocks.md) an.
- Du richtest eine Seite ein? Die [clay.yaml-Referenz](configuration/clay-yaml.md) listet jede Einstellung.
- Du willst veröffentlichen? Folge [GitHub Pages](deployment/github-pages.md) oder [anderen Hostern](deployment/other-hosts.md).
- Du kommst von Clay 1 und Clay Oven? Lies [Umstieg von Clay 1](guides/migrating-from-clay-1.md).
