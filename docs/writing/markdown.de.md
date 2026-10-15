---
title: Markdown
icon: fa-brands fa-markdown
description: Clay Flavored Markdown - GitHubs Markdown plus Hinweise, Komponenten, Formeln und Diagramme - von Überschriften und Listen bis zu Tabellen und Aufgabenlisten, mit Beispielen.
---

# Markdown

Clay liest **Clay Flavored Markdown** (CFM): [GitHub Flavored Markdown](https://github.github.com/gfm/), das Markdown aus READMEs und Issues auf GitHub, plus [Hinweise](alerts.md), [Komponenten](components/index.md), [Formeln](components/math.md) und [Diagramme](components/diagrams.md). Alles, was GitHub zeigt, funktioniert auch in Clay, und was Clay ergänzt, bleibt auf GitHub lesbar. Jedes Element unten zeigt sein Ergebnis und seinen Quelltext; wähl einmal **Markdown**, um überall den Quelltext zu sehen.

## Überschriften

```markdown
## Ein Abschnitt
### Ein Unterabschnitt
```

`#` ist die Überschrift der Seite; nutze sie einmal pro Seite. `##`- und `###`-Überschriften erscheinen im Inhaltsverzeichnis und werden zu eigenen Suchergebnissen. Jede Überschrift bekommt einen Anker, gebildet wie auf GitHub, damit du auf einen Abschnitt verlinken kannst: Die Überschrift „Zeilenumbrüche“ unten erreichst du als [`#zeilenumbrüche`](#zeilenumbrüche). Fährst du über eine Abschnittsüberschrift, erscheint links ein `#`-Link zum Kopieren.

## Hervorhebung

::: tabs
== Ergebnis
**fett**, *kursiv*, ~~durchgestrichen~~ und `Code im Text`
== Markdown
```markdown
**fett**, *kursiv*, ~~durchgestrichen~~ und `Code im Text`
```
:::

## Zeilenumbrüche

Ein Zeilenumbruch im Text ist ein Zeilenumbruch auf der Seite, wie in GitHub-Kommentaren. Trenne Absätze mit einer leeren Zeile.

::: tabs
== Ergebnis
Erste Zeile
zweite Zeile, im selben Absatz

Ein neuer Absatz
== Markdown
```markdown
Erste Zeile
zweite Zeile, im selben Absatz

Ein neuer Absatz
```
:::

> [!TIP]
> Schreib jeden Absatz in eine Zeile und lass deinen Editor umbrechen. Von Hand umbrochene Absätze zeigen ihre Umbrüche auf der Seite.

## Listen

::: tabs
== Ergebnis
- Kaffee
- Tee
  - Grüner Tee
  - Schwarzer Tee

1. Installieren
2. Konfigurieren
3. Bauen
== Markdown
```markdown
- Kaffee
- Tee
  - Grüner Tee
  - Schwarzer Tee

1. Installieren
2. Konfigurieren
3. Bauen
```
:::

Für Anleitungen in einer Reihenfolge zeigen [Schritte](components/steps.md) eine nummerierte Liste als Anleitung.

## Aufgabenlisten

::: tabs
== Ergebnis
- [x] Dokumentation schreiben
- [x] Seite bauen
- [ ] Veröffentlichen
== Markdown
```markdown
- [x] Dokumentation schreiben
- [x] Seite bauen
- [ ] Veröffentlichen
```
:::

## Tabellen

Spalten lassen sich mit Doppelpunkten in der Trennzeile links, mittig oder rechts ausrichten:

::: tabs
== Ergebnis
| Befehl  | Port | Zweck      |
|:--------|:----:|-----------:|
| dev     | 3000 | schreiben  |
| preview | 4173 | prüfen     |
== Markdown
```markdown
| Befehl  | Port | Zweck      |
|:--------|:----:|-----------:|
| dev     | 3000 | schreiben  |
| preview | 4173 | prüfen     |
```
:::

## Zitate

::: tabs
== Ergebnis
> Dokumentation ist ein Liebesbrief an dein zukünftiges Ich.
== Markdown
```markdown
> Dokumentation ist ein Liebesbrief an dein zukünftiges Ich.
```
:::

Ein Zitat, das mit `[!NOTE]`, `[!TIP]` oder ähnlichem beginnt, wird zu einem [Hinweis](alerts.md).

## Waagerechte Linien

Drei Bindestriche in einer eigenen Zeile ziehen eine Linie über die Seite:

```markdown
---
```

---

## Mehr als Markdown

::: cards
- [Links & Bilder](links-and-images.md)
- [Codeblöcke](code-blocks.md)
- [Hinweise](alerts.md)
- [Komponenten](components/index.md)
- [HTML](html.md)
:::
