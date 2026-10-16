---
title: Schreiben
icon: fa-solid fa-pen-nib
list: true
---

# Schreiben

Alles rund um den Inhalt einer Seite: Markdown, Codeblöcke, Hinweise, Links, Bilder und HTML.

Jede Seite ist eine Markdown-Datei in `docs/`. Clay versteht das Markdown, das du von GitHub kennst, ergänzt Syntaxhervorhebung und Hinweisboxen und prüft bei jedem Build deine Links.

| Wenn du … willst | Lies |
|------------------|------|
| Wissen, wie aus einer Datei eine Seite wird und woher ihr Titel kommt | [Seiten](pages.md) |
| Überschriften, Listen, Tabellen und Aufgabenlisten nachschlagen | [Markdown](markdown.md) |
| Code mit Hervorhebung, Diffs und Kopierknopf zeigen | [Codeblöcke](code-blocks.md) |
| Eine Notiz, einen Tipp oder eine Warnung einfügen | [Hinweise](alerts.md) |
| Auf andere Seiten und Abschnitte verlinken oder Bilder einfügen | [Links & Bilder](links-and-images.md) |
| HTML nutzen, wo Markdown nicht reicht | [HTML](html.md) |

## Das Wichtigste

- **Eine Datei, eine Seite.** Aus `docs/guides/setup.md` wird `/guides/setup`.
- **Links funktionieren wie auf GitHub.** Verlinke die `.md`-Datei; Clay macht daraus die URL der Seite und meldet Links, die ins Leere führen.
- **Dateien neben deinen Seiten werden mitveröffentlicht.** Bilder und Downloads in `docs/` behalten ihre relativen Pfade.
