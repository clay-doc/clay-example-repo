---
title: Befehle
icon: fa-solid fa-terminal
description: Jeder clay-Befehl und jede Option, von der Live-Vorschau über Bauen und Prüfen bis zum Bearbeiten und Speichern von Versionen.
---

# Befehle

Clay bedienst du über einen Befehl, `clay` (oder seinen Alias `clay-doc`), mit einem Unterbefehl:

```text
clay <befehl> [optionen]
```

| Befehl | Zweck |
|--------|-------|
| `clay dev` | Live-Vorschau beim Schreiben |
| `clay build` | Die statische Seite bauen |
| `clay preview` | Den Build so ausliefern, wie ein Webhoster es tun würde |
| `clay edit` | Reihenfolge, Titel, Icons und Einstellungen im Terminal bearbeiten |
| `clay version <name>` | Die aktuelle Dokumentation als ältere Version speichern |

Führe ihn mit `npx clay …` in einem Projekt aus, in dem Clay installiert ist, oder über Skripte in der `package.json`.

## clay dev

```bash
npx clay dev
```

Startet einen Entwicklungsserver unter [http://localhost:3000](http://localhost:3000). Er rendert jede Seite beim Öffnen und lädt den Browser neu, sobald du eine Seite, ein Bild oder die `clay.yaml` änderst. Nutze ihn beim Schreiben; er ist nicht dafür gedacht, online gestellt zu werden.

## clay build

```bash
npx clay build
```

Prüft die Dokumentation, rendert jede Seite als HTML und schreibt die fertige Seite nach `publish/public`. Währenddessen zeigt Clay seinen Fortschritt:

```text
┌  Clay 2.1.0
│
●  Loaded 29 pages from docs  languages de (29/29 translated) · 310ms
│
●  Built client  199 modules · 960ms
│
●  Built server  126 modules · 420ms
│
◝  Prerendering pages · 41 routes
```

Ohne Terminal, etwa in der CI, gibt es die fertigen Schritte als einfache Zeilen aus.

Der Build enthält:

| Pfad | Inhalt |
|------|--------|
| `index.html`, `guides/setup/index.html`, … | Eine HTML-Datei pro Seite |
| `404.html` | Die Seite für unbekannte Adressen |
| `docs/` | Deine Bilder und Dateien |
| `_nuxt/` | Skripte und Styles |
| `_clay/search.json` | Der Suchindex |
| `sitemap.xml`, `robots.txt` | Für Suchmaschinen, siehe [SEO](../features/seo.md) |

Die [Build-Prüfungen](build-checks.md) erklären die Warnungen und `--strict`.

## clay preview

```bash
npx clay preview
```

Liefert den letzten Build unter [http://localhost:4173](http://localhost:4173) aus und verhält sich dabei wie GitHub Pages und die meisten statischen Hoster:

- die Seite liegt unter ihrer `baseURL`,
- `/guides/setup` leitet auf `/guides/setup/` weiter,
- unbekannte Adressen bekommen die Seite `404.html` mit Status 404.

Führe ihn vor dem Veröffentlichen aus: Eine Seite, die in `clay preview` funktioniert, funktioniert auch beim Hoster.

## clay edit

```bash
npx clay edit
```

Öffnet einen Editor im Terminal, um Seiten und Ordner anzulegen, zu bearbeiten, zu ordnen, umzubenennen, zu verschieben, zu löschen und zu übersetzen, in jeder Version und Sprache, und um die Einstellungen in der `clay.yaml` zu bearbeiten. Siehe [clay edit](../organizing/clay-edit.md).

## clay version

```bash
npx clay version 2.x
```

Kopiert `docs/` nach `docs-archive/2.x/` und hält den aktuellen Stand der Dokumentation so als ältere Version fest. Siehe [Versionen](../versions-and-languages/versions.md).

## Optionen

| Option | Befehle | Standard | Zweck |
|--------|---------|----------|-------|
| `--root <dir>` | alle | aktueller Ordner | Der Projektordner mit `clay.yaml` und `docs/` |
| `--out <dir>` | build, preview | `<root>/publish` | Ausgabeordner; die Seite landet in `<out>/public` |
| `--port <port>` | dev, preview | `3000`, `4173` | Port des Servers |
| `--host` | dev, preview | aus | Auf allen Netzwerkschnittstellen lauschen, etwa um die Seite auf dem Smartphone zu öffnen |
| `--strict` | build | aus | Bei Warnungen scheitern, siehe [Build-Prüfungen](build-checks.md) |
| `--verbose` | build | aus | Die vollständige Ausgabe des Builds statt des Fortschritts zeigen |
| `-h`, `--help` | | | Die Hilfe zeigen |
| `-v`, `--version` | | | Clays Version zeigen |

Beispiele:

```bash
# Dokumentation in einem Unterordner eines größeren Repositorys
npx clay build --root documentation

# Nach dist/public bauen
npx clay build --out dist

# Vorschau auf einem anderen Port, erreichbar von anderen Geräten
npx clay preview --port 8080 --host
```
