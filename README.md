<p align="center">
  <img src="logo.svg" alt="Clay logo" height="220rem">
</p>

<h1 align="center">Clay Example Repo</h1>

<p align="center">
  <strong>A fully working example project for <a href="https://github.com/clay-doc/clay">Clay</a>, the documentation framework built on <a href="https://nuxt.com/">Nuxt.js</a> and <a href="https://vuejs.org/">Vue.js</a>.</strong>
</p>

<p align="center">
  <a href="https://github.com/clay-doc/clay-example-repo"><img src="https://img.shields.io/github/license/clay-doc/clay-example-repo" alt="License"></a>
</p>

---

This repository serves as a reference example for setting up a documentation site with **[Clay](https://github.com/clay-doc/clay)**. It demonstrates how to structure your documentation files, configure Clay, and organize nested directories — all with minimal setup.

> [!TIP]
> If you're new to Clay, start by reading the main [Clay documentation](https://github.com/clay-doc/clay) first, then use this repo as a hands-on reference.

## What's Inside

- A pre-configured `clay.yaml` with example settings.
- A `docs/` directory with sample Markdown files showcasing Clay's features.
- A `dir-meta.yaml` file demonstrating how to define directory metadata.
- Nested subdirectories to illustrate hierarchical documentation structure.

## Project Structure

```text
.
├── docs/                        # Documentation directory
│   ├── configuration.md         # Configuration Reference
│   ├── getting-started.md       # Getting Started guide
│   ├── writing-documentation.md # Writing Documentation guide
│   └── guides/                  # Guides subdirectory
│       ├── organizing-pages.md  # Organizing Pages guide
│       └── advanced/            # Advanced subdirectory
│           └── advanced-features.md  # Advanced Features guide
├── clay.yaml                    # Main Clay configuration file
├── dir-meta.yaml                # Directory metadata configuration
├── logo.svg                     # Logo used in navbar and favicon
└── README.md
```

## Configuration

### clay.yaml

The `clay.yaml` file configures the main settings of your Clay site:

```yaml
title: "Clay"
favicon: "logo.svg"
baseURL: "/clay-example-repo/"
fontawesomeKit: "my-kit"
navbar:
  logo: "logo.svg"
  source:
    name: "Github"
    icon: "fa-brands fa-github"
    link: "https://github.com/clay-doc/clay"
  links:
    - name: "Homepage"
      icon: "fa-solid fa-house"
      link: "https://example.com"
    - name: "Jobs"
      icon: "fa-solid fa-briefcase"
      link: "https://example.com/jobs"
index:
  title: "Welcome to the Clay docs"
  description: "This is a clay application."
  icon: "fa-solid fa-rocket"
langs:
  - "cs"
  - "python"
  - "js"
```

| Field            | Description                                                    |
|------------------|----------------------------------------------------------------|
| `title`          | The title of the documentation site.                           |
| `favicon`        | Path to the favicon file.                                      |
| `baseURL`        | Base URL path for the site.                                    |
| `fontawesomeKit` | Your FontAwesome kit identifier.                               |
| `navbar`         | Navbar configuration including logo, source link, and links.   |
| `index`          | Landing page settings (title, description, and icon).          |
| `langs`          | Programming languages for syntax highlighting.                 |

### dir-meta.yaml

The `dir-meta.yaml` file defines metadata for directories in your documentation, such as display names and icons:

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

### Markdown Frontmatter

Each Markdown file can include optional frontmatter to set a title and icon:

```yaml
---
title: My Document Title
icon: fa-solid fa-house
---
```

| Field   | Description                                      | Required |
|---------|--------------------------------------------------|----------|
| `title` | Display title in the navigation sidebar.         | No       |
| `icon`  | FontAwesome icon class for the navigation entry. | No       |

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/clay-doc/clay-example-repo.git
cd clay-example-repo
```

2. Build the documentation using **[Clay Oven](https://github.com/clay-doc/clay-oven)**:
```bash
./clay-oven
```

> [!IMPORTANT]
> You need [Clay Oven](https://github.com/clay-doc/clay-oven) to build the documentation site from this example repo.

## Related

- [Clay](https://github.com/clay-doc/clay) — The documentation framework.
- [Clay Oven](https://github.com/clay-doc/clay-oven) — The build tool for Clay documentation sites.

## License

This project is licensed under the Apache License 2.0 — see [LICENSE](LICENSE) for details.
