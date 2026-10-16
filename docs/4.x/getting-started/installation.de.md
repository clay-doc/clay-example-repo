---
title: Installation
icon: fa-solid fa-download
description: Clay mit npm, pnpm oder yarn in ein Projekt installieren, oder ganz ohne Installation ausführen.
---

# Installation

Clay ist auf npm als [`clay-doc`](https://www.npmjs.com/package/clay-doc) veröffentlicht. Es braucht **Node.js {{node}} oder neuer**:

```bash
node --version   # v{{node}}.0 oder neuer
```

## Clay zu einem Projekt hinzufügen

Installiere Clay als Entwicklungsabhängigkeit des Projekts, das du dokumentieren willst:

::: code-group
```bash [npm]
npm install --save-dev clay-doc
```
```bash [pnpm]
pnpm add --save-dev clay-doc
```
```bash [yarn]
yarn add --dev clay-doc
```
:::

Damit steht Clay in der `package.json`, und die Lockfile hält die genaue Version fest: Jeder Build, auf deinem Rechner oder in der CI, nutzt dieselbe Version.

Ergänze Skripte in der `package.json`, damit sich niemand die Befehle merken muss:

```json [package.json]
{
  "scripts": {
    "docs:dev": "clay dev",
    "docs:build": "clay build --strict",
    "docs:preview": "clay preview"
  }
}
```

Dann startet `npm run docs:dev` die Live-Vorschau.

> [!TIP]
> Clay installiert zwei Befehle, `clay` und `clay-doc`. Sie tun dasselbe; nimm den, der sich in deinen Skripten besser liest.

## Ohne Installation

Dokumentation liegt oft in Repositories, die in Go, Python, Java oder anderen Sprachen geschrieben sind, wo eine `package.json` fehl am Platz wäre. Du brauchst keine: `npx` führt Clay direkt von npm aus, in jedem Ordner mit einer `clay.yaml` und einem Ordner `docs/`.

::: tabs
== Zum Ausprobieren
```bash
npx clay-doc dev
```
== Für Builds
Nenne eine Version, damit jeder Build dieselbe nutzt:

```bash
npx clay-doc@4 build --strict
```
:::

> [!NOTE]
> Werkzeuge wie Dependabot können eine Version in einem Befehl nicht aktualisieren; das übernimmst du selbst.

## Clay aktualisieren

::: code-group
```bash [npm]
npm install --save-dev clay-doc@latest
```
```bash [pnpm]
pnpm add --save-dev clay-doc@latest
```
```bash [yarn]
yarn add --dev clay-doc@latest
```
:::

Clay folgt der [semantischen Versionierung](https://semver.org): Minor- und Patch-Releases bringen Funktionen und Fehlerbehebungen, ohne deine Dokumentation zu brechen. Major-Releases kommen mit einer Umstiegsanleitung, etwa [Umstieg auf Clay 4](../guides/upgrading-to-clay-4.md). Das [Changelog](https://github.com/clay-doc/clay/blob/main/CHANGELOG.md) listet jede Änderung.

## Weiter

Bau deine erste Seite mit dem [Schnellstart](quick-start.md).
