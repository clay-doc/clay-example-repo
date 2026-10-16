---
title: Installation
icon: fa-solid fa-download
description: Installiere Clay mit npm in ein Projekt, oder probiere es aus, ohne etwas zu installieren.
---

# Installation

Clay ist auf npm als [`clay-doc`](https://www.npmjs.com/package/clay-doc) veröffentlicht. Es braucht **Node.js 20.19 oder neuer**, das `npm` und `npx` mitbringt.

```bash
node --version   # v20.19.0 oder neuer
```

## Clay zu einem Projekt hinzufügen

Installiere Clay als Entwicklungsabhängigkeit des Projekts, das du dokumentieren möchtest:

```bash
npm install --save-dev clay-doc
```

Damit steht Clay in der `package.json`, und die genaue Version ist in der `package-lock.json` festgehalten. So nutzt jeder Build, auf deinem Rechner wie in der CI, dieselbe Version.

Ergänze Skripte in der `package.json`, damit sich niemand die Befehle merken muss:

```json
{
  "scripts": {
    "docs:dev": "clay dev",
    "docs:build": "clay build",
    "docs:preview": "clay preview"
  }
}
```

Dann startet `npm run docs:dev` die Live-Vorschau.

> [!TIP]
> Clay installiert zwei Befehle, `clay` und `clay-doc`. Sie tun dasselbe; nimm den, der sich in deinen Skripten besser liest.

## Clay ausprobieren, ohne es zu installieren

In jedem Ordner mit einer `clay.yaml` und einem `docs/`-Ordner führt `npx` Clay direkt von npm aus:

```bash
npx clay-doc dev
```

Das ist praktisch für einen ersten Blick. Für Builds in der CI nimm eine feste Version, entweder über die `package.json` oder mit ausdrücklicher Version:

```bash
npx clay-doc@2.1.0 build --strict
```

## Projekte ohne package.json

Dokumentation liegt oft in Repositories, die in Go, Python, Java oder anderen Sprachen geschrieben sind. Dort brauchst du keine `package.json`: Führe Clay lokal und in der CI mit `npx clay-doc@<version>` aus. Der Nachteil: Werkzeuge wie Dependabot können eine Version, die in einem Befehl steht, nicht aktualisieren, das musst du selbst tun.

## Clay aktualisieren

```bash
npm install --save-dev clay-doc@latest
```

Clay folgt der [semantischen Versionierung](https://semver.org/lang/de/): Minor- und Patch-Releases bringen neue Funktionen und Fehlerbehebungen, ohne deine Dokumentation zu beschädigen. Das [Changelog](https://github.com/clay-doc/clay/blob/main/CHANGELOG.md) listet jede Änderung.

## Nächste Schritte

Weiter geht es mit dem [Schnellstart](quick-start.md), in dem du deine erste Seite baust.
