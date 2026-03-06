---
title: Advanced Features
icon: fa-solid fa-wand-magic-sparkles
---

# Advanced Features

This page covers advanced Clay features for users who want to get the most out of their documentation site.

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

Since Clay supports multiple syntax highlighting languages via Shiki, you can showcase the same concept in different languages:

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

When deploying Clay documentation to a subpath (e.g., `https://example.com/docs/`), set the `baseURL` in `clay.yaml`:

```yaml
baseURL: "/docs/"
```

You can also override this at build time:

```bash
BASE_URL=/my-custom-path/ clay-oven build
```

This is particularly useful in CI/CD pipelines where the deployment path may vary between environments.

## Integration with CI/CD

Clay is designed to integrate smoothly into automated workflows. Here's an example GitHub Actions workflow:

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
      - uses: actions/checkout@v4

      - name: Install Clay Oven
        run: |
          # Install Clay Oven (see clay-oven docs for latest instructions)
          curl -fsSL https://github.com/clay-doc/clay-oven/releases/latest/download/install.sh | bash

      - name: Build docs
        run: clay-oven build

      - name: Deploy
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./output
```

> [!TIP]
> Only trigger documentation builds when files in `docs/`, `clay.yaml`, or `dir-meta.yaml` change to save CI minutes.

## Tips for Large Documentation Sites

| Challenge | Solution |
|-----------|----------|
| Too many pages in one directory | Split into subdirectories by topic |
| Inconsistent navigation labels | Always use frontmatter `title` fields |
| Missing icons in the sidebar | Set icons in both frontmatter and `dir-meta.yaml` |
| Slow builds | Use specific `langs` — only include languages you actually use |
| Broken cross-links | Use relative paths and test links after restructuring |
