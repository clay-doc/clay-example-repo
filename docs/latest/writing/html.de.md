---
title: HTML
icon: fa-brands fa-html5
description: HTML in Markdown nutzen, Videos und Einbettungen, und was Clay entfernt, um deine Seite sicher zu halten.
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

## Videos und Einbettungen :badge[Neu in Clay 4]{tip}

Füge den Einbettungscode, den dir YouTube, Vimeo oder Figma geben, so ein, wie er ist:

```html
<iframe src="https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ" title="Big Buck Bunny"
  allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
```

<iframe src="https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ" title="Big Buck Bunny"
  allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>

Einbettungen füllen die Breite der Seite im Format eines Videos, auch auf dem Handy, und laden erst, wenn Leser zu ihnen scrollen. Diese Dienste lassen sich einbetten:

| Dienst | Adresse der Einbettung beginnt mit |
|--------|------------------------------------|
| YouTube | `https://www.youtube.com/embed/`, `https://www.youtube-nocookie.com/embed/` |
| Vimeo | `https://player.vimeo.com/video/` |
| Loom | `https://www.loom.com/embed/` |
| Figma | `https://www.figma.com/embed`, `https://embed.figma.com/` |
| CodePen, CodeSandbox, StackBlitz | `https://codepen.io/`, `https://codesandbox.io/`, `https://stackblitz.com/` |
| Google Maps | `https://www.google.com/maps/embed` |

Frames aller anderen Seiten werden entfernt: Sie könnten ein gefälschtes Anmeldeformular in deiner Dokumentation zeigen.

Eigene Videos liegen wie Bilder neben der Seite und laufen mit `<video>`:

```html
<video src="img/demo.mp4" poster="img/demo.png" controls muted playsinline></video>
```

> [!TIP]
> `youtube-nocookie.com` spielt dieselben Videos, ohne dass YouTube Cookies setzt, bevor Leser auf Play drücken.

## Was Clay entfernt

Dokumentation schreiben oft viele Menschen, auch von außerhalb. Damit eine Seite ihren Lesern nicht schaden kann, bereinigt Clay beim Build das HTML jeder Seite mit [DOMPurify](https://github.com/cure53/DOMPurify). Es entfernt:

- `<script>`-Elemente und Event-Handler wie `onclick` oder `onerror`,
- `javascript:`-Links,
- Formulare und ihre Felder (`<form>`, `<input>`, `<textarea>`, `<select>`), die sich für Phishing nutzen ließen,
- `<style>`-Elemente und `style`-Attribute, mit denen sich Inhalte über die Seite legen ließen,
- Frames (`<iframe>`) anderer Seiten als der [Einbettungen](#videos-und-einbettungen) oben.

Alles andere, darunter Tabellen, Bilder, `<details>` und Formatierungen im Text, bleibt, wie du es geschrieben hast.

```html
<p onclick="steal()">Text</p>   <!-- wird zu <p>Text</p> -->
<script>alert(1)</script>       <!-- entfernt -->
```

> [!NOTE]
> Hervorgehobener Code, Formeln und Komponenten behalten ihr Aussehen: Clay fügt ihre Styles selbst hinzu, nachdem dein HTML bereinigt ist.
