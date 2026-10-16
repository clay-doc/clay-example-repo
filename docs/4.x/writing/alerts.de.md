---
title: Hinweise
icon: fa-solid fa-circle-exclamation
description: Sechs Arten von Hinweiskästen für Notizen, Tipps und Warnungen, geschrieben mit der Hinweis-Syntax von GitHub.
---

# Hinweise

Hinweise heben wichtige Informationen hervor. Sie nutzen die [Hinweis-Syntax von GitHub](https://docs.github.com/de/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts): ein Zitat, dessen erste Zeile die Art des Hinweises nennt.

```markdown
> [!NOTE]
> Clay ignoriert Dateien, deren Name mit einem Punkt beginnt.
```

> [!NOTE]
> Clay ignoriert Dateien, deren Name mit einem Punkt beginnt.

## Alle Arten

> [!NOTE]
> Hintergrundwissen, das Leser auch beim Überfliegen bemerken sollen.

> [!TIP]
> Eine Abkürzung oder ein besserer Weg, etwas zu tun.

> [!IMPORTANT]
> Etwas, das Leser wissen müssen, um ans Ziel zu kommen.

> [!WARNING]
> Etwas, das schiefgehen kann und Aufmerksamkeit braucht.

> [!CAUTION]
> Die Folgen einer Aktion, etwa Datenverlust.

> [!DANGER]
> Ein ernstes Risiko. `DANGER` ist eine Ergänzung von Clay; GitHub zeigt es als normales Zitat.

Die Bezeichnungen wie `[!NOTE]` schreibst du in jeder Sprache englisch; die Überschrift im Kasten erscheint in der Sprache der Seite, hier also „Hinweis".

## Inhalt in Hinweisen

Hinweise können alles enthalten, was ein Zitat enthalten kann: mehrere Absätze, Listen, Links und Code.

```markdown
> [!WARNING]
> Eine Seite umzubenennen ändert ihre URL. Bevor du eine umbenennst:
>
> - suche in der Dokumentation nach Links darauf,
> - aktualisiere Links von anderen Websites, wenn du kannst.
>
> `npx clay build --strict` findet kaputte Links.
```

> [!WARNING]
> Eine Seite umzubenennen ändert ihre URL. Bevor du eine umbenennst:
>
> - suche in der Dokumentation nach Links darauf,
> - aktualisiere Links von anderen Websites, wenn du kannst.
>
> `npx clay build --strict` findet kaputte Links.

> [!TIP]
> Setze Hinweise sparsam ein. Auf einer Seite voller Hinweise sticht keiner mehr heraus.
