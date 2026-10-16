---
title: Code Blocks
icon: fa-solid fa-code
description: Syntax highlighting for over 200 languages, file names, highlighted lines, diffs, focus and a copy button.
order: 3
---

# Code Blocks

Fence code with three backticks and name its language. Clay highlights it with [Shiki](https://shiki.style), the highlighter of VS Code, in matching colors for the light and the dark theme.

::: tabs
== Result
```python
def greet(name: str) -> str:
    return f"Hello, {name}!"
```
== Markdown
````markdown
```python
def greet(name: str) -> str:
    return f"Hello, {name}!"
```
````
:::

Every code block has a copy button in its top right corner; on touch screens it is always visible.

## Languages

Clay detects the languages your docs use and loads only those, so you never configure them. Any [language Shiki knows](https://shiki.style/languages) works, under its name or a common alias: `js`, `ts`, `py`, `sh`, `yml`, `md` and so on. A block with an unknown language, or none, is shown as plain text.

::: code-group
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello from Go")
}
```
```rust
fn main() {
    println!("Hello from Rust");
}
```
```sql
SELECT title, updated FROM pages WHERE language = 'en' ORDER BY updated DESC;
```
:::

The same code in several languages or for several tools fits in a [code group](components/tabs.md#code-groups) like the one above.

## Highlighting lines

Put the line numbers in braces after the language, as single lines or ranges: `ts {2}` or `ts {1,3-4}`.

````markdown
```ts {2}
const site = loadSite(root);
const pages = site.pages.filter(page => !page.isDir);
console.log(`${pages.length} pages`);
```
````

```ts {2}
const site = loadSite(root);
const pages = site.pages.filter(page => !page.isDir);
console.log(`${pages.length} pages`);
```

## File names :badge[New in Clay 4]{tip}

Put the name of the file in square brackets after the language, and Clay shows it in a bar above the code, so readers see at once where the code goes:

::: tabs
== Result
```yaml [clay.yaml]
title: "My Project"
baseURL: "/my-project/"
```
== Markdown
````markdown
```yaml [clay.yaml]
title: "My Project"
baseURL: "/my-project/"
```
````
:::

The name may contain folders and spaces, like `[docs/guides/setup.md]`, and goes with highlighted lines: `ts [src/client.ts] {2}`. In a [code group](components/tabs.md#code-groups), the name in brackets labels the tab instead.

## Notations in comments

Some changes are easier to mark on the line itself. Add a comment with a notation at the end of the line; Clay removes the comment and marks the line:

| Notation | Effect |
|----------|--------|
| `// [!code highlight]` | Highlights the line |
| `// [!code ++]` | Marks the line as added (green, with `+`) |
| `// [!code --]` | Marks the line as removed (red, with `-`) |
| `// [!code focus]` | Dims the other lines until the reader hovers the block |
| `// [!code warning]` | Marks the line as a warning (yellow) |
| `// [!code error]` | Marks the line as an error (red) |
| `// [!code word:name]` | Highlights every `name` in the block |

Use the comment syntax of the block's language: `#` in Python, YAML or shell, `<!-- -->` in HTML, `--` in SQL.

::: tabs
== Diff
```js
export default defineConfig({
  title: "My Project", // [!code --]
  title: "My Documentation", // [!code ++]
  base: "/docs/",
});
```
== Highlight and warning
```python
config = load_config("clay.yaml")
config["baseURL"] = "/docs/"  # [!code highlight]
build(config, strict=False)  # [!code warning]
```
== Focus
```yaml
title: "My Project"
baseURL: "/my-project/" # [!code focus]
siteURL: "https://example.com"
```
== Words
```ts
// [!code word:edition]
const edition = editionOf(route.path, versions, languages);
const nav = navs[edition.prefix];
```
:::

## Showing code fences

To show a code block inside a code block, as this page does, fence the outer block with four backticks:

`````markdown
````markdown
```js
console.log("inside");
```
````
`````

## Inline code

Single backticks mark code within a sentence: `npm install --save-dev clay-doc`. Inline code is not highlighted.
