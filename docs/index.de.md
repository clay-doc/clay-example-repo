---
title: Clay-Dokumentation
icon: fa-solid fa-book-open
description: Mach aus einem Ordner voller Markdown-Dateien eine schnelle, durchsuchbare Dokumentationsseite. Alles, was du zum Schreiben, Ordnen und Veröffentlichen mit Clay brauchst.
hero: true
list: true
---

Clay macht aus einem Ordner voller Markdown-Dateien eine Dokumentationsseite: eine Seitenleiste aus deinen Ordnern, Volltextsuche, Syntaxhervorhebung, helles und dunkles Design, Versionen und Übersetzungen. Du schreibst die Seiten; um den Rest kümmert sich Clay.

## In einer Minute starten

```bash
npm init -y
npm install --save-dev clay-doc
echo 'title: "My Project"' > clay.yaml
mkdir docs && echo '# Hallo, Clay' > docs/index.md
npx clay dev
```

Öffne [http://localhost:3000](http://localhost:3000); jede Änderung, die du speicherst, erscheint sofort. Der [Schnellstart](getting-started/quick-start.md) führt von dort aus weiter.

## Warum Clay

- **Markdown rein, Website raus.** Seiten sind Markdown-Dateien in `docs/`, Ordner werden zur Navigation. Keine Templates, kein Theme zum Bauen.
- **Suche inklusive.** Jede Seite und jeder Abschnitt ist durchsuchbar, auch mit Tippfehlern, mit <kbd>Strg</kbd> + <kbd>K</kbd> oder <kbd>⌘</kbd> + <kbd>K</kbd>.
- **Überall schnell.** Jede Seite wird vorab als HTML gerendert. Veröffentliche sie auf GitHub Pages, Netlify oder jedem Webserver.
- **Bei jedem Build geprüft.** Kaputte Links und unbekannte Einstellungen werden gemeldet, und `--strict` stoppt ein Deployment, das welche hat.
- **Versionen und Sprachen.** Halte die Dokumentation älterer Releases online und übersetze Seite für Seite.
- **Ordnen im Terminal.** `clay edit` legt Seiten an, ordnet, benennt und übersetzt sie, ohne dass du Front Matter von Hand anfasst.

## Finde deinen Weg

| Ich will … | Fang an mit |
|------------|-------------|
| Sehen, was Clay ist und wie eine Seite entsteht | [Einführung](introduction.md) |
| Eine erste Seite bauen, Schritt für Schritt | [Schnellstart](getting-started/quick-start.md) |
| Seiten mit Code, Hinweisen, Links und Bildern schreiben | [Schreiben](writing/index.md) |
| Seiten und Ordner anordnen | [Ordnen](organizing/index.md) |
| Eine Einstellung nachschlagen | [Konfiguration](configuration/index.md) |
| Die Seite online stellen | [Veröffentlichen](deployment/index.md) |
| Eine Clay-3-Seite auf Clay 4 umstellen | [Umstieg auf Clay 4](guides/upgrading-to-clay-4.md) |

> [!TIP]
> Diese Website ist eine Clay-Seite. Jede Seite ist eine Markdown-Datei im [Beispiel-Repository](https://github.com/clay-doc/clay-example-repo): Sieh dir an, wie sie gemacht ist, oder kopiere sie als Ausgangspunkt.
