---
title: Details
icon: fa-solid fa-square-caret-down
description: Folded sections that readers open when they need them, like FAQs, long logs and background.
order: 4
---

# Details

Details fold content away under a title. Readers open it with a click when they need it.

```markdown
::: details What does Clay do with HTML in my docs?
It keeps safe HTML and removes scripts, forms and styles. See [HTML](../html.md).
:::
```

::: details What does Clay do with HTML in my docs?
It keeps safe HTML and removes scripts, forms and styles. See [HTML](../html.md).
:::

- **The title** follows the name and may use inline Markdown like `code` and **bold**. Without one, the title is "Details" in the language of the page.
- **The content** is any Markdown, including code blocks and other components.
- **Folded content is found by the search.** Opening a result inside it opens the section.

## A list of questions

Several details in a row make a compact FAQ:

```markdown
::: details Does Clay need a server?
No. It builds static HTML that any web host can serve.
:::

::: details Can I use my own domain?
Yes, see [GitHub Pages](../../publishing/github-pages.md).
:::
```

::: details Does Clay need a server?
No. It builds static HTML that any web host can serve.
:::

::: details Can I use my own domain?
Yes, see [GitHub Pages](../../publishing/github-pages.md).
:::

> [!TIP]
> Fold what only some readers need: long output, edge cases, background. What everyone needs belongs on the page.
