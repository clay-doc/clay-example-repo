---
title: Designs & Icons
icon: fa-solid fa-palette
description: Helles und dunkles Design, und wie du Font-Awesome-Icons und -Kits in Clay nutzt.
---

# Designs & Icons

## Hell und dunkel

Clay hat ein helles und ein dunkles Design. Es startet mit der Systemeinstellung der Leser und wechselt mit, wenn das System wechselt. Der Sonnen- oder Mond-Button in der Navigationsleiste wechselt von Hand; die Wahl merkt sich der Browser und wendet sie an, bevor die Seite gezeichnet wird. Seiten blitzen also nie im falschen Design auf.

Codeblöcke werden in zwei Farbschemata hervorgehoben und wechseln zusammen mit der Seite.

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

   ```yaml
   fontawesomeKit: "abc123def4"
   ```
:::

> [!TIP]
> Kits hängen an deinem Konto. Halte die ID aus einem öffentlichen Repository heraus, indem du sie in der CI mit `CLAY_FONTAWESOME_KIT` setzt, wie diese Seite es tut; siehe [Umgebungsvariablen](../configuration/environment-variables.md). Ein Wert, der keine Kit-ID ist, fällt auf die kostenlosen Icons zurück.
