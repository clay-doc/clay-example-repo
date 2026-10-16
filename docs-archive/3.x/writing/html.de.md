---
title: HTML
icon: fa-brands fa-html5
description: HTML in Markdown nutzen, und was Clay entfernt, um deine Seite sicher zu halten.
---

# HTML

Markdown deckt das meiste ab, aber manchmal erledigt HTML eine Aufgabe besser. Du kannst HTML direkt in deine Seiten schreiben:

```html
<details>
  <summary>Die ganze Konfiguration zeigen</summary>

  Alles hier drin bleibt verborgen, bis der Leser es aufklappt.
</details>
```

<details>
  <summary>Die ganze Konfiguration zeigen</summary>

  Alles hier drin bleibt verborgen, bis der Leser es aufklappt.
</details>

Weitere nützliche Elemente:

| HTML | Ergebnis |
|------|----------|
| `<kbd>Strg</kbd> + <kbd>K</kbd>` | <kbd>Strg</kbd> + <kbd>K</kbd> |
| `H<sub>2</sub>O` | H<sub>2</sub>O |
| `E = mc<sup>2</sup>` | E = mc<sup>2</sup> |
| `<mark>markiert</mark>` | <mark>markiert</mark> |

## Was Clay entfernt

Dokumentation schreiben oft viele Menschen, auch von außerhalb des Projekts. Damit eine Seite ihren Lesern nicht schaden kann, bereinigt Clay beim Bauen das HTML jeder Seite mit [DOMPurify](https://github.com/cure53/DOMPurify). Entfernt werden:

- `<script>`-Elemente und Event-Handler wie `onclick` oder `onerror`,
- `javascript:`-Links,
- Formulare und ihre Felder (`<form>`, `<input>`, `<textarea>`, `<select>`), die sich für Phishing nutzen ließen,
- `<style>`-Elemente und `style`-Attribute, mit denen sich Inhalte über die Seite legen ließen.

Alles andere, auch Tabellen, Bilder, `<details>` und Formatierungen im Text, bleibt so, wie du es geschrieben hast.

```html
<p onclick="steal()">Text</p>   <!-- wird zu <p>Text</p> -->
<script>alert(1)</script>       <!-- wird entfernt -->
```

> [!NOTE]
> Hervorgehobener Code behält seine Farben: Clay fügt sie selbst hinzu, nachdem dein HTML bereinigt wurde.
