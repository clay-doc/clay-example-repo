---
title: Details
icon: fa-solid fa-square-caret-down
description: Eingeklappte Abschnitte, die Leser öffnen, wenn sie sie brauchen, etwa FAQs, lange Logs und Hintergründe.
---

# Details

Details klappen Inhalt unter einem Titel ein. Leser öffnen ihn mit einem Klick, wenn sie ihn brauchen.

```markdown
::: details Was macht Clay mit HTML in meiner Dokumentation?
Es behält sicheres HTML und entfernt Skripte, Formulare und Styles. Siehe [HTML](../html.md).
:::
```

::: details Was macht Clay mit HTML in meiner Dokumentation?
Es behält sicheres HTML und entfernt Skripte, Formulare und Styles. Siehe [HTML](../html.md).
:::

- **Der Titel** folgt auf den Namen und darf Markdown im Text nutzen, etwa `Code` und **fett**. Ohne Titel heißt er „Details“ in der Sprache der Seite.
- **Der Inhalt** ist beliebiges Markdown, auch Codeblöcke und andere Komponenten.
- **Eingeklappter Inhalt wird von der Suche gefunden.** Ein Ergebnis darin öffnet den Abschnitt.

## Eine Liste von Fragen

Mehrere Details hintereinander ergeben eine kompakte FAQ:

```markdown
::: details Braucht Clay einen Server?
Nein. Es erzeugt statisches HTML, das jeder Webhoster ausliefern kann.
:::

::: details Kann ich meine eigene Domain nutzen?
Ja, siehe [GitHub Pages](../../publishing/github-pages.md).
:::
```

::: details Braucht Clay einen Server?
Nein. Es erzeugt statisches HTML, das jeder Webhoster ausliefern kann.
:::

::: details Kann ich meine eigene Domain nutzen?
Ja, siehe [GitHub Pages](../../publishing/github-pages.md).
:::

> [!TIP]
> Klapp ein, was nur manche Leser brauchen: lange Ausgaben, Sonderfälle, Hintergründe. Was alle brauchen, gehört auf die Seite.
