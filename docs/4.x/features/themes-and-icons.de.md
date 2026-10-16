---
title: Designs & Icons
icon: fa-solid fa-palette
description: Helles und dunkles Design, eigene Farben und Schriften, und wie du Font-Awesome-Icons und -Kits in Clay nutzt.
---

# Designs & Icons

## Hell und dunkel

Clay hat ein helles und ein dunkles Design. Es startet mit der Systemeinstellung der Leser und wechselt mit, wenn das System wechselt. Der Sonnen- oder Mond-Button in der Navigationsleiste wechselt von Hand; die Wahl merkt sich der Browser und wendet sie an, bevor die Seite gezeichnet wird. Seiten blitzen also nie im falschen Design auf.

Codeblöcke werden in zwei Farbschemata hervorgehoben und wechseln zusammen mit der Seite.

## Eigene Farben und Schriften :badge[Neu in Clay 4]{tip}

`theme` in der `clay.yaml` gibt der Seite dein eigenes Aussehen. Alles, was du weglässt, bleibt wie bei Clay:

```yaml
theme:
  primary: "#2563eb"          # Links, Buttons, die Markierungen in der Navigation
  radius: "0.25rem"           # Ecken von Kästen; Felder bekommen die Hälfte
  font: "Lora, serif"         # der Text
  codeFont: "JetBrains Mono, monospace"
  dark:
    primary: "#60a5fa"        # hell und dunkel können sich unterscheiden
    background: "#0b1120"
    text: "#e2e8f0"
```

| Einstellung | Was sie ändert |
|-------------|----------------|
| `primary` | Links, Buttons, der aktive Eintrag in der Seitenleiste und im Inhaltsverzeichnis |
| `background`, `text` | Die Seite und ihr Text; Kästen und Rahmen leiten sich vom Hintergrund ab |
| `radius` | Die Ecken von Kästen, Codeblöcken und Buttons, etwa `0` für eckig |
| `font`, `codeFont` | Die Schriften des Texts und des Codes |
| `light`, `dark` | `primary`, `background` und `text` nur für einen Modus |

Farben schreibst du als `#rrggbb` oder `#rgb`. Text auf der Hauptfarbe wird schwarz oder weiß, je nachdem, was besser lesbar ist. [Vorschaubilder](seo.md#vorschaubilder) nehmen die Farben des dunklen Modus und die Schrift.

**Schriften von [Google Fonts](https://fonts.google.com)** werden beim Bauen heruntergeladen und mit der Seite veröffentlicht: Leser bekommen sie, ohne sie installiert zu haben, und ihre Browser kontaktieren Google nie. Andere Schriften, etwa Georgia oder Helvetica, werden genutzt, wenn der Leser sie hat, sonst die nächste Schrift der Liste.

> [!TIP]
> Halte genug Kontrast zwischen Text und Hintergrund, mindestens 4,5 zu 1, damit alle deine Dokumentation lesen können. Prüf deine Farben mit einem [Kontrast-Prüfer](https://webaim.org/resources/contrastchecker/).

## Icons

Clay nutzt [Font Awesome](https://fontawesome.com) für Icons: bei Seiten, Ordnern, der Startseite und Links in der Navigationsleiste. Schreib die Klassen des Icons, wie sie auf seiner Seite bei fontawesome.com stehen:

```yaml
icon: fa-solid fa-rocket
```

| Stil | Beispiel |
|------|----------|
| Solid | `fa-solid fa-rocket` <i class="fa-solid fa-rocket"></i> |
| Regular | `fa-regular fa-file` <i class="fa-regular fa-file"></i> |
| Brands | `fa-brands fa-github` <i class="fa-brands fa-github"></i> |

Icons funktionieren auch in Markdown, als HTML: `<i class="fa-solid fa-star"></i>` ergibt <i class="fa-solid fa-star"></i>.

### Kostenlose Icons

Ohne weitere Einrichtung lädt Clay die kostenlosen Icons von Font Awesome 6. Sie umfassen die Stile Solid, Regular und Brands, genug für die meisten Dokumentationen.

### Font-Awesome-Kits

Mit einem Font-Awesome-Konto kannst du ein [Kit](https://docs.fontawesome.com/web/setup/use-kit) anlegen: eine Sammlung von Icons, die Pro-Icons, neuere Versionen oder eigene Uploads enthalten kann. Mit einem Kit lädt Clay das Kit statt der kostenlosen Icons.

::: steps
1. **Leg ein Kit an** auf fontawesome.com und stell seine Technologie auf **Web Fonts**. Auf SVG gestellte Kits ersetzen jedes Icon in der Seite durch eine Zeichnung, was sich mit der Art stört, wie Clay Seiten beim Navigieren aktualisiert.
2. **Erlaube die Domain deiner Seite** in den Einstellungen des Kits.
3. **Trag die ID des Kits** in die `clay.yaml` ein. Die ID ist der Code in der Einbettungs-URL des Kits, `https://kit.fontawesome.com/abc123def4.js`:

   ```yaml [clay.yaml]
   fontawesomeKit: "abc123def4"
   ```
:::

> [!TIP]
> Kits hängen an deinem Konto. Halte die ID aus einem öffentlichen Repository heraus, indem du sie in der CI mit `CLAY_FONTAWESOME_KIT` setzt, wie diese Seite es tut; siehe [Umgebungsvariablen](../configuration/environment-variables.md). Ein Wert, der keine Kit-ID ist, fällt auf die kostenlosen Icons zurück.
