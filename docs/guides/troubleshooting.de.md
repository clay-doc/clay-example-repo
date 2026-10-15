---
title: Problemlösung
icon: fa-solid fa-screwdriver-wrench
description: Lösungen für die häufigsten Probleme mit Clay-Seiten, von fehlenden Styles bis zu fehlenden Daten.
---

# Problemlösung

## Die veröffentlichte Seite hat keine Styles, oder Links führen zu 404

Die Seite liegt unter einem Pfad, wurde aber für die Wurzel gebaut. Setze `baseURL` auf diesen Pfad, mit Schrägstrichen auf beiden Seiten:

```yaml
baseURL: "/mein-projekt/"
```

Prüfe es mit `npx clay preview`: Es liefert die Seite unter ihrer `baseURL` aus, wie der Hoster.

## Bilder werden nicht angezeigt

Binde Bilder relativ zur Seite ein, etwa `img/screen.png` oder `../img/screen.png`. Pfade, die mit `/` beginnen, zeigen auf die Wurzel der Domain, nicht auf deine Dokumentation, und gehen unter einer `baseURL` kaputt. `npx clay build` meldet Bilder, die es nicht gibt.

## „Zuletzt aktualisiert" fehlt

Clay liest die Daten aus Git. Entweder liegt die Dokumentation nicht in einem Git-Repository, oder die CI hat nur den letzten Commit ausgecheckt. In GitHub Actions:

```yaml
- uses: actions/checkout@v7
  with:
    fetch-depth: 0
```

In GitLab CI setzt du `GIT_DEPTH: 0`.

## Icons fehlen oder erscheinen als Kästchen

- Prüfe die Klassen des Icons auf [fontawesome.com](https://fontawesome.com/icons): Stil und Name werden beide gebraucht, `fa-solid fa-rocket`.
- Pro-Icons funktionieren nur mit einem [Kit](../features/themes-and-icons.md#font-awesome-kits), das sie enthält.
- Mit einem Kit trägst du die Domain deiner Seite in deinem Font-Awesome-Konto bei den erlaubten Domains des Kits ein.

## Änderungen erscheinen nicht in clay dev

`clay dev` lädt den Browser neu, wenn sich eine Seite, ein Bild oder die `clay.yaml` ändert. Passiert nichts, prüfe, ob du die Dateien des Projekts bearbeitest, in dem `clay dev` gestartet wurde, und sieh in seiner Ausgabe nach Fehlern.

## Der Port ist belegt

Ein anderes Programm nutzt Port 3000 (oder 4173 bei `clay preview`). Wähle einen anderen:

```bash
npx clay dev --port 3001
```

## Der Build scheitert an einer Seite

Clay zeigt, welche Seite gescheitert ist und warum. Häufige Ursachen:

- **Ein Link in rohem HTML** zeigt auf eine Seite, die es nicht gibt. Die Link-Prüfung sieht nur Markdown-Links; korrigiere den HTML-Link.
- **Das Front Matter** ist nicht geschlossen: Die zweite `---`-Zeile fehlt.

`npx clay build --verbose` zeigt die vollständige Ausgabe.

## index.html direkt geöffnet sieht kaputt aus

Die Seite braucht einen Webserver: Von der Festplatte geöffnet (`file://…`) kann der Browser Styles, Skripte und Suche nicht laden. Nutze `npx clay preview`.

## Node.js ist zu alt

Clay braucht Node.js 20.19 oder neuer. Prüfe es mit `node --version` und aktualisiere Node.js von [nodejs.org](https://nodejs.org) oder mit deinem Versionsmanager.

## Immer noch nicht weiter?

Eröffne ein Issue im [Clay-Repository](https://github.com/clay-doc/clay/issues), mit dem Befehl, den du ausgeführt hast, und seiner Ausgabe.
