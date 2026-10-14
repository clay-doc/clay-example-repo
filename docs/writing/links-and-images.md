---
title: Links & Images
icon: fa-solid fa-link
description: Linking between pages like on GitHub, linking to sections, adding images and offering downloads.
order: 5
---

# Links & Images

Links in Clay work like links between files on GitHub: you link to the Markdown file, relative to the page you are writing. The same links work on GitHub, in your editor and on the site.

## Links to pages

```markdown
[Installation](../getting-started/installation.md)
[Alerts](alerts.md)
[Code blocks](./code-blocks.md)
```

[Installation](../getting-started/installation.md), [Alerts](alerts.md), [Code blocks](./code-blocks.md)

Clay resolves the path relative to the current page, drops the `.md` and turns it into a link that keeps the site's [base URL](../configuration/clay-yaml.md). Links to folders work too: [the configuration section](../configuration/).

Links starting with `/` start at the root of the docs: `[Pages](/writing/pages.md)` links to `docs/writing/pages.md` from anywhere.

## Links to sections

Add the heading's anchor after `#`:

```markdown
[Highlighting lines](code-blocks.md#highlighting-lines)
[Images](#images)
```

[Highlighting lines](code-blocks.md#highlighting-lines) and [images](#images) on this page.

Anchors are built like GitHub builds them: lowercase, spaces become hyphens, punctuation is dropped. "Links to sections" becomes `#links-to-sections`. When unsure, copy the link from the page's table of contents.

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

> [!TIP]
> Keep images in an `img/` folder next to the pages that use them. Folders without Markdown files never appear in the navigation.

## Downloads

Link to any other file the same way, and readers can download it:

```markdown
[Download the checklist (PDF)](files/checklist.pdf)
```

## Checked on every build

`clay build` checks every link and image in your docs. A link to a page that does not exist, or an image that is missing, is reported as a warning:

```text
▲ Broken link in writing/pages.md: "setup.md" points to a missing page (/writing/setup)
```

With `--strict`, warnings fail the build, so broken links never reach your readers. See [build checks](../cli/build-checks.md).

> [!NOTE]
> Links to other websites and `#anchors` are not checked.
