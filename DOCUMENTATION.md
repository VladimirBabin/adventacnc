# AdventaCNC Project Documentation

## 1. Overview

This document provides a detailed technical overview of the AdventaCNC website. The project is a multi-language static site built with **Jekyll**, designed for high performance, excellent SEO, and easy maintenance.

The core architectural goals are:
- **Separation of Concerns:** Content (text, specs) is completely decoupled from presentation (HTML, CSS).
- **Single Source of Truth:** Data, like machine specifications, is defined in one central place to avoid duplication and inconsistency.
- **Maintainability:** Content updates for non-developers should be as simple as editing a text or data file.

---

## 2. Architecture and Design Principles

### Data-Driven Content
All user-facing text is managed in YAML files within the `_data/` directory. This includes navigation links, section headlines, button text, and contact information. This approach is central to the site's internationalization (i18n) strategy.

### Internationalization (i18n)
The site supports English (`en`) and Turkish (`tr`). The language is determined by the `lang` variable in the front matter of each page. The layouts use this variable to pull content from the correct data file:

```liquid
{{ site.data[page.lang].hero.headline }}
```

This dynamically selects `site.data.en.hero.headline` or `site.data.tr.hero.headline` based on the page being rendered.

### Centralized Machine Data
All technical specifications for the CNC machines are stored in a single file: `_data/machines.yml`. The homepage and individual machine detail pages both read from this file. This ensures that a change to a machine's spec is automatically reflected everywhere on the site.

---

## 3. Directory Structure

- `_data/`: **Central Data Hub.** Contains all content.
    - `en.yml` / `tr.yml`: Contains all translated strings for the site UI.
    - `machines.yml`: The single source of truth for all machine models and their technical specifications.
- `_includes/`: **Reusable HTML Snippets.**
    - `header.html`, `footer.html`: Global components included on every page.
- `_layouts/`: **Page Templates.** Defines the structure of different page types.
    - `default.html`: The main HTML skeleton (doctype, head, body tags).
    - `home.html`: The layout for the multi-section homepage.
    - `machine.html`: The template for individual machine detail pages.
- `assets/`: **Static Assets.**
    - `css/`: Compiled stylesheets.
    - `images/`: Site images and product photos.
- `en/` & `tr/`: **Content Pages.** Language-specific directories.
    - `index.md`: The homepage for that language. It only contains front matter to select the `home` layout.
    - `machines/*.md`: Content files for each machine detail page. They contain only the descriptive text and `applications` front matter. All specs are pulled from `_data/machines.yml`.
- `index.html`: **Root Entry Point.** A language-agnostic file that detects the user's browser language (or `localStorage` preference) and performs a client-side redirect to `/en/` or `/tr/`.
- `_config.yml`: The main Jekyll configuration file.
- `Gemfile`: Ruby project dependencies, managed by Bundler.

---

## 4. Content Management Guide

This section is for making common content updates.

### How to Edit Text (e.g., a headline)
1.  Identify the text you want to change on the live site.
2.  Determine which section it belongs to (e.g., "Hero Section", "Contact Info").
3.  Open the corresponding language file: `_data/en.yml` or `_data/tr.yml`.
4.  Find the relevant key (e.g., `hero.headline`) and edit the text.
5.  Save the file. Your changes will appear after the site rebuilds.

### How to Edit Machine Specifications
1.  Open `_data/machines.yml`.
2.  Find the machine model you wish to update (e.g., `Impera FX 1325`).
3.  Modify the value for the desired spec under the `specs` key.
4.  Save the file. The changes will be reflected on both the homepage and the machine's detail page.

### How to Add a New Machine
1.  **Add Data:** Open `_data/machines.yml` and add a new entry for your machine. Follow the existing structure, ensuring you create a unique `slug`.
2.  **Add Image:** Add a corresponding product image named `{your-slug}.jpg` to the `/assets/images/` directory.
3.  **Create Content Pages:** Create two new markdown files:
    -   `en/machines/{your-slug}.md`
    -   `tr/machines/{your-slug}.md`
4.  **Fill Content Files:** Add the following front matter and description to each file (translating the `applications` text and description for the Turkish version):
   ---
   layout: machine
   lang: en
   image: "/assets/images/{your-slug}.jpg"
   applications: "A short, one-sentence description of the ideal use case."
   ---
   A full paragraph describing the new machine in detail.

5. **Save all files:** The new machine will automatically appear on the homepage and have its own detail pages.

---
For instructions on how to set up and run the project locally, please see the **[README.md](./README.md)** file.
