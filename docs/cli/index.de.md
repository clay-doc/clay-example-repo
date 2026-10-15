---
title: Kommandozeile
icon: fa-solid fa-terminal
list: true
---

# Kommandozeile

Der Befehl `clay`: seine Unterbefehle und Optionen und die Prüfungen, die jeder Build ausführt.

Du brauchst fünf Befehle, meist mit `npx` oder über die Skripte in der `package.json` aufgerufen:

| Befehl | Macht |
|--------|-------|
| `clay dev` | Live-Vorschau beim Schreiben |
| `clay build` | Baut die Seite als statische Dateien |
| `clay preview` | Zeigt die gebaute Seite, so wie Leser sie sehen |
| `clay edit` | Bearbeitet Seiten, Ordner und Einstellungen im Terminal |
| `clay version <name>` | Speichert die aktuelle Dokumentation als ältere Version |

Alle Optionen stehen unter [Befehle](commands.md). Was `clay build` prüft und wie `--strict` Probleme den Build abbrechen lässt, steht unter [Build-Prüfungen](build-checks.md).

> [!TIP]
> Nutze `clay build --strict` in CI: Ein kaputter Link stoppt dann das Deployment, statt bei Lesern anzukommen.
