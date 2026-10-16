---
title: Links & Images
icon: fa-solid fa-link
description: Linking between pages like on GitHub, linking to sections, adding images and offering downloads.
order: 6
---

# Links & Images

Links in Clay work like links between files on GitHub: you link to the Markdown file, relative to the page you are writing. The same links work on GitHub, in your editor and on the site.

## Links to pages

::: tabs
== Result
[Installation](../getting-started/installation.md), [Alerts](alerts.md), [Code blocks](./code-blocks.md)
== Markdown
```markdown
[Installation](../getting-started/installation.md)
[Alerts](alerts.md)
[Code blocks](./code-blocks.md)
```
:::

Clay resolves the path relative to the current page, drops the `.md` and turns it into a link that keeps the site's [base URL](../configuration/clay-yaml.md). Links to folders lead to the folder's page: [the configuration section](../configuration/) or [the configuration section](../configuration/index.md).

Links starting with `/` start at the root of the docs: `[Pages](/writing/pages.md)` links to `docs/writing/pages.md` from anywhere.

## Links to sections

Add the heading's anchor after `#`:

::: tabs
== Result
[Highlighting lines](code-blocks.md#highlighting-lines) and [images](#images) on this page.
== Markdown
```markdown
[Highlighting lines](code-blocks.md#highlighting-lines)
[Images](#images)
```
:::

Anchors are built like GitHub builds them: lowercase, spaces become hyphens, punctuation is dropped. "Links to sections" becomes `#links-to-sections`. When unsure, copy the `#` link next to the heading on the page.

## Links to other websites

```markdown
[Shiki](https://shiki.style)
[Write to us](mailto:docs@example.com)
```

Links to other websites open in a new tab. `mailto:`, `tel:` and similar links are left to the browser.

## Images

Put images next to your pages and reference them relative to the page:

```markdown
![The Clay logo](../../logo.svg)
![Build steps](img/build-steps.png)
```

The text in brackets describes the image for screen readers and search engines; always write one. Clay copies every file in `docs/` into the site, so `docs/writing/img/build-steps.png` is published next to this page.

```tree
docs/writing/
  links-and-images.md
  img/                  # never shows in the navigation: no pages inside
    build-steps.png
```

## Downloads

Link to any other file the same way, and readers can download it:

```markdown
[Download the checklist (PDF)](files/checklist.pdf)
```

## Checked on every build

`clay build` checks every link and image in your docs: pages, files and sections. A link that leads nowhere is reported as a warning:

```text
▲ Broken link in writing/pages.md: "setup.md" points to a missing page (/writing/setup)
▲ Broken link in writing/pages.md: "alerts.md#tipps" points to a missing section (#tipps on /writing/alerts)
```

With `--strict`, warnings fail the build, so broken links never reach your readers. Links to other websites are not checked. See [build checks](../publishing/build-checks.md).
