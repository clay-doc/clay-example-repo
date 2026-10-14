---
title: Translations
icon: fa-solid fa-language
description: Translate your docs page by page, with a language switcher, fallbacks for untranslated pages and an interface in twelve languages.
order: 2
---

# Translations

Clay sites can come in several languages. You translate page by page, at your own pace: pages that are not translated yet are shown in the original language, so the docs are complete in every language from day one.

This site is an example: switch to **Deutsch** in the navbar.

## Setting up languages

List the languages in `clay.yaml`. The first one is the default language:

```yaml
languages: ["en", "de"]
```

Use language codes like `en`, `de`, `fr`, `pt-BR` or `zh-TW`. The default language lives at the root of the site; every other language under its code:

| Page | English (default) | German |
|------|-------------------|--------|
| Start page | `/` | `/de` |
| `docs/guides/setup.md` | `/guides/setup` | `/de/guides/setup` |
| In version 1.x | `/1.x/guides/setup` | `/1.x/de/guides/setup` |

## Translating a page

Put the translation next to the page and add the language code before `.md`:

```text
docs/guides/
├── setup.md       # English, the original
└── setup.de.md    # German translation
```

The translation is a complete page of its own: its own front matter, its own headings, its own text.

```markdown
---
title: Einrichtung
description: So richtest du das Projekt in fünf Schritten ein.
---

# Das Projekt einrichten
```

Its `title`, `icon` and `description` are its own. Its **position** in the navigation comes from the original, so all languages have the same structure.

## Pages without translation

A page without a translation for a language is shown in that language's navigation anyway, with the original text and a note:

> This page is not translated yet and is shown in English.

For search engines, such a page points to the original, and it is not listed in the sitemap. When you add the translation, it simply takes the page's place.

## Settings per language

Text settings in `clay.yaml` can have one value per language. Missing languages use the default language's value:

```yaml
title:
  en: "My Project"
  de: "Mein Projekt"
index:
  title:
    en: "Welcome"
    de: "Willkommen"
  description:
    en: "Everything you need to know."
    de: "Alles, was du wissen musst."
```

The same works for folder names in `dir-meta.yaml`:

```yaml
- path: "guides"
  name:
    en: "Guides"
    de: "Anleitungen"
```

## The interface

Search, navigation, page footer and notices come in twelve languages:

| | | | |
|---|---|---|---|
| English `en` | German `de` | French `fr` | Spanish `es` |
| Italian `it` | Portuguese `pt` | Dutch `nl` | Polish `pl` |
| Russian `ru` | Japanese `ja` | Chinese `zh` | Korean `ko` |

Regional codes use their base language: `pt-BR` gets Portuguese. Other languages get English, unless you provide the texts.

### Your own texts

`messages` in `clay.yaml` replaces single texts, or provides a language Clay does not ship:

```yaml
languages: ["en", "sv"]
messages:
  sv:
    search: "Sök"
    searchDocs: "Sök i dokumentationen"
    onThisPage: "På den här sidan"
    previous: "Föregående"
    next: "Nästa"
```

The full list of texts and their English defaults is in Clay's [`common/i18n.ts`](https://github.com/clay-doc/clay/blob/main/common/i18n.ts).

## The language switcher

With more than one language, the navbar shows a language switcher. It keeps the page you are reading, and the [version](versions.md). On phones, it sits in the navigation drawer.

## Links in translations

Write links in translations exactly as in the original: relative to the page. `[Setup](setup.md)` in `docs/guides/intro.de.md` leads to `/de/guides/setup`, the German page. Images and files are shared by all languages; a translation references them with the same paths as the original.

## Checks

The build warns about translations without an original (`setup.de.md` without `setup.md`) and about language codes it cannot use. During the build, Clay reports how far each language is:

```text
●  Loaded 29 pages from docs  languages de (27/29 translated)
```
