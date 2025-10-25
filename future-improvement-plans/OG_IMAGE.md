# Task: Create and Implement a Default Open Graph (OG) Image

- **Status:** Not Started
- **Priority:** High
- **Owner:** Unassigned

## 1. Goal

To ensure that any page from the website shared on social media (Facebook, Twitter, LinkedIn, etc.) displays a professional, branded, and visually appealing preview image.

Currently, pages that do not have a specific image defined in their front matter (such as the homepage) will either show no image or a randomly scraped one, which undermines brand credibility and reduces user engagement.

## 2. Acceptance Criteria

- A default Open Graph image file, `og-image.jpg`, exists in the `/assets/images/` directory.
- When the homepage URL (e.g., `https://adventacnc.com.tr/en/`) is tested in a social media debugger, the new default image is displayed correctly.
- When a machine page URL (e.g., `.../en/machines/impera-fx-1325/`) is tested, the **specific machine's image** is displayed, confirming the fallback logic is working correctly.

## 3. Implementation Plan

This task involves two parts: image design and code verification.

### Part A: Image Design & Creation

The goal is to create a "visual billboard" for the brand, not just a logo on a plain background.

1.  **Create a new image** with the following technical specifications:
    - **Dimensions:** **1200 x 630 pixels** (1.91:1 aspect ratio).
    - **File Format:** JPG (optimized for the web).
    - **File Size:** Keep under 5MB, ideally under 300KB.

2.  **The design should include:**
    - A high-quality, professional background photo (e.g., a striking shot of a CNC machine in action).
    - The **Adventa logo**, placed tastefully in a corner or prominent position.
    - The main company tagline, such as **"Adventa CNC Solutions"** or **"Precision Flatbed CNC Routers"**, overlaid in the brand's font (Montserrat).

3.  **Save the final file** as `og-image.jpg` and place it in the `/assets/images/` directory.

### Part B: Code Verification

1.  **Confirm the fallback logic** is present in `_layouts/default.html`. The following code block should be in the `<head>` section:

    ```liquid
    {% raw %}
    {% assign og_image = page.image | default: '/assets/images/og-image.jpg' %}
    <meta property="og:image" content="{{ site.url }}{{ og_image }}">
    <meta property="twitter:image" content="{{ site.url }}{{ og_image }}">
    {% endraw %}
    ```
    *(Note: Added `twitter:image` for completeness).*

2.  After committing the new `og-image.jpg` file, **test the URLs** using the official social media debugging tools to ensure the image appears correctly and to clear any old caches.

## 4. Tools for Verification

- **Facebook Sharing Debugger:** [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
- **Twitter Card Validator:** [https://cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
- **LinkedIn Post Inspector:** [https://www.linkedin.com/post-inspector/](https://www.linkedin.com/post-inspector/)