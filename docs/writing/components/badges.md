---
title: Badges
icon: fa-solid fa-tag
description: Small labels in text and headings, like "New", "Beta" or "Deprecated", in the colors of the alerts.
order: 5
---

# Badges

Badges are small labels in a line of text or a heading: what is new, in beta or on its way out.

```markdown
The `--strict` option :badge[Since 2.0]{tip} fails builds with warnings.
```

The `--strict` option :badge[Since 2.0]{tip} fails builds with warnings.

## Types

Write the badge's text in square brackets, and its type in braces. The types are named like the [alerts](../alerts.md):

| Write | Shows |
|-------|-------|
| `:badge[New]` | :badge[New] |
| `:badge[Info]{info}` | :badge[Info]{info} |
| `:badge[Note]{note}` | :badge[Note]{note} |
| `:badge[Stable]{tip}` | :badge[Stable]{tip} |
| `:badge[Beta]{important}` | :badge[Beta]{important} |
| `:badge[Deprecated]{warning}` | :badge[Deprecated]{warning} |
| `:badge[Removed]{caution}` | :badge[Removed]{caution} |
| `:badge[Unsafe]{danger}` | :badge[Unsafe]{danger} |

A type Clay does not know shows like a badge without a type.

## In headings

```markdown
### clay edit :badge[Since 3.0]{tip}
```

A badge in a heading is part of the heading's text, also for its [`#` link](../links-and-images.md): the heading above is linked as `#clay-edit-since-30`. Put the badge in when you write the heading, so links to it do not change later.

> [!TIP]
> One badge says a lot; a page full of them says nothing. Use them for what readers must not miss.
