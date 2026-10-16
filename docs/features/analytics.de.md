---
title: Analytics
icon: fa-solid fa-chart-simple
description: Seitenaufrufe zählen und erfahren, wonach Leser vergeblich suchen, mit Diensten, die keine Cookies setzen.
---

# Analytics :badge[Neu in Clay 4]{tip}

Welche Seiten gelesen werden, und wonach Leser suchen, ohne es zu finden: Analytics zeigt, wo die Dokumentation hilft und wo sie zu kurz kommt. Clay arbeitet mit drei Diensten, die keine Cookies setzen und keine personenbezogenen Daten speichern: [Plausible](https://plausible.io), [Umami](https://umami.is) und [GoatCounter](https://www.goatcounter.com). Jeden davon gibt es als gehosteten Dienst oder für den eigenen Server.

::: tabs
== Plausible
```yaml
analytics:
  plausible: {}
```

Die Domain der Seite kommt aus `siteURL`; setze `domain`, wenn Plausible die Seite unter einem anderen Namen kennt. Für einen eigenen Server setze `src`:

```yaml
analytics:
  plausible:
    domain: "docs.example.com"
    src: "https://stats.example.com/js/script.js"
```
== Umami
```yaml
analytics:
  umami:
    websiteId: "94db1cb1-74f4-4a40-ad6c-962362670409"
```

Für einen eigenen Server setze `src`, etwa `https://stats.example.com/script.js`.
== GoatCounter
```yaml
analytics:
  goatcounter:
    code: "meine-docs"
```

`code` ist der Name deiner Seite unter `meine-docs.goatcounter.com`. Für einen eigenen Server setze `endpoint`, etwa `https://stats.example.com/count`.
:::

## Was gezählt wird

- **Seitenaufrufe**, auch wenn Leser von Seite zu Seite gehen, ohne dass der Browser eine neue Seite lädt.
- **Suchen ohne Ergebnis**, mit dem Suchbegriff, einen Moment nachdem der Leser aufhört zu tippen. Sie zeigen, was deiner Dokumentation fehlt.
- **Kopierter Code und Prompts**, und das **Seitenmenü**: eine Seite als Markdown kopieren oder öffnen und ChatGPT oder Claude dazu fragen.

Nur Seitenaufrufe zählen:

```yaml
analytics:
  plausible: {}
  events: false
```

In Plausible erscheinen Ereignisse, sobald du sie als Ziele anlegst, etwa „Search without results“. Umami und GoatCounter listen sie von selbst.

## Wann nichts gezählt wird

- **Während `clay dev`**: Analytics läuft nur in gebauten Seiten.
- **Bei Lesern, die nicht verfolgt werden wollen**: Browser mit Global Privacy Control oder Do Not Track laden gar keine Analytics.

## Datenschutz

> [!NOTE]
> Das ist ein Überblick, keine Rechtsberatung. Die Datenschutzerklärung deiner Seite und die Regeln, die für sie gelten, prüfst du selbst.

In der EU braucht es die Einwilligung der Leser, um etwas auf ihrem Gerät zu speichern oder auszulesen, etwa ein Cookie, außer es ist unbedingt erforderlich (die ePrivacy-Richtlinie, in Deutschland das TDDDG). Personenbezogene Daten wie IP-Adressen brauchen nach der DSGVO eine Rechtsgrundlage.

Die drei Dienste sind so gebaut, dass das einfach bleibt: Sie setzen keine Cookies und nutzen nichts sonst auf dem Gerät der Leser, und sie speichern keine IP-Adressen oder anderen personenbezogenen Daten, nur Zahlen. Deshalb werden sie üblicherweise ohne Cookie-Banner genutzt, auf Grundlage eines berechtigten Interesses. Was dir bleibt:

- **Nenne den Dienst in deiner Datenschutzerklärung**: was gezählt wird, von wem und warum.
- **Schließ den Auftragsverarbeitungsvertrag des Dienstes ab**, wenn du ihn gehostet nutzt. Plausible und GoatCounter werden in der EU gehostet; mit einem eigenen Server verlassen die Daten ihn nie.
- **Suchbegriffe sind Text, den Leser tippen.** Wenn sie personenbezogene Daten in die Suche tippen könnten, schalte Ereignisse mit `events: false` ab.

Dienste, die Cookies setzen, etwa Google Analytics, brauchen eine Einwilligung, bevor sie laden, und damit ein Cookie-Banner. Clay bringt keines mit. Brauchst du einen solchen Dienst, füge sein Skript mit [`head`](../configuration/clay-yaml.md#head) und einem Einwilligungs-Werkzeug deiner Wahl hinzu.
