---
title: Suche
icon: fa-solid fa-magnifying-glass
description: Volltextsuche über jede Seite und jeden Abschnitt, mit Tippfehlertoleranz, markierten Treffern und Tastenkürzeln.
---

# Suche

Jede Clay-Seite hat eine Volltextsuche, ohne Einrichtung und ohne externen Dienst. Clay baut den Suchindex zusammen mit der Seite, und der Browser lädt ihn, sobald jemand zum ersten Mal sucht.

## Die Suche öffnen

| Kürzel | Aktion |
|--------|--------|
| <kbd>Strg</kbd> + <kbd>K</kbd> oder <kbd>⌘</kbd> + <kbd>K</kbd> | Suche öffnen oder schließen |
| <kbd>/</kbd> | Suche öffnen (wenn du nicht gerade in einem Feld tippst) |
| <kbd>↑</kbd> <kbd>↓</kbd> | Durch die Ergebnisse gehen |
| <kbd>⏎</kbd> | Das gewählte Ergebnis öffnen |
| <kbd>Esc</kbd> | Feld leeren; noch einmal gedrückt, Suche schließen |

Auch die Lupe in der Navigationsleiste öffnet sie. Unten in der Suche stehen diese Tasten und die Zahl der Ergebnisse.

## Was gefunden wird

Der Index umfasst jede Seite, aufgeteilt in Abschnitte an jeder `##`- und `###`-Überschrift. Ergebnisse sind nach Seiten gruppiert: der Seitentitel mit seinem Ort in der Dokumentation, darunter die passenden Abschnitte und Texte mit markierten Suchwörtern. Ein Ergebnis führt direkt zu seinem Abschnitt, nicht nur zur Seite. Nach dem Öffnen bleiben die Wörter auf der Seite markiert, und die Seite springt zum ersten Treffer.

Ergebnisse werden danach sortiert, wo die Wörter vorkommen, das Beste zuerst:

1. Seitentitel,
2. Überschriften von Abschnitten,
3. Ordnernamen (der Pfad über einem Ergebnis, etwa „Anleitungen › Fortgeschritten"),
4. der Text,
5. Codeblöcke.

## Nach Bereich filtern

Über den Ergebnissen zeigt ein Chip für jeden obersten Ordner mit Treffern, wie viele es sind, etwa **Anleitungen 9**. Ein Klick zeigt nur dessen Ergebnisse; **Alle** zeigt wieder alle.

## Tippen und Tippfehler

- **Jedes Wort muss passen.** „github pages" findet Abschnitte mit beiden Wörtern; hat kein Abschnitt alle, zeigt Clay Abschnitte mit einem davon.
- **Das letzte Wort wird ergänzt**, während du tippst: „veröff" findet „Veröffentlichen".
- **Kleine Tippfehler werden verziehen**, in Wörtern ab vier Buchstaben: „Konfiguartion" findet „Konfiguration".

## Zuletzt besuchte Seiten

Bevor du tippst, listet die Suche die Seiten, die du zuletzt über sie geöffnet hast. Sie bleiben nur in deinem Browser, pro Seite, und werden nirgendwohin gesendet.

## Versionen und Sprachen

Jede [Version](../organizing/versions.md) und [Sprache](../organizing/translations.md) hat ihren eigenen Index, und die Suche sucht in dem, den du gerade liest: Ergebnisse führen nie in eine andere Version oder Sprache.

> [!TIP]
> Gute Überschriften ergeben gute Suchergebnisse. Einen Abschnitt „Auf GitHub Pages veröffentlichen" findet jeder, der danach sucht; einen Abschnitt „Schritt 3" nicht.
