---
title: Badges
icon: fa-solid fa-tag
description: Kleine Etiketten in Text und Überschriften, etwa „Neu“, „Beta“ oder „Veraltet“, in den Farben der Hinweise.
---

# Badges

Badges sind kleine Etiketten in einer Textzeile oder Überschrift: was neu ist, in Beta oder bald wegfällt.

```markdown
Die Option `--strict` :badge[Seit 2.0]{tip} lässt Builds mit Warnungen scheitern.
```

Die Option `--strict` :badge[Seit 2.0]{tip} lässt Builds mit Warnungen scheitern.

## Arten

Schreib den Text des Badges in eckige Klammern und seine Art in geschweifte. Die Arten heißen wie die [Hinweise](../alerts.md):

| Schreibweise | Ergebnis |
|--------------|----------|
| `:badge[Neu]` | :badge[Neu] |
| `:badge[Info]{info}` | :badge[Info]{info} |
| `:badge[Notiz]{note}` | :badge[Notiz]{note} |
| `:badge[Stabil]{tip}` | :badge[Stabil]{tip} |
| `:badge[Beta]{important}` | :badge[Beta]{important} |
| `:badge[Veraltet]{warning}` | :badge[Veraltet]{warning} |
| `:badge[Entfernt]{caution}` | :badge[Entfernt]{caution} |
| `:badge[Unsicher]{danger}` | :badge[Unsicher]{danger} |

Eine Art, die Clay nicht kennt, sieht aus wie ein Badge ohne Art.

## In Überschriften

```markdown
### clay edit :badge[Seit 3.0]{tip}
```

Ein Badge in einer Überschrift gehört zu ihrem Text, auch für ihren [`#`-Link](../links-and-images.md): Die Überschrift oben wird als `#clay-edit-seit-30` verlinkt. Füge den Badge gleich beim Schreiben der Überschrift ein, damit sich Links darauf später nicht ändern.

> [!TIP]
> Ein Badge sagt viel; eine Seite voller Badges sagt nichts. Nutze sie für das, was Leser nicht übersehen dürfen.
