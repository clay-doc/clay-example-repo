---
title: Codeblöcke
icon: fa-solid fa-code
description: Syntaxhervorhebung für über 200 Sprachen, hervorgehobene Zeilen, Diffs, Fokus und ein Kopier-Button.
---

# Codeblöcke

Umschließe Code mit drei Backticks und gib seine Sprache an. Clay hebt ihn mit [Shiki](https://shiki.style) hervor, dem Highlighter von VS Code, in passenden Farben für das helle und das dunkle Design.

````markdown
```python
def greet(name: str) -> str:
    return f"Hallo, {name}!"
```
````

```python
def greet(name: str) -> str:
    return f"Hallo, {name}!"
```

Jeder Codeblock hat oben rechts einen Kopier-Button; auf Touchscreens ist er immer sichtbar.

## Sprachen

Clay erkennt, welche Sprachen deine Dokumentation nutzt, und lädt nur diese. Du konfigurierst sie also nie. Jede [Sprache, die Shiki kennt](https://shiki.style/languages), funktioniert, unter ihrem Namen oder einem üblichen Kürzel: `js`, `ts`, `py`, `sh`, `yml`, `md` und so weiter. Ein Block mit unbekannter oder ohne Sprache wird als einfacher Text gezeigt.

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

## Zeilen hervorheben

Schreib die Zeilennummern in geschweiften Klammern hinter die Sprache, einzeln oder als Bereich: `ts {2}` oder `ts {1,3-4}`.

```ts {2}
const site = loadSite(root);
const pages = site.pages.filter(page => !page.isDir);
console.log(`${pages.length} Seiten`);
```

## Markierungen in Kommentaren

Manche Änderungen markierst du einfacher direkt in der Zeile. Hänge einen Kommentar mit einer Markierung an das Zeilenende; Clay entfernt den Kommentar und markiert die Zeile:

| Markierung | Wirkung |
|------------|---------|
| `// [!code highlight]` | Hebt die Zeile hervor |
| `// [!code ++]` | Markiert die Zeile als hinzugefügt (grün, mit `+`) |
| `// [!code --]` | Markiert die Zeile als entfernt (rot, mit `-`) |
| `// [!code focus]` | Blendet die anderen Zeilen ab, bis der Mauszeiger auf dem Block liegt |
| `// [!code warning]` | Markiert die Zeile als Warnung (gelb) |
| `// [!code error]` | Markiert die Zeile als Fehler (rot) |
| `// [!code word:name]` | Hebt jedes `name` im Block hervor |

Nutze die Kommentarsyntax der Sprache des Blocks: `#` in Python, YAML oder Shell, `<!-- -->` in HTML, `--` in SQL.

Ein Diff:

```js
export default defineConfig({
  title: "My Project", // [!code --]
  title: "My Documentation", // [!code ++]
  base: "/docs/",
});
```

Eine hervorgehobene Zeile und eine Warnung:

```python
config = load_config("clay.yaml")
config["baseURL"] = "/docs/"  # [!code highlight]
build(config, strict=False)  # [!code warning]
```

Fokus auf eine Zeile:

```yaml
title: "Mein Projekt"
baseURL: "/mein-projekt/" # [!code focus]
siteURL: "https://example.com"
```

Hervorgehobene Wörter:

```ts
// [!code word:edition]
const edition = editionOf(route.path, versions, languages);
const nav = navs[edition.prefix];
```

## Code-Zäune zeigen

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
