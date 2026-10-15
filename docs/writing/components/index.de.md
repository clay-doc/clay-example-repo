---
title: Komponenten
icon: fa-solid fa-puzzle-piece
description: Tabs, Schritte, Karten, einklappbare Abschnitte, Badges, Formeln, Diagramme und Dateibäume, geschrieben in schlichtem Markdown.
---

# Komponenten

Markdown deckt Text, Listen, Tabellen und Code ab. Für den Rest dessen, was eine Dokumentation braucht, etwa denselben Befehl für drei Paketmanager, eine Anleitung in nummerierten Schritten oder ein Diagramm, hat Clay Komponenten. Sie sind schlichter Text in deinen Markdown-Dateien: kein HTML, nichts zu installieren, und sie bleiben in jedem Editor und auf GitHub lesbar.

::: cards
- [Tabs und Codegruppen](tabs.md)
- [Schritte](steps.md)
- [Karten](cards.md)
- [Details](details.md)
- [Badges](badges.md)
- [Formeln](math.md)
- [Diagramme](diagrams.md)
- [Dateibäume](file-trees.md)
:::

## Drei Schreibweisen

| Art | Sieht aus wie | Komponenten |
|-----|---------------|-------------|
| Container | `::: name` … `:::` um Markdown herum | [Tabs, Codegruppen](tabs.md), [Schritte](steps.md), [Karten](cards.md), [Details](details.md) |
| Im Text | `:badge[Neu]`, `$E = mc^2$` | [Badges](badges.md), [Formeln](math.md) |
| Codeblöcke | ein Codeblock in der Sprache `mermaid` oder `tree` | [Diagramme](diagrams.md), [Dateibäume](file-trees.md) |

## Container

Ein Container beginnt mit einer Zeile aus drei Doppelpunkten und dem Namen der Komponente und endet mit einer Zeile, die nur aus drei Doppelpunkten besteht. Alles dazwischen ist normales Markdown.

```markdown
::: details Warum drei Doppelpunkte?
Sie lesen sich gut als Text, und auch andere Dokumentationswerkzeuge nutzen sie; deine Dokumentation bleibt so übertragbar.
:::
```

::: details Warum drei Doppelpunkte?
Sie lesen sich gut als Text, und auch andere Dokumentationswerkzeuge nutzen sie; deine Dokumentation bleibt so übertragbar.
:::

- **Der Text nach dem Namen** ist der Titel der Komponente, wo sie einen hat, etwa bei [Details](details.md).
- **Container lassen sich verschachteln.** Ein Container kann einen anderen enthalten, zum Beispiel Tabs in einem eingeklappten Abschnitt. Gib dem äußeren mehr Doppelpunkte, damit klar ist, welche Zeile welchen schließt:

  ```markdown
  :::: details Installation auf deinem System
  ::: tabs
  == macOS
  `brew install node`
  == Windows
  `winget install OpenJS.NodeJS`
  :::
  ::::
  ```

- **Fehler bleiben sichtbar.** Ein Container mit einem Namen, den Clay nicht kennt, oder ohne schließende Zeile wird so gezeigt, wie du ihn geschrieben hast; ein Tippfehler versteckt also keinen Inhalt.
- **Codeblöcke sind Code.** `:::` in einem Codeblock bleibt, wie es ist; so zeigen diese Seiten die Schreibweise.

## Suche, Links und Inhaltsverzeichnis

- **Alles ist durchsuchbar**, auch Tabs, die gerade nicht gezeigt werden, und eingeklappte Abschnitte. Ein Suchergebnis darin zeigt den Tab oder öffnet den Abschnitt.
- **Links werden geprüft** wie alle anderen, auch in Karten und Tabs, siehe [Build-Prüfungen](../../publishing/build-checks.md).
- **Überschriften in Containern** bekommen ihren `#`-Link und erscheinen unter „Auf dieser Seite“.

## Ohne JavaScript und auf GitHub

Clay rendert Komponenten beim Build, Seiten zeigen sie also, bevor JavaScript läuft: Tabs zeigen ihren ersten Tab, Formeln sind schon gesetzt. Nur Diagramme werden im Browser gezeichnet und zeigen bis dahin ihren Quelltext.

Auf GitHub zeigen deine Markdown-Dateien die Komponenten so, wie du sie geschrieben hast, und bleiben lesbar. `mermaid`-Diagramme und `$`-Formeln zeichnet GitHub selbst.
