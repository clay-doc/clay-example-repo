---
title: HTML
icon: fa-brands fa-html5
description: HTML in Markdown nutzen, und was Clay entfernt, um deine Seite sicher zu halten.
---

# HTML

Markdown und die [Komponenten](components/index.md) decken das meiste ab, aber manchmal erledigt HTML es besser. Du kannst HTML direkt in deine Seiten schreiben:

| HTML | Ergebnis |
|------|----------|
| `<kbd>Strg</kbd> + <kbd>K</kbd>` | <kbd>Strg</kbd> + <kbd>K</kbd> |
| `H<sub>2</sub>O` | H<sub>2</sub>O |
| `E = mc<sup>2</sup>` | E = mc<sup>2</sup> |
| `<mark>markiert</mark>` | <mark>markiert</mark> |
| `<abbr title="Statischer Seitengenerator">SSG</abbr>` | <abbr title="Statischer Seitengenerator">SSG</abbr> |

> [!TIP]
> Für einklappbare Abschnitte nimm [Details](components/details.md) statt `<details>`: Das ist kürzer und sieht aus wie der Rest der Seite.

## Was Clay entfernt

Dokumentation schreiben oft viele Menschen, auch von außerhalb. Damit eine Seite ihren Lesern nicht schaden kann, bereinigt Clay beim Build das HTML jeder Seite mit [DOMPurify](https://github.com/cure53/DOMPurify). Es entfernt:

- `<script>`-Elemente und Event-Handler wie `onclick` oder `onerror`,
- `javascript:`-Links,
- Formulare und ihre Felder (`<form>`, `<input>`, `<textarea>`, `<select>`), die sich für Phishing nutzen ließen,
- `<style>`-Elemente und `style`-Attribute, mit denen sich Inhalte über die Seite legen ließen.

Alles andere, darunter Tabellen, Bilder, `<details>` und Formatierungen im Text, bleibt, wie du es geschrieben hast.

```html
<p onclick="steal()">Text</p>   <!-- wird zu <p>Text</p> -->
<script>alert(1)</script>       <!-- entfernt -->
```

> [!NOTE]
> Hervorgehobener Code, Formeln und Komponenten behalten ihr Aussehen: Clay fügt ihre Styles selbst hinzu, nachdem dein HTML bereinigt ist.
