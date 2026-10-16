---
title: Schritte
icon: fa-solid fa-list-ol
description: Eine nummerierte Liste als Anleitung, mit einem nummerierten Kreis je Schritt und einer Linie zum nächsten.
---

# Schritte

Schritte machen aus einer nummerierten Liste eine Anleitung zum Mitmachen: Jeder Schritt bekommt einen nummerierten Kreis, und eine Linie führt von einem Schritt zum nächsten.

````markdown
::: steps
1. **Installiere Clay** in deinem Projekt:

   ```bash
   npm install --save-dev clay-doc
   ```

2. **Schreib eine Seite.** Lege `docs/index.md` mit einer Überschrift an.

3. **Starte den Entwicklungsserver** mit `npx clay dev` und öffne die Adresse, die er zeigt.
:::
````

::: steps
1. **Installiere Clay** in deinem Projekt:

   ```bash
   npm install --save-dev clay-doc
   ```

2. **Schreib eine Seite.** Lege `docs/index.md` mit einer Überschrift an.

3. **Starte den Entwicklungsserver** mit `npx clay dev` und öffne die Adresse, die er zeigt.
:::

## Schritte schreiben

- **Schreib eine nummerierte Liste** in `::: steps`. Schritte zählen immer ab 1.
- **Ein Schritt kann mehr als eine Zeile enthalten:** Codeblöcke, Bilder, Hinweise. Rücke sie bis zum Text des Schritts ein (drei Leerzeichen nach `1. `), damit sie dazugehören.
- **Beginne jeden Schritt mit dem, was zu tun ist**, fett, und erkläre darunter. Wer überfliegt, sieht die ganze Anleitung auf einen Blick.
- Text vor oder nach der Liste im Container erscheint wie gewohnt.

> [!TIP]
> Schritte sind für Dinge, die nacheinander passieren. Für eine Liste von Optionen oder Funktionen liest sich eine normale Liste besser.
