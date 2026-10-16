---
title: Umstieg auf Clay 3
icon: fa-solid fa-circle-up
description: Eine Clay-2-Seite auf Clay 3 bringen - index.md-Dateien statt dir-meta.yaml, die Startseite in docs/index.md und ältere Versionen in docs-archive/.
---

# Umstieg auf Clay 3

Clay 3 holt drei Dinge in die Dokumentation selbst: Ordnernamen, die Startseite und ältere Versionen. Alles andere, deine Seiten, Links, Übersetzungen und der Rest der `clay.yaml`, bleibt, wie es ist. Bis du sie verschoben hast, meldet `clay build` mit einer Warnung, was noch fehlt, und `--strict` scheitert.

## Auf einen Blick

| Clay 2 | Clay 3 |
|--------|--------|
| `dir-meta.yaml` | eine `index.md` in jedem Ordner |
| `index` in der `clay.yaml` | `docs/index.md` |
| `versions/<name>/docs/` | `docs-archive/<name>/` |

Den Umstieg kann ein Coding-Agent übernehmen, gleich bis Clay 4:

::: prompt
Stell die Clay-Dokumentation dieses Repositorys von Clay 2 auf Clay 4 um: nach
https://clay-doc.github.io/clay-example-repo/de/guides/upgrading-to-clay-3.md,
dann nach https://clay-doc.github.io/clay-example-repo/de/guides/upgrading-to-clay-4.md,
und installiere gleich clay-doc@4. Der Umstieg ist fertig, wenn
`npx clay build --strict` durchläuft.
:::

## Schritte

::: steps
1. **Aktualisiere Clay.**

   ::: code-group
   ```bash [npm]
   npm install --save-dev clay-doc@3
   ```
   ```bash [pnpm]
   pnpm add --save-dev clay-doc@3
   ```
   ```bash [yarn]
   yarn add --dev clay-doc@3
   ```
   :::

2. **Verschiebe Ordnernamen in `index.md`-Dateien.** Jeder Eintrag der `dir-meta.yaml` wird das Front Matter einer `index.md` in diesem Ordner; aus `name` wird `title`:

   ::: tabs
   == Clay 2
   ```yaml [dir-meta.yaml]
   - path: "guides"
     name: "Anleitungen"
     icon: "fa-solid fa-book-open"
     order: 3
   ```
   == Clay 3
   ```markdown [docs/guides/index.md]
   ---
   title: Anleitungen
   icon: fa-solid fa-book-open
   order: 3
   ---
   ```
   :::

   Namen je Sprache (`name: {en: Guides, de: Anleitungen}`) kommen in Übersetzungen der `index.md`: `index.de.md` mit `title: Anleitungen`. Lösch danach die `dir-meta.yaml`. Eine `index.md` nur mit Front Matter benennt ihren Ordner; schreib Text darunter, und sie wird die Seite des Ordners, siehe [Indexseiten](../organizing/index-pages.md).

3. **Verschiebe die Startseite nach `docs/index.md`.** Für ein ähnliches Aussehen, einen großen Kopf und die obersten Seiten darunter, setz `hero` und `list`:

   ::: tabs
   == Clay 2
   ```yaml [clay.yaml]
   index:
     title: "Willkommen bei Mein Projekt"
     description: "Alles, was du wissen musst."
     icon: "fa-solid fa-rocket"
   ```
   == Clay 3
   ```markdown [docs/index.md]
   ---
   title: Willkommen bei Mein Projekt
   description: Alles, was du wissen musst.
   icon: fa-solid fa-rocket
   hero: true
   list: true
   ---
   ```
   :::

   Werte je Sprache kommen in `docs/index.de.md` und so weiter. Entfern danach `index` aus der `clay.yaml`.

4. **Verschiebe ältere Versionen nach `docs-archive/`.** Sie rücken eine Ebene nach oben, und ihre `dir-meta.yaml` wird wie in Schritt 2 zu `index.md`-Dateien:

   ```tree
   versions/1.x/docs/   # Clay 2
   docs-archive/1.x/    # Clay 3
   ```

   ```bash
   mkdir docs-archive
   git mv versions/1.x/docs docs-archive/1.x
   ```

5. **Prüfe.**

   ```bash
   npx clay build --strict
   ```

   Läuft der Build durch, ist der Umstieg geschafft. Links auf `index.md`-Dateien und auf Ordner führen zu den Seiten der Ordner, bestehende Links funktionieren also weiter.
:::

## Was sonst neu ist

- In der Seitenleiste öffnet der Titel eines Ordners seine Seite; der Pfeil zeigt und versteckt seine Seiten.
- [clay edit](../organizing/clay-edit.md) legt Seiten und Ordner an, benennt sie um, verschiebt und löscht sie, bearbeitet das ganze Front Matter und funktioniert in jeder Version und Sprache.
- Abschnittsüberschriften zeigen einen `#`-Link zum Kopieren.

Weiter geht es mit dem [Umstieg auf Clay 4](upgrading-to-clay-4.md).
