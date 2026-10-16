---
title: Themes & Icons
icon: fa-solid fa-palette
description: Light and dark mode, your own colors and fonts, and how to use Font Awesome icons and kits in Clay.
order: 5
---

# Themes & Icons

## Light and dark

Clay has a light and a dark theme. It starts with the reader's system setting and switches along when the system does. The sun or moon button in the navbar switches by hand; the choice is remembered in the browser and applied before the page is drawn, so pages never flash in the wrong theme.

Code blocks are highlighted in two color schemes and switch together with the site.

## Your own colors and fonts :badge[New in Clay 4]{tip}

`theme` in `clay.yaml` gives the site your own look. Everything you leave out keeps Clay's:

```yaml
theme:
  primary: "#2563eb"          # links, buttons, the marks in the navigation
  radius: "0.25rem"           # corners of boxes; fields get half of it
  font: "Lora, serif"         # the text
  codeFont: "JetBrains Mono, monospace"
  dark:
    primary: "#60a5fa"        # light and dark can differ
    background: "#0b1120"
    text: "#e2e8f0"
```

| Setting | What it changes |
|---------|-----------------|
| `primary` | Links, buttons, the active entry in the sidebar and the contents |
| `background`, `text` | The page and its text; boxes and borders are derived from the background |
| `radius` | The corners of boxes, code blocks and buttons, e.g. `0` for square |
| `font`, `codeFont` | The fonts of the text and of code |
| `light`, `dark` | `primary`, `background` and `text` for one mode only |

Colors are written as `#rrggbb` or `#rgb`. Text on the primary color turns black or white, whichever reads better. [Social images](seo.md#social-images) take the colors of the dark mode and the font.

**Fonts from [Google Fonts](https://fonts.google.com)** are downloaded when the site is built and published with it: readers get them without having them installed, and their browsers never contact Google. Other fonts, like Georgia or Helvetica, are used when the reader has them, otherwise the next font in the list.

> [!TIP]
> Keep enough contrast between text and background, at least 4.5 to 1, so everyone can read your docs. Check your colors with a [contrast checker](https://webaim.org/resources/contrastchecker/).

## Icons

Clay uses [Font Awesome](https://fontawesome.com) for icons: pages, folders, the start page and navbar links. Write the icon's classes, as shown on the icon's page on fontawesome.com:

```yaml
icon: fa-solid fa-rocket
```

| Style | Example |
|-------|---------|
| Solid | `fa-solid fa-rocket` <i class="fa-solid fa-rocket"></i> |
| Regular | `fa-regular fa-file` <i class="fa-regular fa-file"></i> |
| Brands | `fa-brands fa-github` <i class="fa-brands fa-github"></i> |

Icons work in Markdown too, as HTML: `<i class="fa-solid fa-star"></i>` gives <i class="fa-solid fa-star"></i>.

### Free icons

Without further setup, Clay loads the free icons of Font Awesome 6. They cover the solid, regular and brands styles, enough for most docs.

### Font Awesome kits

With a Font Awesome account, you can create a [kit](https://docs.fontawesome.com/web/setup/use-kit): a set of icons that can include Pro icons, newer versions or your own uploads. With a kit, Clay loads the kit instead of the free icons.

::: steps
1. **Create a kit** on fontawesome.com and set its technology to **Web Fonts**. Kits set to SVG replace each icon in the page with a drawing, which interferes with how Clay updates pages while readers navigate.
2. **Allow your site's domain** in the kit's settings.
3. **Set the kit's ID** in `clay.yaml`. The ID is the code in the kit's embed URL, `https://kit.fontawesome.com/abc123def4.js`:

   ```yaml [clay.yaml]
   fontawesomeKit: "abc123def4"
   ```
:::

> [!TIP]
> Kits are tied to your account. Keep the ID out of a public repository by setting it in CI with `CLAY_FONTAWESOME_KIT`, as this site does; see [environment variables](../configuration/environment-variables.md). A value that is not a kit ID falls back to the free icons.
