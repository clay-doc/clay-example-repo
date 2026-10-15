---
title: Codeblöcke
icon: fa-solid fa-code
description: Syntaxhervorhebung für über 200 Sprachen, hervorgehobene Zeilen, Diffs, Fokus und ein Kopierknopf.
---

# Codeblöcke

Umschließe Code mit drei Backticks und nenne seine Sprache. Clay hebt ihn mit [Shiki](https://shiki.style) hervor, dem Highlighter von VS Code, in passenden Farben für das helle und das dunkle Design.

::: tabs
== Ergebnis
```python
def greet(name: str) -> str:
    return f"Hallo, {name}!"
```
== Markdown
````markdown
```python
def greet(name: str) -> str:
    return f"Hallo, {name}!"
```
````
:::

Jeder Codeblock hat oben rechts einen Kopierknopf; auf Touchscreens ist er immer sichtbar.

## Sprachen

Clay erkennt die Sprachen deiner Dokumentation und lädt nur diese, du konfigurierst also nie etwas. Jede [Sprache, die Shiki kennt](https://shiki.style/languages), funktioniert, unter ihrem Namen oder einem gängigen Kürzel: `js`, `ts`, `py`, `sh`, `yml`, `md` und so weiter. Ein Block mit unbekannter oder ohne Sprache erscheint als schlichter Text.

::: code-group
```go
package main

import "fmt"

func main() {
    fmt.Println("Hallo aus Go")
}
```
```rust
fn main() {
    println!("Hallo aus Rust");
}
```
```sql
SELECT title, updated FROM pages WHERE language = 'de' ORDER BY updated DESC;
```
:::

Derselbe Code in mehreren Sprachen oder für mehrere Werkzeuge passt in eine [Codegruppe](components/tabs.md#codegruppen) wie die oben.

## Zeilen hervorheben

Schreib die Zeilennummern in geschweiften Klammern hinter die Sprache, einzeln oder als Bereiche: `ts {2}` oder `ts {1,3-4}`.

````markdown
```ts {2}
const site = loadSite(root);
const pages = site.pages.filter(page => !page.isDir);
console.log(`${pages.length} Seiten`);
```
````

```ts {2}
const site = loadSite(root);
const pages = site.pages.filter(page => !page.isDir);
console.log(`${pages.length} Seiten`);
```

## Markierungen in Kommentaren

Manche Änderungen markierst du leichter direkt in der Zeile. Setz einen Kommentar mit einer Markierung ans Zeilenende; Clay entfernt den Kommentar und markiert die Zeile:

| Markierung | Wirkung |
|------------|---------|
| `// [!code highlight]` | Hebt die Zeile hervor |
| `// [!code ++]` | Markiert die Zeile als hinzugefügt (grün, mit `+`) |
| `// [!code --]` | Markiert die Zeile als entfernt (rot, mit `-`) |
| `// [!code focus]` | Blendet die anderen Zeilen ab, bis Leser über den Block fahren |
| `// [!code warning]` | Markiert die Zeile als Warnung (gelb) |
| `// [!code error]` | Markiert die Zeile als Fehler (rot) |
| `// [!code word:name]` | Hebt jedes `name` im Block hervor |

Nutze die Kommentarsyntax der Sprache des Blocks: `#` in Python, YAML oder Shell, `<!-- -->` in HTML, `--` in SQL.

::: tabs
== Diff
```js
export default defineConfig({
  title: "Mein Projekt", // [!code --]
  title: "Meine Dokumentation", // [!code ++]
  base: "/docs/",
});
```
== Hervorhebung und Warnung
```python
config = load_config("clay.yaml")
config["baseURL"] = "/docs/"  # [!code highlight]
build(config, strict=False)  # [!code warning]
```
== Fokus
```yaml
title: "Mein Projekt"
baseURL: "/mein-projekt/" # [!code focus]
siteURL: "https://example.com"
```
== Wörter
```ts
// [!code word:edition]
const edition = editionOf(route.path, versions, languages);
const nav = navs[edition.prefix];
```
:::

## Codeblöcke zeigen

Um einen Codeblock in einem Codeblock zu zeigen, wie diese Seite es tut, umschließe den äußeren Block mit vier Backticks:

`````markdown
````markdown
```js
console.log("innen");
```
````
`````

## Code im Text

Einfache Backticks markieren Code in einem Satz: `npm install --save-dev clay-doc`. Code im Text wird nicht hervorgehoben.
