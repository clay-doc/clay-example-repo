---
title: Advanced Features
icon: fa-solid fa-wand-magic-sparkles
---

# Advanced Features

This page covers advanced Clay topics for users who want to get the most out of their documentation site.

## Deep Nesting

This page itself is an example of deep nesting — it lives at `docs/guides/advanced/advanced-features.md`, which is two levels deep inside the `docs/` directory. Clay handles any reasonable nesting depth automatically.

The corresponding `dir-meta.yaml` for this structure looks like:

```yaml
- path: "guides"
  name: "Guides"
  icon: "fa-solid fa-book-open"
  children:
    - path: "advanced"
      name: "Advanced"
      icon: "fa-solid fa-wand-magic-sparkles"
      children:
```

## Multi-Language Code Examples

Since Clay supports multiple syntax highlighting languages via Shiki, you can showcase the same concept in different languages. Clay detects each language automatically, so no extra configuration is needed.

### Python

```python
class DocumentationPage:
    def __init__(self, title: str, icon: str = None):
        self.title = title
        self.icon = icon

    def render(self) -> str:
        prefix = f"{self.icon} " if self.icon else ""
        return f"{prefix}{self.title}"

page = DocumentationPage("Getting Started", "🚀")
print(page.render())  # 🚀 Getting Started
```

### JavaScript

```js
class DocumentationPage {
  constructor(title, icon = null) {
    this.title = title;
    this.icon = icon;
  }

  render() {
    const prefix = this.icon ? `${this.icon} ` : '';
    return `${prefix}${this.title}`;
  }
}

const page = new DocumentationPage('Getting Started', '🚀');
console.log(page.render()); // 🚀 Getting Started
```

### C#

```cs
public class DocumentationPage
{
    public string Title { get; set; }
    public string? Icon { get; set; }

    public DocumentationPage(string title, string? icon = null)
    {
        Title = title;
        Icon = icon;
    }

    public string Render()
    {
        var prefix = Icon != null ? $"{Icon} " : "";
        return $"{prefix}{Title}";
    }
}

var page = new DocumentationPage("Getting Started", "🚀");
Console.WriteLine(page.Render()); // 🚀 Getting Started
```

## Custom Base URLs

When deploying your documentation to a subpath (e.g., `https://example.com/docs/`), set the `baseURL` in your `clay.yaml`:

```yaml
baseURL: "/docs/"
```

You can also override this at build time using the `CLAY_BASE_URL` environment variable, without modifying your config file:

```bash
CLAY_BASE_URL="/my-custom-path/" npx clay build
```

This is particularly useful in CI/CD pipelines where the deployment path may vary between environments (e.g., staging vs. production).

## Clay CLI

The `clay` command has three subcommands:

| Command         | Description                                          |
|-----------------|------------------------------------------------------|
| `clay dev`      | Start a development server with live reload          |
| `clay build`    | Build the static site into `<out>/public`            |
| `clay preview`  | Serve the built site like a static host would        |

And these options:

| Option          | Description                                          | Default                    |
|-----------------|------------------------------------------------------|----------------------------|
| `--root <dir>`  | Docs project with `clay.yaml` and `docs/`            | current directory          |
| `--out <dir>`   | Output directory                                     | `<root>/publish`           |
| `--port <port>` | Port for `dev` and `preview`                         | `3000` and `4173`          |
| `--host`        | Listen on all interfaces, not just localhost         | —                          |
| `--strict`      | `build`: fail on warnings such as broken links or config typos | —                |

For example, to build a docs project in another folder into `./dist`:

```bash
npx clay build --root ./documentation --out ./dist
```

## Integration with CI/CD

Clay is designed to fit into automated workflows. Here's an example GitHub Actions workflow that builds and deploys your documentation on every push to `main`:

```yaml
name: Build Documentation

on:
  push:
    branches: [main]
    paths:
      - 'docs/**'
      - 'clay.yaml'
      - 'dir-meta.yaml'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v7
        with:
          node-version: lts/*
          cache: npm

      - run: npm ci

      - name: Build docs
        run: npx clay build --strict
        env:
          CLAY_BASE_URL: "/my-project/"

      - name: Deploy
        uses: actions/upload-pages-artifact@v5
        with:
          path: ./publish/public
```

> [!TIP]
> Use `--strict` in CI so broken links fail the build instead of reaching your readers. `fetch-depth: 0` gives Clay the full history, so pages can show when they were last updated. Only trigger builds when files in `docs/`, `clay.yaml`, or `dir-meta.yaml` change to save CI minutes.

## Tips for Large Documentation Sites

| Challenge | Solution |
|-----------|----------|
| Too many pages in one directory | Split into subdirectories by topic |
| Inconsistent navigation labels | Always use frontmatter `title` fields |
| Missing icons in the sidebar | Set icons in both frontmatter and `dir-meta.yaml` |
| Broken cross-links | Use relative paths and test links after restructuring |
