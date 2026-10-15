---
title: Schnellstart
icon: fa-solid fa-bolt
description: Baue in fünf Minuten deine erste Clay-Seite, ausgehend von einem leeren Ordner.
---

# Schnellstart

Diese Anleitung führt dich in etwa fünf Minuten von einem leeren Ordner zu einer fertigen Dokumentationsseite.

## 1. Das Projekt anlegen

```bash
mkdir meine-doku
cd meine-doku
npm init -y
npm install --save-dev clay-doc
```

## 2. Die Seite konfigurieren

Lege im Projektordner eine `clay.yaml` an. Nur der Titel ist Pflicht:

```yaml
title: "Mein Projekt"
```

## 3. Die erste Seite schreiben

Lege einen Ordner `docs/` mit einer Markdown-Datei an, `docs/introduction.md`:

```markdown
---
title: Einführung
icon: fa-solid fa-door-open
---

# Einführung

Willkommen bei **Mein Projekt**. Das ist die erste Seite seiner Dokumentation.
```

Der Teil zwischen den `---`-Zeilen ist das Front Matter. Es ist optional; ohne es nimmt Clay den Titel aus der ersten Überschrift. Alle Felder findest du unter [Seiten](../writing/pages.md).

## 4. Beim Schreiben ansehen

```bash
npx clay dev
```

Öffne [http://localhost:3000](http://localhost:3000). Die Startseite zeigt deine Seite; ein Klick öffnet sie. Ändere die Markdown-Datei und speichere: Der Browser lädt neu und zeigt deine Änderung.

## 5. Struktur hinzufügen

Seiten in einem Ordner werden zu einem Abschnitt der Navigation. Lege `docs/guides/setup.md` an:

```markdown
# Einrichtung

Wie man Mein Projekt einrichtet.
```

Die Seitenleiste zeigt jetzt einen Abschnitt **Guides**. Um dem Ordner einen anderen Namen, ein Icon und eine eigene Einleitung zu geben, lege `docs/guides/index.md` an:

```markdown
---
title: Anleitungen
icon: fa-solid fa-book
cards: true
---

# Anleitungen

Alles, was du zum Arbeiten mit Mein Projekt brauchst, Schritt für Schritt.
```

Der Text wird zur Seite des Ordners unter `/guides`, mit Kacheln seiner Seiten darunter. Genauso wird `docs/index.md` zur Startseite; siehe [Indexseiten](../organizing/index-pages.md).

## 6. Die Seite bauen

```bash
npx clay build
```

Clay prüft deine Dokumentation, rendert jede Seite und schreibt eine statische Website nach `publish/public`. Prüfe sie so, wie ein Webhoster sie ausliefern würde:

```bash
npx clay preview
```

Das war's: `publish/public` ist bereit zum Hochladen. [GitHub Pages](../deployment/github-pages.md) zeigt, wie du die Seite bei jedem Push automatisch veröffentlichst.

> [!NOTE]
> Trag `publish/` und `node_modules/` in deine `.gitignore` ein. Die Ausgabe des Builds entsteht bei jedem Build neu und gehört nicht ins Repository.

## Wie es weitergeht

- Schreib die Startseite: [Indexseiten](../organizing/index-pages.md).
- Bring Seiten und Ordner in eine Reihenfolge: [Navigation](../organizing/navigation.md).
- Sieh dir alle Einstellungen an: [clay.yaml](../configuration/clay-yaml.md).
