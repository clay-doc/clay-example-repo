---
title: Formeln
icon: fa-solid fa-square-root-variable
description: Formeln in LaTeX, im Text oder in einer eigenen Zeile, gesetzt mit KaTeX beim Build der Seite.
---

# Formeln

Schreib Formeln in LaTeX zwischen Dollarzeichen. Clay setzt sie beim Build mit [KaTeX](https://katex.org), Seiten zeigen sie also sofort, ohne JavaScript.

## Im Text und in einer eigenen Zeile

Ein Dollarzeichen auf jeder Seite setzt eine Formel in den Text:

```markdown
Die Fläche eines Kreises ist $A = \pi r^2$.
```

Die Fläche eines Kreises ist $A = \pi r^2$.

Zwei Dollarzeichen in eigenen Zeilen stellen eine Formel frei, zentriert:

```markdown
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
```

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## Weitere Beispiele

```markdown
$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}
\begin{pmatrix} x \\ y \end{pmatrix}
=
\begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}
$$
```

$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}
\begin{pmatrix} x \\ y \end{pmatrix}
=
\begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}
$$

```markdown
$$
f(x) = \begin{cases} x^2 & \text{falls } x \ge 0 \\ -x & \text{sonst} \end{cases}
$$
```

$$
f(x) = \begin{cases} x^2 & \text{falls } x \ge 0 \\ -x & \text{sonst} \end{cases}
$$

KaTeX listet jeden Befehl, den es kennt, in [seiner Dokumentation](https://katex.org/docs/supported.html).

## Dollarzeichen im Text

Preise bleiben Text. Ein Dollarzeichen beginnt nur dann eine Formel, wenn kein Leerzeichen folgt, und beendet sie nur, wenn davor kein Leerzeichen und danach keine Ziffer steht: „Es kostet $5 und $10“ ist Text. Für ein Dollarzeichen, das eine Formel beginnen würde, setze einen Backslash davor: `\$`.

## Fehler

Eine Formel, die KaTeX nicht lesen kann, erscheint rot mit ihrem Quelltext, statt den Build scheitern zu lassen; so siehst du sie auf der Seite: $\frac{1$.

## Barrierefreiheit und Größe

- Jede Formel steht zusätzlich als MathML in der Seite, das Screenreader vorlesen.
- Breite Formeln scrollen auf kleinen Bildschirmen seitlich, statt die Seite zu verbreitern.
- Die Schriften für Formeln laden nur auf Seiten mit Formeln.
