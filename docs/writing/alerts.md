---
title: Alerts
icon: fa-solid fa-circle-exclamation
description: Six kinds of callouts for notes, tips and warnings, written with GitHub's alert syntax.
order: 4
---

# Alerts

Alerts make important information stand out. They use [GitHub's alert syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts): a quote whose first line names the kind of alert.

```markdown
> [!NOTE]
> Clay ignores files whose names start with a dot.
```

> [!NOTE]
> Clay ignores files whose names start with a dot.

## All kinds

> [!NOTE]
> Background information readers should notice, even when skimming.

> [!TIP]
> A shortcut or a better way to do something.

> [!IMPORTANT]
> Something readers need to know to succeed.

> [!WARNING]
> Something that can go wrong and needs attention.

> [!CAUTION]
> The consequences of an action, like losing data.

> [!DANGER]
> A serious risk. `DANGER` is a Clay addition; GitHub shows it as a plain quote.

## Content in alerts

Alerts can hold everything a quote can: several paragraphs, lists, links and code.

```markdown
> [!WARNING]
> Renaming a page changes its URL. Before you rename one:
>
> - search the docs for links to it,
> - update links from other websites if you can.
>
> Run `npx clay build --strict` to find broken links.
```

> [!WARNING]
> Renaming a page changes its URL. Before you rename one:
>
> - search the docs for links to it,
> - update links from other websites if you can.
>
> Run `npx clay build --strict` to find broken links.

> [!TIP]
> Use alerts sparingly. A page full of alerts makes none of them stand out.
