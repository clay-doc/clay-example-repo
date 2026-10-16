---
title: Generierte Dokumentation
icon: fa-solid fa-gears
description: API-Referenz aus dem Code und andere Seiten, die Werkzeuge schreiben, vor jedem Build erzeugt.
---

# Generierte Dokumentation :badge[Neu in Clay 4]{tip}

Manche Seiten schreibt am besten ein Werkzeug: die API-Referenz einer Bibliothek aus ihrem Code und ihren Kommentaren, oder eine Liste der Optionen einer Kommandozeile. `generate` in der `clay.yaml` führt solche Werkzeuge vor jedem `clay build`, `clay dev` und `clay check` aus. So sind die erzeugten Seiten immer aktuell und gehören zur Seite wie alle anderen.

```yaml
generate:
  - npx typedoc --plugin typedoc-plugin-markdown --entryFileName index --out docs/api src/index.ts
```

Die Befehle laufen im Projektordner, einer nach dem anderen. Was sie in `docs/` schreiben, wird zu Seiten: in der Navigation, der Suche, den Linkprüfungen und dem [Markdown für Agenten](../features/ai-and-agents.md).

## API-Referenz aus dem Code

Jedes Werkzeug, das Markdown schreibt, funktioniert:

::: tabs
== TypeScript
[TypeDoc](https://typedoc.org) mit [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org):

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

```yaml
generate:
  - npx typedoc --plugin typedoc-plugin-markdown --entryFileName index --out docs/api src/index.ts
```
== Go
[gomarkdoc](https://github.com/princjef/gomarkdoc):

```bash
go install github.com/princjef/gomarkdoc/cmd/gomarkdoc@latest
```

```yaml
generate:
  - gomarkdoc --output docs/api/index.md ./...
```
== Python
[pydoc-markdown](https://github.com/NiklasRosenstein/pydoc-markdown):

```bash
pip install pydoc-markdown
```

```yaml
generate:
  - pydoc-markdown -I src -m my_package > docs/api.md
```
:::

::: steps
1. **Halte erzeugte Seiten aus Git heraus.** Sie entstehen bei jedem Build neu:

   ```text
   docs/api/
   ```

   in der `.gitignore`.

2. **Installiere das Werkzeug auch in der CI**, vor `npx clay build --strict`: als Dev-Abhängigkeit in der `package.json` oder mit einem eigenen Schritt.

3. **Schreib drumherum.** Eine `index.md` im Ordner gibt den erzeugten Seiten Titel, Icon und eine Einleitung, solange das Werkzeug keine eigene schreibt. Siehe [Index-Seiten](../organizing/index-pages.md).
:::

## Wenn ein Befehl scheitert

Der Build hält an und zeigt die letzten Zeilen des Befehls:

```text
✖  Generating docs: npx typedoc --out docs/api src/index.ts
│  [error] The entry point src/index.ts does not exist
│  Failed with exit code 1
│
└  Build failed after 2.1s. Run "clay build --verbose" for the full output.
```

`clay check --json` meldet dieselben Zeilen als Probleme.

> [!NOTE]
> Die Befehle in der `clay.yaml` laufen auf jedem Rechner, der die Dokumentation baut, wie die Skripte in der `package.json`. Prüf Änderungen daran wie Code.
