---
title: Prompts
icon: fa-solid fa-wand-magic-sparkles
description: Ein vorgeschlagener Prompt für KI-Assistenten und Coding-Agenten, so gezeigt, wie er geschrieben ist, mit einem Knopf zum Kopieren.
---

# Prompts :badge[Neu in Clay 4]{tip}

Ein Prompt-Block schlägt vor, was man einen KI-Assistenten oder Coding-Agenten fragen kann: eine Funktion einrichten, ein Projekt umstellen, eine Seite schreiben. Leser kopieren ihn mit einem Klick und fügen ihn in Claude Code, Codex, Cursor oder einen Chat ein.

````markdown
::: prompt
Lies https://clay-doc.github.io/clay-example-repo/de/llms.txt und richte dann
eine Clay-Dokumentation in diesem Repository ein: eine clay.yaml mit dem Namen
des Projekts, einen Ordner docs/ mit einer Startseite und einen Workflow für
GitHub Pages.
:::
````

::: prompt
Lies https://clay-doc.github.io/clay-example-repo/de/llms.txt und richte dann
eine Clay-Dokumentation in diesem Repository ein: eine clay.yaml mit dem Namen
des Projekts, einen Ordner docs/ mit einer Startseite und einen Workflow für
GitHub Pages.
:::

- **Der Text wird kopiert, wie er geschrieben ist**, samt Zeilenumbrüchen. Er ist kein Markdown: `**fett**` bleibt `**fett**`, denn genau das soll der Agent bekommen.
- **Der Titel** folgt auf den Namen, wie bei [Details](details.md): `::: prompt Für Claude Code`. Ohne Titel heißt er „Vorgeschlagener Prompt“ in der Sprache der Seite.
- **Die Suche findet den Text** von Prompts wie jeden anderen Text.

## Gute Prompts

::: steps
1. **Verweise auf die Dokumentation.** Agenten arbeiten am besten mit der Quelle: Ein Link auf die [llms.txt](../../features/ai-and-agents.md#llmstxt) der Website oder auf das Markdown einer Seite lässt sie lesen, was sie brauchen.
2. **Sag, wann es fertig ist**: welche Dateien entstehen sollen, welcher Befehl durchlaufen muss, etwa `npx clay check`.
3. **Lass den Lesern ihre Entscheidungen.** Schreib den Prompt so, dass er in ihrem Projekt funktioniert, mit Namen und Pfaden, die der Agent wählt.
:::

::: prompt Für einen Coding-Agenten
Lies https://clay-doc.github.io/clay-example-repo/de/features/ai-and-agents.md.
Gib dann mit Befehlen von `npx clay edit` jeder Seite in docs/guides eine
Beschreibung, und führe `npx clay check --json` aus, bis es keine Probleme
mehr meldet.
:::
