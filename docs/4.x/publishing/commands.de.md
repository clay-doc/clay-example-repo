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
| `clay edit` | Seiten, Ordner und Einstellungen bearbeiten: in einem Editor im Terminal oder Befehl für Befehl |
| `clay check` | Links und Einstellungen prüfen, ohne zu bauen |
| `clay version <name>` | Die aktuelle Dokumentation als ältere Version speichern |

Führe ihn mit `npx clay …` in einem Projekt aus, in dem Clay installiert ist, oder über Skripte in der `package.json`. Jede Option jedes Befehls steht in der [CLI-Referenz](cli-reference.md).

## clay dev

```bash
npx clay dev
```

Startet einen Entwicklungsserver unter [http://localhost:3000](http://localhost:3000). Er rendert jede Seite beim Öffnen und lädt den Browser neu, sobald du eine Seite, ein Bild oder die `clay.yaml` änderst. Nutze ihn beim Schreiben; er ist nicht dafür gedacht, online gestellt zu werden.

Während er läuft, zeigt das Terminal die Adresse, Warnungen wie kaputte Links und jede Seite, die er neu lädt:

```text
┌  Clay 4.0.0 · dev
│
●  Loaded 40 pages from docs  languages de (30/30 translated) · 52ms
│
●  Started dev server  1.1s
│  ➜ Local:   http://localhost:3000/
│  ➜ Network: use --host to expose
│
│  ↻ Reloaded docs/writing/pages.md  10:24:31
```

`--verbose` zeigt stattdessen die vollständige Ausgabe von Nuxt.

## clay build

```bash
npx clay build
```

Prüft die Dokumentation, rendert jede Seite als HTML und schreibt die fertige Seite nach `publish/public`. Währenddessen zeigt Clay seinen Fortschritt:

```text
┌  Clay 4.0.0
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

```tree
publish/public/
  index.html             # eine HTML-Datei pro Seite
  guides/
    setup/
      index.html
  404.html               # die Seite für unbekannte Adressen
  docs/                  # deine Bilder und Dateien
  _nuxt/                 # Skripte und Styles
  _clay/
    search.json          # der Suchindex
  sitemap.xml            # für Suchmaschinen, siehe SEO
  robots.txt
  llms.txt               # für Sprachmodelle, siehe KI & Agenten
  llms-full.txt
  guides/setup.md        # jede Seite als Markdown
```

Zu Sitemap und `robots.txt` siehe [SEO](../features/seo.md), zu `llms.txt` und dem Markdown jeder Seite [KI & Agenten](../features/ai-and-agents.md).

Die [Build-Prüfungen](build-checks.md) erklären die Warnungen und `--strict`.

## clay preview

```bash
npx clay preview
```

Liefert den letzten Build unter [http://localhost:4173](http://localhost:4173) aus und verhält sich dabei wie GitHub Pages und die meisten statischen Hoster:

- die Seite liegt unter ihrer `baseURL`,
- `/guides/setup` leitet auf `/guides/setup/` weiter,
- unbekannte Adressen bekommen die Seite `404.html` mit Status 404.

Führe ihn vor dem Veröffentlichen aus: Eine Seite, die in `clay preview` funktioniert, funktioniert auch beim Hoster. Das Terminal listet jede Adresse, die eine 404 bekam; das deutet auf eine fehlende Datei oder eine falsche `baseURL` hin.

## clay edit

```bash
npx clay edit
```

Öffnet einen Editor im Terminal, um Seiten und Ordner anzulegen, zu bearbeiten, zu ordnen, umzubenennen, zu verschieben, zu löschen und zu übersetzen, in jeder Version und Sprache, und um die Einstellungen in der `clay.yaml` zu bearbeiten. Siehe [clay edit](../organizing/clay-edit.md).

Mit einem Befehl macht es eine Änderung und beendet sich, für Skripte und KI-Agenten:

```bash
npx clay edit set guides/setup.md title="Einrichtung" order=2
npx clay edit help    # jeder Befehl, mit Beispielen
```

Siehe [aus Skripten und für KI-Agenten](../organizing/clay-edit.md#aus-skripten-und-für-ki-agenten).

## clay check :badge[Neu in Clay 4]{tip}

```bash
npx clay check
```

Führt die [Build-Prüfungen](build-checks.md) aus, kaputte Links, Einstellungen, Übersetzungen und Versionen, ohne die Seite zu bauen. Es dauert eine Sekunde und endet mit 1, wenn es ein Problem findet; es passt also für einen schnellen Blick nach einer Änderung, für Pre-Commit-Hooks und für Agenten. Mit `--json` gibt es `{"ok": …, "pages": …, "problems": [...]}` aus.

## clay version

```bash
npx clay version 2.x
```

Kopiert `docs/latest/` nach `docs/2.x/` und hält die neueste Dokumentation so als ältere Version fest. Solange die Seiten direkt in `docs/` liegen, verschiebt es sie zuerst nach `docs/latest/`: Es zeigt, was sich ändert, und fragt vorher. In `clay edit` tut <kbd>V</kbd> dasselbe. Siehe [Versionen](../organizing/versions.md#die-erste-version).

## Optionen

| Option | Befehle | Standard | Zweck |
|--------|---------|----------|-------|
| `--root <dir>` | alle | aktueller Ordner | Der Projektordner mit `clay.yaml` und `docs/` |
| `--out <dir>` | build, preview | `<root>/publish` | Ausgabeordner; die Seite landet in `<out>/public` |
| `--port <port>` | dev, preview | `3000`, `4173` | Port des Servers |
| `--host` | dev, preview | aus | Auf allen Netzwerkschnittstellen lauschen, etwa um die Seite auf dem Smartphone zu öffnen |
| `--strict` | build | aus | Bei Warnungen scheitern, siehe [Build-Prüfungen](build-checks.md) |
| `--verbose` | build, dev | aus | Die vollständige Ausgabe von Nuxt statt des Fortschritts zeigen |
| `--json` | edit, check | aus | Das Ergebnis als JSON ausgeben, für Skripte und Agenten |
| `--lang <code>` | edit | Standardsprache | In einer anderen Sprache arbeiten |
| `--docs-version <name>` | edit | neueste | In einer älteren Version in `docs/<name>/` arbeiten |
| `--slug <name>` | edit | aus dem Titel | Datei- oder Ordnername für `new` und `move` |
| `--redirect` | edit | aus | Die alte Adresse einer Seite bei `move` und `rename` behalten, siehe [Weiterleitungen](../organizing/redirects.md) |
| `--yes` | edit, version | aus | `delete` bestätigen; `docs/` ohne Nachfrage nach `docs/latest/` verschieben |
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
