---
title: Configuration
icon: fa-solid fa-gear
---

# Configuration Reference

Clay is configured through YAML files in the root of your project. This page provides a complete reference for all available options.

## clay.yaml

The `clay.yaml` file is the main configuration file. It controls the site title, navigation, landing page, and more.

### Top-Level Options

| Option          | Type     | Description                                           |
|-----------------|----------|-------------------------------------------------------|
| `title`         | `string` | The name of your documentation site.                  |
| `favicon`       | `string` | Path to the favicon image file.                       |
| `baseURL`       | `string` | The base URL path where the site is served.           |
| `fontawesomeKit`| `string` | Your FontAwesome kit ID for loading icons.            |

### Navbar

The `navbar` section configures the top navigation bar:

```yaml
navbar:
  logo: "logo.svg"
  source:
    name: "Github"
    icon: "fa-brands fa-github"
    link: "https://github.com/my-org/my-repo"
  links:
    - name: "Homepage"
      icon: "fa-solid fa-house"
      link: "https://example.com"
```

| Option          | Type     | Description                                      |
|-----------------|----------|--------------------------------------------------|
| `navbar.logo`   | `string` | Path to the logo image displayed in the navbar.  |
| `navbar.source` | `object` | Link to the source code repository.              |
| `navbar.links`  | `array`  | Additional navigation links in the navbar.       |

Each link in `navbar.links` has the following properties:

| Property | Type     | Description                                |
|----------|----------|--------------------------------------------|
| `name`   | `string` | Display text for the link.                 |
| `icon`   | `string` | FontAwesome icon class for the link.       |
| `link`   | `string` | URL the link points to.                    |

### Index (Landing Page)

The `index` section controls the landing page:

```yaml
index:
  title: "Welcome to the Docs"
  description: "Your project's documentation hub."
  icon: "fa-solid fa-rocket"
```

| Option              | Type     | Description                                |
|---------------------|----------|--------------------------------------------|
| `index.title`       | `string` | Main heading on the landing page.          |
| `index.description` | `string` | Subtitle or description text.              |
| `index.icon`        | `string` | FontAwesome icon displayed on the landing. |

### Languages

The `langs` field specifies which programming languages are available for syntax highlighting:

```yaml
langs:
  - "python"
  - "js"
  - "cs"
  - "bash"
  - "yaml"
  - "json"
```

These map to [Shiki language identifiers](https://shiki.matsu.io/languages).

## dir-meta.yaml

The `dir-meta.yaml` file provides metadata for directories within `docs/`. Without this file, directories use their folder name as the display title and have no icon.

```yaml
- path: "guides"
  name: "Guides"
  icon: "fa-solid fa-book"
  children:
    - path: "advanced"
      name: "Advanced Topics"
      icon: "fa-solid fa-graduation-cap"
      children:
```

| Property   | Type     | Description                                            |
|------------|----------|--------------------------------------------------------|
| `path`     | `string` | The directory name (relative to `docs/`).              |
| `name`     | `string` | The display name in the sidebar.                       |
| `icon`     | `string` | FontAwesome icon class for the directory.              |
| `children` | `array`  | Nested directory metadata for subdirectories.          |

## Environment Variables

Some settings can be overridden at build time using environment variables:

| Variable   | Description                                          | Example              |
|------------|------------------------------------------------------|----------------------|
| `BASE_URL` | Override the `baseURL` from `clay.yaml` at build time. | `BASE_URL=/docs/`  |

```bash
BASE_URL=/my-project/docs/ clay-oven build
```

## Example: Full Configuration

Here's a complete `clay.yaml` showing all available options:

```yaml
title: "My Project"
favicon: "logo.svg"
baseURL: "/my-project/"
fontawesomeKit: "abc123def"
navbar:
  logo: "logo.svg"
  source:
    name: "GitHub"
    icon: "fa-brands fa-github"
    link: "https://github.com/my-org/my-project"
  links:
    - name: "Homepage"
      icon: "fa-solid fa-house"
      link: "https://my-project.com"
    - name: "Blog"
      icon: "fa-solid fa-rss"
      link: "https://my-project.com/blog"
    - name: "Support"
      icon: "fa-solid fa-life-ring"
      link: "https://my-project.com/support"
index:
  title: "My Project Documentation"
  description: "Everything you need to know about My Project."
  icon: "fa-solid fa-rocket"
langs:
  - "python"
  - "js"
  - "ts"
  - "bash"
  - "yaml"
  - "json"
  - "html"
  - "css"
```
