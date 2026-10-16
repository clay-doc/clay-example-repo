---
title: Weiterleitungen
icon: fa-solid fa-route
description: Alte Adressen funktionieren weiter, wenn eine Seite umzieht oder einen neuen Namen bekommt, für Lesezeichen, Suchmaschinen und Links von anderen Seiten.
---

# Weiterleitungen :badge[Neu in Clay 4]{tip}

Die Adresse einer Seite kommt aus ihrem Pfad in `docs/`. Zieht die Seite um oder bekommt sie einen neuen Namen, zeigen Lesezeichen, Suchergebnisse und Links von anderen Seiten weiter auf die alte Adresse. Trag die alten Adressen ins Front Matter der Seite ein, und sie führen zur Seite:

```markdown [docs/guides/setup.md]
---
title: Einrichtung
redirects: ["/installation", "/getting-started/install"]
---
```

Wer `/installation` öffnet, landet auf `/guides/setup`, im selben Abschnitt: `/installation#requirements` öffnet `/guides/setup#requirements`.

> [!TIP]
> Diese Website behält die Adressen ihrer Clay-3-Dokumentation. [`/deployment/github-pages`](https://clay-doc.github.io/clay-example-repo/deployment/github-pages) führt zu [GitHub Pages](../publishing/github-pages.md), das `redirects: ["/deployment/github-pages"]` hat.

## Adressen

- **Schreib sie ab der Wurzel der Dokumentation**, wie einen Link, der mit `/` beginnt, ohne die `baseURL`: `/installation`, nicht `/mein-projekt/installation`. Ein `/` am Ende oder `.md` darf bleiben.
- **Sie gelten in jeder Sprache.** Übersetzungen nutzen die Weiterleitungen des Originals: `/installation` ist auf der deutschen Seite `/de/installation`.
- **In einer älteren Version** bleiben sie in ihr: In `docs/1.x/` ist `/installation` dann `/1.x/installation`.
- **Eine Adresse, die selbst eine Seite ist**, oder die schon eine andere Seite nennt, wird mit einer Warnung übersprungen, ebenso Adressen anderer Websites.

## Seiten mit clay edit verschieben

`clay edit move` und `rename` tragen die alte Adresse ein, wenn du sie darum bittest:

```bash
npx clay edit move setup.md guides --redirect
```

Im [Editor](clay-edit.md) fragt Clay nach <kbd>o</kbd> und <kbd>r</kbd>, ob die alte Adresse auf die neue weiterleiten soll: <kbd>y</kbd> trägt sie ein, <kbd>n</kbd> verschiebt ohne, <kbd>Esc</kbd> bricht ab. Ein verschobener Ordner leitet jede Seite darin weiter. Eine Seite, die an eine frühere Adresse zurückzieht, streicht diese Adresse aus ihren Weiterleitungen.

## Wie es funktioniert

Statische Hoster wie GitHub Pages können nicht selbst weiterleiten, deshalb schreibt der Build an jede alte Adresse eine kleine Seite. Sie schickt den Browser sofort weiter, behält den `#abschnitt` und nennt Suchmaschinen die echte Adresse der Seite. Alte Adressen stehen nicht in der Sitemap und nicht in der Suche.

## Links in deiner Dokumentation

Weiterleitungen sind für Links von anderswo. Ein Link in deiner eigenen Dokumentation, der auf eine alte Adresse zeigt, funktioniert weiter, aber der Build meldet ihn, damit er direkt auf die Seite zeigen kann:

```text
▲ Broken link in index.md: "setup.md" points to an old address of /guides/setup; link to the page itself
```

> [!NOTE]
> Jede Weiterleitung ist eine winzige Datei im Build. Behalte sie, solange alte Links unterwegs sein können; für Adressen, die öffentlich waren, also meist für immer.
