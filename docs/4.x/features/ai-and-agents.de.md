---
title: KI & Agenten
icon: fa-solid fa-robot
description: Jede Clay-Seite ist bereit für Sprachmodelle - jede Seite als Markdown, ein Index in llms.txt - und mit clay edit und clay check ändern und prüfen KI-Agenten die Dokumentation.
---

# KI & Agenten :badge[Neu in Clay 4]{tip}

Leser fragen immer öfter einen Assistenten, statt zu lesen, und Coding-Agenten schreiben Dokumentation neben dem Code. Clay bedient beide, ohne Einrichtung: Jede Seite spricht Markdown mit Sprachmodellen, und die Kommandozeile lässt Agenten die Dokumentation so sicher ändern, wie ein Mensch es täte.

## Jede Seite als Markdown

Jede Seite wird auch als Markdown veröffentlicht, unter ihrer eigenen Adresse mit angehängtem `.md`:

| Seite | Ihr Markdown |
|-------|--------------|
| `/guides/setup` | `/guides/setup.md` |
| `/guides`, die Seite eines Ordners | `/guides.md` |
| `/`, die Startseite | `/index.md` |
| `/de/guides/setup`, eine Übersetzung | `/de/guides/setup.md` |

Das Markdown ist der Text der Seite ohne Front Matter, unter ihrem Titel. Seine Links führen zum Markdown der Seiten, auf die sie zeigen, und Bilder zu ihrer vollen Adresse, damit ein Modell ihnen folgen kann. Komponenten bleiben, wie du sie geschrieben hast: Ihre Textsyntax liest sich auch für ein Modell gut.

## llms.txt

