# AdventaCNC Project Documentation

## Overview

This is a Jekyll-based static website for AdventaCNC. The website is multilingual, with support for English and Turkish.

## Directory Structure

- `_data`: Contains data files, such as translations and machine specifications.
  - `en.yml`: English translations.
  - `tr.yml`: Turkish translations.
  - `machines.yml`: Machine specifications.
- `_includes`: Contains reusable HTML components.
  - `footer.html`: The website footer.
  - `header.html`: The website header.
- `_layouts`: Contains the HTML layouts for pages.
  - `default.html`: The default layout.
  - `machine.html`: The layout for machine pages.
- `_site`: The generated static website. This directory is not versioned.
- `assets`: Contains static assets, such as CSS and JavaScript.
- `en`: Contains the English version of the website.
  - `index.md`: The English homepage.
  - `machines`: Contains the English machine pages.
- `tr`: Contains the Turkish version of the website.
  - `index.md`: The Turkish homepage.
  - `machines`: Contains the Turkish machine pages.
- `future-improvement-plans`: Contains documents related to future improvements.
- `index.html`: The main entry point of the website.
- `CNAME`: Contains the custom domain for GitHub Pages.
- `Gemfile`: The list of Ruby gems used by the project.
- `_config.yml`: The Jekyll configuration file.
- `README.md`: The project README file.
- `DOCUMENTATION.md`: This file.

## How to Build and Run

1. **Install Jekyll and Bundler:**
   ```bash
   gem install jekyll bundler
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Build and run the website:**
   ```bash
   bundle exec jekyll serve
   ```

The website will be available at `http://localhost:4000`.
