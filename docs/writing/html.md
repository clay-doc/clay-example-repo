---
title: HTML
icon: fa-brands fa-html5
description: Using HTML inside Markdown, videos and embeds, and what Clay removes to keep your site safe.
order: 7
---

# HTML

Markdown and the [components](components/index.md) cover most needs, but sometimes HTML does the job better. You can write HTML directly in your pages:

| HTML | Result |
|------|--------|
| `<kbd>Ctrl</kbd> + <kbd>K</kbd>` | <kbd>Ctrl</kbd> + <kbd>K</kbd> |
| `H<sub>2</sub>O` | H<sub>2</sub>O |
| `E = mc<sup>2</sup>` | E = mc<sup>2</sup> |
| `<mark>marked</mark>` | <mark>marked</mark> |
| `<abbr title="Static Site Generator">SSG</abbr>` | <abbr title="Static Site Generator">SSG</abbr> |

> [!TIP]
> For folded sections, use [details](components/details.md) instead of `<details>`: it is shorter, and styled like the rest of the site.

## Videos and embeds

Paste the embed code that YouTube, Vimeo or Figma give you, as it is:

```html
<iframe src="https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ" title="Big Buck Bunny"
  allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
```

<iframe src="https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ" title="Big Buck Bunny"
  allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>

Embeds fill the width of the page in the shape of a video, also on phones, and load only when readers scroll to them. These services can be embedded:

| Service | Embed address starts with |
|---------|---------------------------|
| YouTube | `https://www.youtube.com/embed/`, `https://www.youtube-nocookie.com/embed/` |
| Vimeo | `https://player.vimeo.com/video/` |
| Loom | `https://www.loom.com/embed/` |
| Figma | `https://www.figma.com/embed`, `https://embed.figma.com/` |
| CodePen, CodeSandbox, StackBlitz | `https://codepen.io/`, `https://codesandbox.io/`, `https://stackblitz.com/` |
| Google Maps | `https://www.google.com/maps/embed` |

Frames of any other site are removed: they could show a fake login form inside your docs.

Your own videos go next to the page, like images, and play with `<video>`:

```html
<video src="img/demo.mp4" poster="img/demo.png" controls muted playsinline></video>
```

> [!TIP]
> `youtube-nocookie.com` plays the same videos, without YouTube setting cookies before readers press play.

## What Clay removes

Docs are often written by many people, including outside contributors. To keep a page from harming its readers, Clay cleans the HTML of every page with [DOMPurify](https://github.com/cure53/DOMPurify) when it builds the site. It removes:

- `<script>` elements and event handlers like `onclick` or `onerror`,
- `javascript:` links,
- forms and their fields (`<form>`, `<input>`, `<textarea>`, `<select>`), which could be used for phishing,
- `<style>` elements and `style` attributes, which could lay content over the page,
- frames (`<iframe>`) of sites other than the [embeds](#videos-and-embeds) above.

Everything else, including tables, images, `<details>` and inline formatting, stays as you wrote it.

```html
<p onclick="steal()">Text</p>   <!-- becomes <p>Text</p> -->
<script>alert(1)</script>       <!-- removed -->
```

> [!NOTE]
> Highlighted code, math and components keep their look: Clay adds their styles itself, after your HTML has been cleaned.
