---
title: Links & Bilder
icon: fa-solid fa-link
description: Seiten verlinken wie auf GitHub, auf Abschnitte verlinken, Bilder einbinden und Downloads anbieten.
---

# Links & Bilder

Links funktionieren in Clay wie Links zwischen Dateien auf GitHub: Du verlinkst die Markdown-Datei, relativ zur Seite, an der du schreibst. Dieselben Links funktionieren auf GitHub, in deinem Editor und auf der Seite.

## Links zu Seiten

```markdown
[Installation](../getting-started/installation.md)
[Hinweise](alerts.md)
[Codeblöcke](./code-blocks.md)
```

[Installation](../getting-started/installation.md), [Hinweise](alerts.md), [Codeblöcke](./code-blocks.md)

Clay löst den Pfad relativ zur aktuellen Seite auf, lässt das `.md` weg und macht daraus einen Link, der die [Basis-URL](../configuration/clay-yaml.md) der Seite beibehält. Links zu Ordnern funktionieren auch und führen zur Seite des Ordners: [der Abschnitt Konfiguration](../configuration/) oder [der Abschnitt Konfiguration](../configuration/index.md).

Links, die mit `/` beginnen, starten an der Wurzel der Dokumentation: `[Seiten](/writing/pages.md)` verlinkt von überall auf `docs/writing/pages.md`.

## Links zu Abschnitten

Hänge den Anker der Überschrift nach `#` an:

```markdown
[Zeilen hervorheben](code-blocks.md#zeilen-hervorheben)
[Bilder](#bilder)
```

[Zeilen hervorheben](code-blocks.md#zeilen-hervorheben) und [Bilder](#bilder) auf dieser Seite.

Anker entstehen wie auf GitHub: kleingeschrieben, Leerzeichen werden zu Bindestrichen, Satzzeichen fallen weg. „Links zu Abschnitten" wird zu `#links-zu-abschnitten`. Im Zweifel kopierst du den Link aus dem Inhaltsverzeichnis der Seite. Jeder Build prüft, ob es den Abschnitt gibt.

> [!NOTE]
> Anker hängen am Text der Überschrift, und der ist in jeder Sprache anders. In einer Übersetzung verlinkst du deshalb die Anker der übersetzten Überschriften.

## Links zu anderen Websites

```markdown
[Shiki](https://shiki.style)
[Schreib uns](mailto:docs@example.com)
```

Links zu anderen Websites öffnen sich in einem neuen Tab. `mailto:`, `tel:` und ähnliche Links überlässt Clay dem Browser.

## Bilder

Lege Bilder neben deine Seiten und binde sie relativ zur Seite ein:

```markdown
![Das Clay-Logo](../../logo.svg)
![Build-Schritte](img/build-steps.png)
```

Der Text in den eckigen Klammern beschreibt das Bild für Screenreader und Suchmaschinen; schreib immer einen. Clay kopiert jede Datei aus `docs/` in die Seite, `docs/writing/img/build-steps.png` liegt also neben dieser Seite.

> [!TIP]
> Halte Bilder in einem Ordner `img/` neben den Seiten, die sie nutzen. Ordner ohne Markdown-Dateien erscheinen nie in der Navigation.

Bilder und Dateien teilen sich alle Sprachen: Eine Übersetzung bindet sie mit denselben Pfaden ein wie das Original.

## Downloads

Verlinke jede andere Datei genauso, und Leser können sie herunterladen:

```markdown
[Checkliste herunterladen (PDF)](files/checklist.pdf)
```

## Bei jedem Build geprüft

`clay build` prüft jeden Link und jedes Bild deiner Dokumentation. Ein Link auf eine Seite, die es nicht gibt, oder ein fehlendes Bild wird als Warnung gemeldet:

```text
▲ Broken link in writing/pages.md: "setup.md" points to a missing page (/writing/setup)
```

Mit `--strict` lassen Warnungen den Build scheitern, und kaputte Links erreichen deine Leser nie. Siehe [Build-Prüfungen](../cli/build-checks.md).

> [!NOTE]
> Links zu anderen Websites werden nicht geprüft.
