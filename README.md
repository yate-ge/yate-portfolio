# Yate Ge | Personal Website

This repository powers [yate.fun](https://yate.fun), the personal academic portfolio of Yate Ge.

The site is used to present research, projects, publications, news, blog content, and academic background. It is built with [Jekyll](https://jekyllrb.com/) and customized from the [al-folio](https://github.com/alshedivat/al-folio) theme.

## About

Yate Ge is a Ph.D. candidate in Design at Tongji University. The website focuses on:

- Human-Computer Interaction
- Human-Robot Interaction
- Intelligent agent interface design
- Research projects and publications
- Academic CV and profile information

## Live Site

- Production: [https://yate.fun](https://yate.fun)

## Main Sections

- `About`: short bio, selected publications, and recent news
- `Projects`: research and design projects
- `Publications`: BibTeX-driven publication list
- `CV`: academic resume
- `Blog`: notes, thoughts, and tutorials
- `Teaching`: course-related content

## Local Development

Docker is the recommended workflow.

```bash
docker compose pull
docker compose up
```

The site will be available at [http://localhost:8080](http://localhost:8080).

To rebuild after dependency or Docker changes:

```bash
docker compose up --build
```

To stop the local server:

```bash
docker compose down
```

## Repository Structure

- `_config.yml`: site-wide configuration
- `_pages/`: top-level pages such as about, blog, projects, publications, and CV
- `_projects/`: project entries
- `_posts/`: blog posts
- `_news/`: announcements and updates
- `_bibliography/`: publication data
- `_data/`: structured metadata such as socials, venues, and CV data
- `_layouts/`, `_includes/`, `_sass/`: theme and presentation customization
- `assets/`: images, PDFs, and other static assets

## Editing Notes

- Update `_config.yml` for site metadata and global options.
- Update `_pages/about.md` for the homepage profile and introduction.
- Add projects in `_projects/`.
- Add publications in `_bibliography/papers.bib`.
- Update CV content in `_data/cv.yml` and related assets when needed.

## Formatting

Before committing documentation or content changes, format the repository with:

```bash
npx prettier . --write
```

## Credits

- Built with [Jekyll](https://jekyllrb.com/)
- Based on the [al-folio](https://github.com/alshedivat/al-folio) theme
