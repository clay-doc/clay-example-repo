---
title: HTML
icon: fa-brands fa-html5
description: Using HTML inside Markdown, and what Clay removes to keep your site safe.
order: 6
---

# HTML

Markdown covers most needs, but sometimes HTML does the job better. You can write HTML directly in your pages:

```html
<details>
  <summary>Show the full configuration</summary>

  Everything in here is hidden until the reader opens it.
</details>
```

<details>
  <summary>Show the full configuration</summary>

  Everything in here is hidden until the reader opens it.
</details>

Other useful elements:

| HTML | Result |
|------|--------|
| `<kbd>Ctrl</kbd> + <kbd>K</kbd>` | <kbd>Ctrl</kbd> + <kbd>K</kbd> |
| `H<sub>2</sub>O` | H<sub>2</sub>O |
| `E = mc<sup>2</sup>` | E = mc<sup>2</sup> |
| `<mark>marked</mark>` | <mark>marked</mark> |

## What Clay removes

Docs are often written by many people, including outside contributors. To keep a page from harming its readers, Clay cleans the HTML of every page with [DOMPurify](https://github.com/cure53/DOMPurify) when it builds the site. It removes:

- `<script>` elements and event handlers like `onclick` or `onerror`,
- `javascript:` links,
- forms and their fields (`<form>`, `<input>`, `<textarea>`, `<select>`), which could be used for phishing,
- `<style>` elements and `style` attributes, which could lay content over the page.

Everything else, including tables, images, `<details>` and inline formatting, stays as you wrote it.

```html
<p onclick="steal()">Text</p>   <!-- becomes <p>Text</p> -->
<script>alert(1)</script>       <!-- removed -->
```

> [!NOTE]
> Highlighted code keeps its colors: they are added by Clay itself, after your HTML has been cleaned.
