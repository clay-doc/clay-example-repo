---
title: Themes & Icons
icon: fa-solid fa-palette
description: Light and dark mode, and how to use Font Awesome icons and kits in Clay.
order: 4
---

# Themes & Icons

## Light and dark

Clay has a light and a dark theme. It starts with the reader's system setting and switches along when the system does. The sun or moon button in the navbar switches by hand; the choice is remembered in the browser and applied before the page is drawn, so pages never flash in the wrong theme.

Code blocks are highlighted in two color schemes and switch together with the site.

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

With a Font Awesome account, you can create a [kit](https://docs.fontawesome.com/web/setup/use-kit): a set of icons that can include Pro icons, newer versions or your own uploads. Set the kit's ID in `clay.yaml`:

```yaml
fontawesomeKit: "abc123def4"
```

The ID is the code in the kit's embed URL, `https://kit.fontawesome.com/abc123def4.js`. With a kit, Clay loads the kit instead of the free icons.

> [!TIP]
> Kits are tied to your account. Keep the ID out of a public repository by setting it in CI with `CLAY_FONTAWESOME_KIT`, as this site does; see [environment variables](../configuration/environment-variables.md). A value that is not a kit ID falls back to the free icons.
