---
title: Umstieg auf Clay 2
icon: fa-solid fa-circle-up
description: Eine Clay-1-Seite, gebaut mit Clay Oven, auf Clay 2 bringen - ein npm-Paket statt Frontend und Clay Oven.
---

# Umstieg auf Clay 2

Clay 1 bestand aus zwei Teilen: dem Clay-Frontend und Clay Oven, einem eigenen Go-Werkzeug, das die Dokumentation aufbereitet hat. Clay 2 ist ein einziges npm-Paket, `clay-doc`, das beides erledigt. Dein Ordner `docs/`, die `clay.yaml`, die `dir-meta.yaml`, die Umgebungsvariablen und die URLs deiner Seiten bleiben, wie sie sind; was sich ändert, ist das Bauen.

## Auf einen Blick

| Clay 1 | Clay 2 |
|--------|--------|
| Clay Oven herunterladen, `./clay-oven` ausführen | `npm install --save-dev clay-doc`, `npx clay build` ausführen |
| Ausgabe in `output/` | Ausgabe in `publish/public` |
| `run-oven.sh` in der CI | `npm ci` und `npx clay build --strict` |
| Optionen `-c`, `-d`, `-o`, `-fm` | `--root` und `--out`; die Dateinamen sind fest |
| `-nc`, `-ci` gegen Rückfragen | Keine Rückfragen mehr |
| `langs` in der `clay.yaml` | Nicht nötig: Die Sprachen der Codeblöcke werden erkannt |
| Keine Live-Vorschau | `npx clay dev` |

## Schritte

::: steps
1. **Installiere Clay.**

   ::: code-group
   ```bash [npm]
   npm init -y                       # nur, wenn es noch keine package.json gibt
   npm install --save-dev clay-doc@2
   ```
   ```bash [pnpm]
   pnpm init                         # nur, wenn es noch keine package.json gibt
   pnpm add --save-dev clay-doc@2
   ```
   ```bash [yarn]
   yarn init -y                      # nur, wenn es noch keine package.json gibt
   yarn add --dev clay-doc@2
   ```
   :::

2. **Räum die `clay.yaml` auf.** Entfern `langs`, falls vorhanden. Clay 2 warnt davor, funktioniert aber trotzdem.

3. **Aktualisiere die `.gitignore`.** Clay 2 schreibt nach `publish/`; `output/` von Clay Oven kann weg.

   ```text
   node_modules/
   publish/
   output/
   ```

4. **Aktualisiere die CI.** Ersetz den Schritt mit Clay Oven in deinem Workflow und lade `publish/public` statt `output` hoch:

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

   [GitHub Pages](../publishing/github-pages.md) zeigt einen vollständigen Workflow.

5. **Prüfe.**

   ```bash
   npx clay build --strict
   ```

   Clay 2 prüft Links und Einstellungen gründlicher als Clay Oven. Behebe, was es meldet, siehe [Build-Prüfungen](../publishing/build-checks.md); läuft der Build durch, ist der Umstieg geschafft.
:::

## Was sonst neu ist

- Eine Live-Vorschau mit `clay dev`.
- [Build-Prüfungen](../publishing/build-checks.md) für Links und Einstellungen.
- Eine [Suche](../features/search.md) mit Tippfehlertoleranz und [SEO](../features/seo.md) mit Sitemap.
- `description` und `order` im Front Matter.
- Versionen und Übersetzungen, siehe [Versionen](../organizing/versions.md) und [Übersetzungen](../organizing/translations.md).

Weiter geht es mit dem [Umstieg auf Clay 3](upgrading-to-clay-3.md).
