# Agent Guidelines for al-folio

This repository is an `al-folio` site: a Jekyll-based academic portfolio and blog theme.

Use this file as the first stop when working in the repository. It points agents to the right instructions, build steps, and validation rules before making changes.

## Start Here

If you are modifying this repository, read these files in order:

1. `.github/copilot-instructions.md`
2. This `AGENTS.md`
3. The task-specific guide that matches the files you will edit

## Task-Specific Guides

- General codebase and build behavior: `.github/copilot-instructions.md`
- Documentation work: `.github/agents/docs.agent.md`
- Site customization work: `.github/agents/customize.agent.md`
- Git and commit conventions: `.github/GIT_WORKFLOW.md`

## File-Type Instructions

When editing these files, consult the matching instruction file first:

| File Type                                                                                  | Instruction File                                           |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Markdown content in `_posts/`, `_pages/`, `_projects/`, `_news/`, `_books/`, `_teachings/` | `.github/instructions/markdown-content.instructions.md`    |
| YAML configuration in `_config.yml` and `_data/**/*.yml`                                   | `.github/instructions/yaml-configuration.instructions.md`  |
| BibTeX files in `_bibliography/`                                                           | `.github/instructions/bibtex-bibliography.instructions.md` |
| Liquid templates in `_includes/` and `_layouts/`                                           | `.github/instructions/liquid-templates.instructions.md`    |
| JavaScript in `_scripts/`                                                                  | `.github/instructions/javascript-scripts.instructions.md`  |

## Repository Overview

Important paths:

- `_config.yml`: primary site configuration
- `_data/`: structured YAML data such as socials, CV data, venues, coauthors, and repositories
- `_pages/`: top-level site pages such as about, CV, projects, and publications
- `_posts/`: blog posts
- `_projects/`, `_news/`, `_books/`, `_teachings/`: Jekyll collections
- `_layouts/` and `_includes/`: Liquid templates and shared components
- `_sass/`: SCSS styles
- `_scripts/`: JavaScript utilities
- `_bibliography/papers.bib`: publications
- `assets/`: images, PDFs, JSON, generated CV assets, CSS, JS, fonts, and other static files
- `.github/workflows/`: CI, formatting, deployment, accessibility, and link checking

## Preferred Workflow

### 1. Understand the change

- Start from the smallest relevant set of files.
- Prefer updating existing files over adding parallel alternatives.
- If the task is documentation-only, keep changes in root-level docs unless there is a clear reason to edit content files.

### 2. Make the change

- Follow repository conventions already present in the target file.
- Keep edits narrowly scoped to the requested task.
- Avoid changing build, deployment, or generated-output behavior unless the task requires it.

### 3. Validate before finishing

Before every commit, run the required checks below.

## Local Development

Docker is the recommended development path.

```bash
docker compose pull
docker compose up
```

The local site is served at [http://localhost:8080](http://localhost:8080).

If dependencies or the Docker image changed, rebuild with:

```bash
docker compose up --build
```

Stop the local server with:

```bash
docker compose down
```

## Required Validation

### Format

Install the formatter if needed:

```bash
npm install --save-dev prettier @shopify/prettier-plugin-liquid
```

Then format the repository:

```bash
npx prettier . --write
```

### Build and verify

Run a local build with Docker:

```bash
docker compose up --build
```

Then verify the site in a browser:

- navigation loads correctly
- edited pages render
- images and assets resolve
- dark mode still works

## Critical Configuration Rules

When editing `_config.yml`, keep these settings aligned:

- Personal site:
  - `url: https://username.github.io`
  - `baseurl:` should be empty
- Project site:
  - `url: https://username.github.io`
  - `baseurl: /repo-name`

Quote YAML strings containing special characters such as `:`, `&`, or `#`.

Example:

```yaml
title: "My: Cool Site"
```

## Commit Guidance

Follow `.github/GIT_WORKFLOW.md`.

Use explicit staging, and use the documented commit types:

- `feat`
- `fix`
- `docs`
- `style`
- `config`
- `chore`

Examples:

- `docs: update AGENTS.md guidance`
- `fix: correct baseurl configuration for project site`

## Common Pitfalls

- CSS or JS missing after deploy usually means `url` and `baseurl` are misconfigured in `_config.yml`.
- YAML parse errors usually come from unquoted special characters.
- Prettier failures in CI usually mean the repository was not formatted locally before commit.
- Local port conflicts usually require `docker compose down` before restarting.

## Documentation Entry Points

Use these root docs instead of duplicating information:

- `README.md`: project overview and feature summary
- `QUICKSTART.md`: fastest setup path
- `INSTALL.md`: installation and deployment details
- `CUSTOMIZE.md`: theme and content customization
- `TROUBLESHOOTING.md`: debugging common failures

## Agent Expectations

- Prefer concise, reversible edits.
- Do not create duplicate instruction files for the same purpose.
- Keep documentation synchronized with actual repository behavior.
- If you change commands, configuration, or workflows, update the relevant docs in the same task when appropriate.
