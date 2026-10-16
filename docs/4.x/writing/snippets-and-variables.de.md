---
title: Snippets & Variablen
icon: fa-solid fa-paste
description: Einen Text einmal schreiben und auf vielen Seiten nutzen, Code aus dem Projekt einbinden und Werte wie die aktuelle Version einsetzen.
---

# Snippets & Variablen :badge[Neu in Clay 4]{tip}

Manche Texte gehören auf viele Seiten: eine Voraussetzung, eine Warnung, die aktuelle Version. Schreib sie einmal, und Clay setzt sie beim Bauen der Seite überall ein, wo sie gebraucht werden. Suche, Linkprüfung und das [Markdown für Agenten](../features/ai-and-agents.md) sehen den fertigen Text.

## Variablen

Leg die Werte in der `clay.yaml` fest:

```yaml [clay.yaml]
variables:
  major: "4"
  node: "20.19"
```

Nutze sie in jeder Seite mit zwei geschweiften Klammern:

::: tabs
== Ergebnis
Clay 4 braucht Node.js 20.19 oder neuer:

```bash
npm install --save-dev clay-doc@4
```
== Markdown
````markdown
Clay \{{major}} braucht Node.js \{{node}} oder neuer:

```bash
npm install --save-dev clay-doc@\{{major}}
```
````
:::

- **Variablen funktionieren überall** in einer Seite: im Text, in Codeblöcken, in Links und im Front Matter.
- **Nur Namen aus `variables` werden eingesetzt.** Andere geschweifte Klammern bleiben, wie sie sind, Templates in Codebeispielen sind also sicher.
- **Ein Backslash lässt eine Variable stehen**: `\\{{major}}` zeigt `\{{major}}`.
- **Werte können je Sprache verschieden sein**, wie jeder Text in der `clay.yaml`: `product: {en: "Docs", de: "Doku"}`.
- **Gespeicherte [Versionen](../organizing/versions.md) behalten ihre Werte**: `clay version` setzt die Variablen ein, damit die alte Dokumentation weiter die alte Version nennt.

## Snippets

Leg einen Text, den du mehrfach nutzen willst, in eine Datei, deren Name oder deren Ordnername mit `_` beginnt: Solche Dateien sind keine Seiten. Binde ihn mit einem HTML-Kommentar in einer eigenen Zeile ein:

::: tabs
== Ergebnis
<!--@include: ../_snippets/node-version.de.md-->
== Markdown
```markdown
\<!--@include: ../_snippets/node-version.de.md-->
```
== Das Snippet
```markdown [docs/_snippets/node-version.de.md]
> [!NOTE]
> Clay \{{major}} braucht **Node.js \{{node}}** oder neuer.
```
:::

- **Der Pfad ist relativ zur Seite**, wie ein Link. Das Front Matter des Snippets bleibt weg.
- **Links und Bilder in einem Snippet** sind relativ zur Seite, die es einbindet.
- **Snippets können Snippets einbinden**, relativ zu sich selbst, und Variablen werden überall eingesetzt.
- **Rück das Einbinden ein**, und das ganze Snippet wird eingerückt: So funktioniert es auch in [Schritten](components/steps.md) und Listen.
- **Auf GitHub** ist das Einbinden ein HTML-Kommentar und zeigt nichts.

## Code aus dem Projekt

Einbinden funktioniert auch in Codeblöcken, mit jeder Datei des Projekts. So bleiben Beispiele in der Dokumentation der Code, der wirklich läuft:

````markdown
```ts
\<!--@include: ../../src/client.ts#setup-->
```
````

| Einbinden | Was es nimmt |
|-----------|--------------|
| `client.ts` | die ganze Datei |
| `client.ts{12,30}` | die Zeilen 12 bis 30 |
| `client.ts{12,}` | ab Zeile 12 bis zum Ende |
| `client.ts#setup` | die Zeilen zwischen `#region setup` und `#endregion` |

Markiere Bereiche in Kommentaren der Sprache der Datei; die Markierungszeilen bleiben weg:

```ts
// #region setup
const client = createClient({token: process.env.TOKEN});
// #endregion
```

Diese Website macht es genauso mit ihren eigenen Einstellungen: Der Block unten ist aus ihrer `config/variables.yaml` eingebunden, zwischen `# #region values` und `# #endregion`, und ändert sich mit ihr.

::: tabs
== Ergebnis
```yaml [config/variables.yaml]
major: "4"
node: "20.19"
```
== Markdown
````markdown
```yaml [config/variables.yaml]
\<!--@include: ../../../config/variables.yaml#values-->
```
````
:::

> [!NOTE]
> Dateien außerhalb des Projektordners lassen sich nicht einbinden, damit eine Seite keine anderen Dateien des Rechners veröffentlichen kann, der sie baut. `clay dev` lädt die Seite neu, wenn sich eine eingebundene Datei ändert.

## Prüfungen

Der Build meldet Einbindungen, die er nicht füllen kann, und lässt sie weg:

```text
docs/guides/setup.md: includes "../_snippets/gone.md", which does not exist; it is left out
```

Genauso bei Dateien außerhalb des Projekts, Bereichen, die es nicht gibt, und Snippets, die zurück zur Seite führen. Mit `--strict` lassen sie den Build scheitern, siehe [Build-Prüfungen](../publishing/build-checks.md).
