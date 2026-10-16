---
title: Umstieg von Clay 1
icon: fa-solid fa-arrow-right-arrow-left
description: Bring eine Clay-1-Seite, die mit Clay Oven gebaut wurde, Schritt für Schritt auf Clay 2.
---

# Umstieg von Clay 1

Clay 1 bestand aus zwei Teilen: dem Clay-Frontend und Clay Oven, einem eigenen Go-Werkzeug, das die Dokumentation aufbereitet hat. Clay 2 ist ein einziges npm-Paket, `clay-doc`, das beides erledigt. Deine Dokumentation und die `clay.yaml` funktionieren weiter; was sich ändert, ist das Bauen. Diese Seite beschreibt den Schritt zu Clay 2; mach danach mit dem [Umstieg auf Clay 3](upgrading-to-clay-3.md) weiter.

## Was bleibt

- Der Ordner `docs/`, die Markdown-Dateien und ihr Front Matter.
- `clay.yaml` und `dir-meta.yaml` mit all ihren Einstellungen (Clay 3 verlagert die `dir-meta.yaml` dann in `index.md`-Dateien).
- Die Umgebungsvariablen `CLAY_TITLE`, `CLAY_BASE_URL`, `CLAY_SITE_URL` und `CLAY_FONTAWESOME_KIT`.
- Die URLs deiner Seiten.

## Was sich ändert

| Clay 1 | Clay 2 |
|--------|--------|
| Clay Oven herunterladen, `./clay-oven` ausführen | `npm install --save-dev clay-doc`, `npx clay build` ausführen |
| Ausgabe in `output/` | Ausgabe in `publish/public` |
| `run-oven.sh` in der CI | `npm ci` und `npx clay build --strict` |
| Optionen `-c`, `-d`, `-o`, `-fm` | `--root` und `--out`; die Dateinamen sind fest |
| `-nc`, `-ci`, um Rückfragen zu überspringen | Es gibt keine Rückfragen mehr |
| `langs` in der `clay.yaml` | Nicht mehr nötig: Die Sprachen der Codeblöcke werden erkannt |
| Keine Live-Vorschau | `npx clay dev` |

## Schritt für Schritt

### 1. Clay installieren

```bash
npm init -y                       # nur, wenn es noch keine package.json gibt
npm install --save-dev clay-doc
```

### 2. Die clay.yaml aufräumen

Entferne `langs`, falls vorhanden. Clay 2 warnt davor, funktioniert aber trotzdem.

### 3. Die .gitignore anpassen

```text
node_modules/
publish/
output/
```

### 4. Bauen und prüfen

```bash
npx clay build --strict
```

Clay 2 prüft Links und Einstellungen gründlicher als Clay Oven. Behebe, was es meldet; siehe [Build-Prüfungen](../cli/build-checks.md).

### 5. Die CI anpassen

Ersetze den Schritt mit Clay Oven in deinem Workflow:

```yaml
- name: Build docs
  run: curl -fsSL https://raw.githubusercontent.com/clay-doc/clay-oven/refs/heads/main/run-oven.sh | sh # [!code --]
- uses: actions/setup-node@v7 # [!code ++]
  with: # [!code ++]
    node-version: lts/* # [!code ++]
    cache: npm # [!code ++]
- run: npm ci # [!code ++]
- run: npx clay build --strict # [!code ++]
```

und lade `publish/public` statt `output` hoch. Unter [GitHub Pages](../deployment/github-pages.md) findest du einen vollständigen Workflow.

## Neu in Clay 2

Nach dem Umstieg steht dir ohne weiteren Aufwand zur Verfügung:

- eine Live-Vorschau mit `clay dev`,
- [Build-Prüfungen](../cli/build-checks.md) für Links und Einstellungen,
- eine [Suche](../features/search.md) mit Tippfehlertoleranz und [SEO](../features/seo.md) mit Sitemap,
- `description` und `order` im Front Matter,
- [clay edit](../organizing/clay-edit.md), [Versionen](../versions-and-languages/versions.md) und [Übersetzungen](../versions-and-languages/translations.md).
