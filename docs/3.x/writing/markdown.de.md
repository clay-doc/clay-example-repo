---
title: Markdown
icon: fa-brands fa-markdown
description: Die Markdown-Syntax, die Clay unterstützt, von Überschriften und Listen bis zu Tabellen und Aufgabenlisten, mit Beispielen.
---

# Markdown

Clay liest [GitHub Flavored Markdown](https://github.github.com/gfm/), das Markdown, das du aus READMEs und Issues auf GitHub kennst. Diese Seite zeigt jedes Element mit Quelltext und Ergebnis.

## Überschriften

```markdown
## Ein Abschnitt
### Ein Unterabschnitt
```

`#` ist die Überschrift der Seite; nutze sie einmal pro Seite. `##`- und `###`-Überschriften erscheinen im Inhaltsverzeichnis und werden zu eigenen Suchergebnissen. Jede Überschrift bekommt einen Anker, gebildet wie auf GitHub, damit du auf einen Abschnitt verlinken kannst: Die Überschrift „Zeilenumbrüche" weiter unten erreichst du über [`#zeilenumbrüche`](#zeilenumbrüche). Fährst du mit der Maus über eine Abschnittsüberschrift, erscheint links ein `#`-Link darauf, bereit zum Kopieren.

## Hervorhebungen

```markdown
**fett**, *kursiv*, ~~durchgestrichen~~ und `Code im Text`
```

**fett**, *kursiv*, ~~durchgestrichen~~ und `Code im Text`

## Zeilenumbrüche

Ein Zeilenumbruch in deinem Text ist ein Zeilenumbruch auf der Seite, wie in Kommentaren auf GitHub. Absätze trennst du mit einer Leerzeile.

```markdown
Erste Zeile
zweite Zeile, im selben Absatz

Ein neuer Absatz
```

Erste Zeile
zweite Zeile, im selben Absatz

Ein neuer Absatz

> [!TIP]
> Schreib jeden Absatz in deinem Editor in eine Zeile und lass ihn den Text umbrechen. Fest umbrochene Absätze zeigen ihre Zeilenumbrüche auf der Seite.

## Listen

```markdown
- Kaffee
- Tee
  - Grüner Tee
  - Schwarzer Tee

1. Installieren
2. Konfigurieren
3. Bauen
```

- Kaffee
- Tee
  - Grüner Tee
  - Schwarzer Tee

1. Installieren
2. Konfigurieren
3. Bauen

## Aufgabenlisten

```markdown
- [x] Dokumentation schreiben
- [x] Seite bauen
- [ ] Veröffentlichen
```

- [x] Dokumentation schreiben
- [x] Seite bauen
- [ ] Veröffentlichen

## Tabellen

Spalten richtest du mit Doppelpunkten in der Trennzeile links, mittig oder rechts aus:

```markdown
| Befehl  | Port | Zweck     |
|:--------|:----:|----------:|
| dev     | 3000 | schreiben |
| preview | 4173 | prüfen    |
```

| Befehl  | Port | Zweck     |
|:--------|:----:|----------:|
| dev     | 3000 | schreiben |
| preview | 4173 | prüfen    |

## Zitate

```markdown
> Dokumentation ist ein Liebesbrief an dein zukünftiges Ich.
```

> Dokumentation ist ein Liebesbrief an dein zukünftiges Ich.

Ein Zitat, das mit `[!NOTE]`, `[!TIP]` und ähnlichem beginnt, wird zu einem [Hinweis](alerts.md).

## Trennlinien

Drei Bindestriche in einer eigenen Zeile ziehen eine Linie über die Seite:

```markdown
---
```

---

## Links, Bilder und Code

Diese Themen haben eigene Seiten:

- [Links und Bilder](links-and-images.md): Links zwischen Seiten, Bilder und Downloads.
- [Codeblöcke](code-blocks.md): Syntaxhervorhebung, hervorgehobene Zeilen und Diffs.
- [Hinweise](alerts.md): Notizen, Tipps und Warnungen.
- [HTML](html.md): HTML in Markdown und was Clay daraus entfernt.
