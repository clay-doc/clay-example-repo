---
title: Problemlösung
icon: fa-solid fa-screwdriver-wrench
description: Lösungen für die häufigsten Probleme mit Clay-Seiten, von fehlenden Styles bis zu fehlenden Daten.
---

# Problemlösung

Öffne das Problem, das du hast.

## Die veröffentlichte Seite

::: details Die Seite hat keine Styles, oder Links führen zu 404
Die Seite liegt unter einem Pfad, aber Clay hat sie für die Wurzel gebaut. Setz `baseURL` auf diesen Pfad, mit Schrägstrichen auf beiden Seiten:

```yaml
baseURL: "/mein-projekt/"
```

Prüf es mit `npx clay preview`: Es liefert die Seite unter ihrer `baseURL` aus, wie der Hoster.
:::

::: details Bilder werden nicht angezeigt
Verweise auf Bilder relativ zur Seite, etwa `img/screen.png` oder `../img/screen.png`. Pfade, die mit `/` beginnen, zeigen auf die Wurzel der Domain, nicht auf deine Dokumentation, und brechen unter einer `baseURL`. `npx clay build` meldet Bilder, die es nicht gibt.
:::

::: details „Zuletzt aktualisiert“ fehlt
Clay liest die Daten aus Git. Entweder liegt die Dokumentation in keinem Git-Repository, oder die CI hat nur den letzten Commit ausgecheckt.

::: tabs
== GitHub Actions
```yaml
- uses: actions/checkout@v7
  with:
    fetch-depth: 0
```
== GitLab CI
```yaml
variables:
  GIT_DEPTH: 0
```
:::
:::

::: details Icons fehlen oder erscheinen als Kästchen
- Prüf die Klassen des Icons auf [fontawesome.com](https://fontawesome.com/icons): Stil und Name sind nötig, `fa-solid fa-rocket`.
- Pro-Icons funktionieren nur mit einem [Kit](../features/themes-and-icons.md#font-awesome-kits), das sie enthält.
- Mit einem Kit: Trag die Domain deiner Seite bei den erlaubten Domains des Kits in deinem Font-Awesome-Konto ein.
:::

::: details index.html direkt geöffnet sieht kaputt aus
Die Seite braucht einen Webserver: Von der Festplatte geöffnet (`file://…`) kann der Browser Styles, Skripte und Suche nicht laden. Nutze `npx clay preview`.
:::

## Bauen und Vorschau

::: details Der Build scheitert an einer Seite
Clay zeigt, welche Seite gescheitert ist und warum. Häufige Ursachen:

- **Ein Link in HTML** zeigt auf eine Seite, die es nicht gibt. Die Linkprüfung sieht nur Markdown-Links; korrigiere den HTML-Link.
- **Das Front Matter** ist nicht geschlossen: Die zweite `---`-Zeile fehlt.

Mit `npx clay build --verbose` siehst du die vollständige Ausgabe.
:::

::: details „clay dev“ läuft für dieses Projekt
Ein Build und der Entwicklungsserver können nicht gleichzeitig im selben Projekt laufen. Beende `clay dev` (<kbd>Strg</kbd> + <kbd>C</kbd> in seinem Terminal) und baue dann erneut.
:::

::: details Änderungen erscheinen nicht in clay dev
`clay dev` lädt den Browser neu, wenn sich eine Seite, ein Bild oder die `clay.yaml` ändert. Passiert nichts, prüf, ob du die Dateien des Projekts bearbeitest, in dem `clay dev` gestartet wurde, und schau in seiner Ausgabe nach Fehlern.
:::

::: details Der Port ist belegt
Ein anderes Programm nutzt Port 3000 (oder 4173 für `clay preview`). Wähle einen anderen:

```bash
npx clay dev --port 3001
```
:::

::: details Node.js ist zu alt
Clay braucht Node.js 20.19 oder neuer. Prüf es mit `node --version` und aktualisiere Node.js von [nodejs.org](https://nodejs.org) oder mit deiner Versionsverwaltung.
:::

## Immer noch nicht weiter?

Öffne ein Issue im [Clay-Repository](https://github.com/clay-doc/clay/issues) mit dem Befehl, den du ausgeführt hast, und seiner Ausgabe.
