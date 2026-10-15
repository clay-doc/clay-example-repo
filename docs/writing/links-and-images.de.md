---
title: Links & Bilder
icon: fa-solid fa-link
description: Zwischen Seiten verlinken wie auf GitHub, auf Abschnitte verlinken, Bilder einfügen und Downloads anbieten.
---

# Links & Bilder

Links funktionieren in Clay wie Links zwischen Dateien auf GitHub: Du verlinkst die Markdown-Datei, relativ zur Seite, die du schreibst. Dieselben Links funktionieren auf GitHub, in deinem Editor und auf der Seite.

## Links auf Seiten

::: tabs
== Ergebnis
[Installation](../getting-started/installation.md), [Hinweise](alerts.md), [Codeblöcke](./code-blocks.md)
== Markdown
```markdown
[Installation](../getting-started/installation.md)
[Hinweise](alerts.md)
[Codeblöcke](./code-blocks.md)
```
:::

Clay löst den Pfad relativ zur aktuellen Seite auf, lässt `.md` weg und macht daraus einen Link, der die [Basis-URL](../configuration/clay-yaml.md) der Seite berücksichtigt. Links auf Ordner führen zur Seite des Ordners: [der Bereich Konfiguration](../configuration/) oder [der Bereich Konfiguration](../configuration/index.md).

Links, die mit `/` beginnen, starten an der Wurzel der Dokumentation: `[Seiten](/writing/pages.md)` verweist von überall auf `docs/writing/pages.md`.

## Links auf Abschnitte

Häng den Anker der Überschrift nach `#` an:

::: tabs
== Ergebnis
[Zeilen hervorheben](code-blocks.md#zeilen-hervorheben) und [Bilder](#bilder) auf dieser Seite.
== Markdown
```markdown
[Zeilen hervorheben](code-blocks.md#zeilen-hervorheben)
[Bilder](#bilder)
```
:::

Anker entstehen wie auf GitHub: kleingeschrieben, Leerzeichen werden zu Bindestrichen, Satzzeichen fallen weg. Aus „Links auf Abschnitte“ wird `#links-auf-abschnitte`. Im Zweifel kopier den `#`-Link neben der Überschrift auf der Seite.

## Links auf andere Websites

```markdown
[Shiki](https://shiki.style)
[Schreib uns](mailto:docs@example.com)
```

Links auf andere Websites öffnen sich in einem neuen Tab. `mailto:`-, `tel:`- und ähnliche Links überlässt Clay dem Browser.

## Bilder

Leg Bilder neben deine Seiten und verweise relativ zur Seite auf sie:

```markdown
![Das Clay-Logo](../../logo.svg)
![Build-Schritte](img/build-steps.png)
```

Der Text in eckigen Klammern beschreibt das Bild für Screenreader und Suchmaschinen; schreib immer einen. Clay kopiert jede Datei in `docs/` in die Seite, `docs/writing/img/build-steps.png` wird also neben dieser Seite veröffentlicht.

```tree
docs/writing/
  links-and-images.md
  img/                  # erscheint nie in der Navigation: keine Seiten darin
    build-steps.png
```

## Downloads

Verlinke jede andere Datei auf dieselbe Weise, und Leser können sie herunterladen:

```markdown
[Checkliste herunterladen (PDF)](files/checklist.pdf)
```

## Bei jedem Build geprüft

`clay build` prüft jeden Link und jedes Bild deiner Dokumentation: Seiten, Dateien und Abschnitte. Ein Link, der ins Leere führt, wird als Warnung gemeldet:

```text
▲ Broken link in writing/pages.md: "setup.md" points to a missing page (/writing/setup)
▲ Broken link in writing/pages.md: "alerts.md#tipps" points to a missing section (#tipps on /writing/alerts)
```

Mit `--strict` lassen Warnungen den Build scheitern, kaputte Links erreichen deine Leser also nie. Links auf andere Websites werden nicht geprüft. Siehe [Build-Prüfungen](../publishing/build-checks.md).
