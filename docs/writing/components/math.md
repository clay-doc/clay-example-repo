---
title: Math
icon: fa-solid fa-square-root-variable
description: Formulas in LaTeX, inline or on a line of their own, typeset with KaTeX when the site is built.
order: 6
---

# Math

Write formulas in LaTeX between dollar signs. Clay typesets them with [KaTeX](https://katex.org) when it builds the site, so pages show them right away, without JavaScript.

## Inline and on their own line

One dollar sign on each side puts a formula into the text:

```markdown
The area of a circle is $A = \pi r^2$.
```

The area of a circle is $A = \pi r^2$.

Two dollar signs on lines of their own set a formula apart, centered:

```markdown
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
```

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## More examples

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
f(x) = \begin{cases} x^2 & \text{if } x \ge 0 \\ -x & \text{otherwise} \end{cases}
$$
```

$$
f(x) = \begin{cases} x^2 & \text{if } x \ge 0 \\ -x & \text{otherwise} \end{cases}
$$

KaTeX lists every command it knows in [its documentation](https://katex.org/docs/supported.html).

## Dollar signs in text

Prices stay text. A dollar sign only starts a formula when no space follows it, and only ends one when no space comes before it and no digit after it: "It costs $5 and $10" is text. To write a dollar sign that would start a formula, put a backslash before it: `\$`.

## Mistakes

A formula KaTeX cannot read is shown in red with its source, instead of failing the build, so you see it on the page: $\frac{1$.

## Accessibility and size

- Every formula is also written as MathML, which screen readers read out.
- Wide formulas scroll sideways on small screens instead of widening the page.
- The fonts for formulas only load on pages that have math.
