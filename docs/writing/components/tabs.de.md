---
title: Tabs und Codegruppen
icon: fa-solid fa-table-columns
description: Alternativen an einer Stelle, etwa Anleitungen je System oder derselbe Befehl für npm, pnpm und yarn; die Wahl der Leser bleibt gespeichert.
---

# Tabs und Codegruppen

Tabs zeigen Alternativen an einer Stelle: Anleitungen für jedes Betriebssystem oder dieselbe Einstellung in zwei Formaten. Leser sehen die, die sie wählen, und die anderen sind ihnen nicht im Weg.

## Tabs

````markdown
::: tabs
== macOS
Installiere Node.js mit [Homebrew](https://brew.sh):

```bash
brew install node
```
== Windows
Lade das Installationsprogramm von [nodejs.org](https://nodejs.org) und starte es.
== Linux
Nutze die Paketverwaltung deiner Distribution, zum Beispiel `sudo apt install nodejs`.
:::
````

::: tabs
== macOS
Installiere Node.js mit [Homebrew](https://brew.sh):

```bash
brew install node
```
== Windows
Lade das Installationsprogramm von [nodejs.org](https://nodejs.org) und starte es.
== Linux
Nutze die Paketverwaltung deiner Distribution, zum Beispiel `sudo apt install nodejs`.
:::

- **Jede Zeile `== Name` beginnt einen Tab.** Der Name ist schlichter Text.
- **Ein Tab enthält beliebiges Markdown:** Absätze, Listen, Codeblöcke, Hinweise und andere Komponenten.
- **Der erste Tab wird zuerst gezeigt.**
- Text vor dem ersten Namen fällt weg. Ein `tabs`-Container ohne Namen wird als Text gezeigt.

## Codegruppen

Für denselben Code in mehreren Varianten ist eine Codegruppe kürzer: Jeder Codeblock wird ein Tab, benannt in eckigen Klammern nach seiner Sprache.

````markdown
::: code-group
```bash [npm]
npm install --save-dev clay-doc
```
```bash [pnpm]
pnpm add -D clay-doc
```
```bash [yarn]
yarn add -D clay-doc
```
:::
````

::: code-group
```bash [npm]
npm install --save-dev clay-doc
```
```bash [pnpm]
pnpm add -D clay-doc
```
```bash [yarn]
yarn add -D clay-doc
```
:::

- **Ohne Namen in Klammern** heißt ein Tab wie seine Sprache, etwa `yaml` oder `json`.
- **Alles andere von [Codeblöcken](../code-blocks.md) funktioniert**, etwa hervorgehobene Zeilen: ```` ```ts [clay.config.ts] {2} ````.
- Text zwischen den Codeblöcken einer Gruppe fällt weg.

## Die Wahl der Leser bleibt

Wer einen Tab wählt, wählt den gleichnamigen Tab in jeder Gruppe der Seite, und Clay merkt es sich: Wer einmal **pnpm** gewählt hat, sieht pnpm in jeder Gruppe auf jeder Seite, auch beim nächsten Besuch. Die Wahl bleibt nur im Browser der Leser.

> [!TIP]
> Benenne Gleiches überall gleich, immer „pnpm“ und nie „PNPM“ auf einer Seite und „pnpm“ auf einer anderen, damit die Wahl mitwandert.

## Tastatur

<kbd>Tab</kbd> führt zu den Tabs, <kbd>←</kbd> und <kbd>→</kbd> wechseln zwischen ihnen, <kbd>Pos1</kbd> und <kbd>Ende</kbd> springen zum ersten und zum letzten Tab.

## Suche

Die [Suche](../../features/search.md) findet den Text jedes Tabs. Ein Ergebnis in einem verborgenen Tab zeigt diesen Tab.