[llms.txt](https://llmstxt.org) ist der Ort, an dem Sprachmodelle nach der Dokumentation einer Website suchen. Clay schreibt sie bei jedem Build:

```tree
publish/public/
  llms.txt          # der Index: worum es geht, und ein Link zum Markdown jeder Seite
  llms-full.txt     # alle Seiten in einer Datei, in der Reihenfolge der Navigation
  de/
    llms.txt        # jede Sprache und Version hat ihre eigene
  1.x/
    llms.txt
```

Der Index gruppiert die Seiten nach den obersten Bereichen der Seitenleiste, mit der Beschreibung jeder Seite, und verweist auf die anderen Sprachen und Versionen. Sieh dir die dieser Website an: [llms.txt](https://clay-doc.github.io/clay-example-repo/de/llms.txt).

### Wie Agenten sie finden

Kein Standard bringt einen Agenten dazu, von selbst nach der `llms.txt` zu suchen. Werkzeuge, die die Konvention kennen, probieren `/llms.txt` an der Wurzel einer Domain; alles andere braucht einen Hinweis. Clay hinterlässt einen überall, wo ein Agent ankommen kann:

| Ein Agent … | findet die `llms.txt` über |
|-------------|----------------------------|
| bekommt die Adresse, in einem Prompt oder einer `AGENTS.md` | die Adresse selbst: der sicherste Weg, siehe [Prompts](../writing/components/prompts.md) |
| liest das Markdown einer Seite | dessen letzte Zeile, die auf die `llms.txt` verweist |
| liest das HTML einer Seite | den Link „Als Markdown öffnen“ der Seite und `<link rel="alternate">` in ihrem Kopf |
| schaut an der Wurzel der Domain | `/llms.txt` und die `robots.txt`, wenn die Seite an der Wurzel liegt |

> [!NOTE]
> Eine Seite unter einem Pfad, etwa `meine-org.github.io/mein-projekt/`, kann keine Dateien an der Wurzel ihrer Domain ablegen, wie bei der [robots.txt](seo.md#seiten-unter-einem-pfad). Ihre `llms.txt` liegt unter `/mein-projekt/llms.txt`: Verlinke sie in deinem README und in den Prompts, die du vorschlägst.

> [!TIP]
> Setz [`siteURL`](../configuration/clay-yaml.md), damit die Links im Markdown und in der `llms.txt` volle Adressen sind. Ohne sie beginnen sie an der Wurzel der Domain; das funktioniert im Browser, aber nicht, wenn ein Modell eine Datei für sich liest.

## Das Seitenmenü

Unter „Auf dieser Seite“ bietet jede Seite:

::: steps
1. **Als Markdown kopieren**: das Markdown der Seite, bereit zum Einfügen in jeden Assistenten.
2. **Als Markdown öffnen**: die `.md`-Adresse in einem neuen Tab.
3. **In ChatGPT öffnen** und **In Claude öffnen**: ein neuer Chat, der die Seite liest, damit Leser Fragen dazu stellen können.
:::

Auf schmalen Bildschirmen klappt das Menü zusammen mit dem Inhaltsverzeichnis über der Seite auf.

Jeder Eintrag lässt sich in der `clay.yaml` ausblenden; die übrigen bleiben. Ohne jeden Eintrag verschwindet das Menü:

```yaml [clay.yaml]
pageActions:
  copyMarkdown: true   # Als Markdown kopieren
  openMarkdown: true   # Als Markdown öffnen
  chatgpt: false       # In ChatGPT öffnen
  claude: false        # In Claude öffnen
```

Das Markdown jeder Seite und `llms.txt` werden so oder so veröffentlicht, für Agenten, die sie selbst finden.

## Für Coding-Agenten

Agenten, die in deinem Repository arbeiten, etwa Claude Code, Codex oder Cursor, ändern Dokumentation so, wie sie Code ändern: über Befehle, deren Ergebnis sie lesen können. `clay edit` hat für jede Aktion seines Editors einen Befehl, und `clay check` prüft die Dokumentation, ohne sie zu bauen.

::: code-group
```bash [Lesen]
npx clay edit list --json          # jede Seite und jeder Ordner, mit Pfad, Titel, Reihenfolge und URL
npx clay edit show guides/setup    # das ganze Front Matter einer Seite
npx clay edit help                 # jeder Befehl, mit Beispielen, für Agenten und Menschen
```
```bash [Ändern]
npx clay edit new page guides "Aktualisieren"
npx clay edit set guides/aktualisieren.md description="Auf das nächste Release wechseln" order=3
npx clay edit move guides/alt.md archive
npx clay edit config set navbar.links.1.icon "fa-solid fa-book"
```
```bash [Prüfen]
npx clay check --json    # kaputte Links und Einstellungen, ohne die Seite zu bauen
```
:::

Was sie für Agenten leicht nutzbar macht:

- **Eine Änderung pro Befehl**, sofort geschrieben, genau in die betroffenen Dateien, mit Kommentaren und Formatierung.
- **JSON mit `--json`**: `{"ok": true, "written": [...], "broken": [...]}` oder `{"ok": false, "error": "..."}`.
- **Fehler, die sagen, was zu tun ist**, etwa `add --yes to confirm` oder `"clay edit list" shows the paths`.
- **Exit-Codes**: 0 erledigt, 1 gescheitert oder Probleme gefunden, 2 falsche Verwendung.
- **Keine Überraschungen**: Verschieben schreibt nie heimlich Links um; es meldet die Links, die gebrochen sind, und `clay check` bestätigt die Korrektur.

Die vollständige Liste steht unter [clay edit](../organizing/clay-edit.md#aus-skripten-und-für-ki-agenten).

### Sag es deinem Agenten

Am schnellsten geht es mit einem Prompt, der auf die Dokumentation verweist:

::: prompt
Lies https://clay-doc.github.io/clay-example-repo/de/llms.txt, um zu lernen,
wie Clay funktioniert. Verbessere dann die Dokumentation in docs/: Nutze Befehle
von `npx clay edit` für Titel, Beschreibungen und Reihenfolge, und führe
`npx clay check --json` aus, bis es keine Probleme mehr meldet.
:::

Für jede Sitzung lesen Agenten Anweisungsdateien wie `AGENTS.md` oder `CLAUDE.md` im Repository. Ein paar Zeilen bringen sie dazu, Clays Befehle zu nutzen:

```markdown [AGENTS.md]
## Documentation

The docs are a Clay site: Markdown in docs/, settings in clay.yaml.
- Run `npx clay edit help` to learn the commands for changing pages, folders and settings.
- Prefer `npx clay edit` commands over editing front matter by hand.
- After changes, run `npx clay check --json` and fix every problem it reports.
```
