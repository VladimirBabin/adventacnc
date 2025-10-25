# SEO Action Plan for Adventa CNC

This guide outlines the most important steps to improve your website's visibility in search engines like Google. The actions are prioritized to deliver the most significant business value first.

---

### **Priority 1: (Highest Impact) Set Up Google Business Profile**

*   **Action:** Create a Google Business Profile (formerly Google My Business).
*   **Why is that important:** This is the single most powerful action for a business with a physical address. It connects your business directly to local customers searching on Google and Google Maps. It provides immediate visibility, builds trust, and gives customers direct access to your phone number, address, and website. The return on investment for this action is extremely high.
*   **Steps to be done:**
    1.  Go to [google.com/business](https://google.com/business) and sign up with a Google account.
    2.  Enter your business name: **Adventa Makina**.
    3.  Enter your exact address: **Hatip Mah. Sarisalkim 3.Sk No: 1, Corlu / Tekirdag, TURKIYE**.
    4.  Fill out **every single field completely**: add your phone number, business hours, and a link to `https://adventacnc.com.tr/`.
    5.  Upload high-quality photos of your machines, your workshop, and your logo.
    6.  Choose relevant categories like "Machine Shop" or "Machinery Manufacturer."
    7.  Complete the verification process. Google will likely mail a postcard with a verification code to your physical address to confirm it's real.

---

### **Priority 2: (High Impact) Optimize Critical On-Page SEO Elements**

*   **Action:** Optimize your website's `<title>` tag and add a compelling `<meta name="description">`.
*   **Why is that important:** These two elements are what a user sees in the Google search results. A great title and description are your "advertisement" on Google—they convince the user to click on your link instead of a competitor's. They are a direct factor in your click-through rate (CTR), which search engines use as a quality signal.
*   **Steps to be done:**
    1.  **Rewrite the `<title>` Tag:** Make it more specific. A great formula is `Primary Product/Keyword | Business Name`. Open `index.html` and change:
        *   **From:** `<title>Adventa | Precision CNC Router Solutions</title>`
        *   **To:** `<title>Impera FX Flatbed CNC Routers | Adventa Makina</title>`
    2.  **Add a `<meta name="description">` Tag:** This tag goes inside the `<head>` section of `index.html`. It should be a concise summary (around 155 characters).
        *   **Add this line to your HTML:**
        ```html
        <meta name="description" content="Discover Adventa's Impera FX series of professional flatbed CNC routers. Engineered in Turkey for precision furniture making, interior building, and custom manufacturing. Request a quote today.">
        ```

---

### **Priority 3: (Essential Foundation) Set Up Google Search Console & Submit a Sitemap**

*   **Action:** Register your site with Google Search Console and provide a sitemap.
*   **Why is that important:** Google Search Console is your direct line of communication with Google. It's a free dashboard that shows you how your site is performing, what keywords people use to find you, and if there are any technical errors preventing your site from being indexed properly. Submitting a sitemap ensures Google knows about all the important pages on your site.
*   **Steps to be done:**
    1.  **Create a `sitemap.xml` file:** In your project's root directory, create a new file named `sitemap.xml` with the following content. Update the `<lastmod>` date whenever you make significant changes.
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>https://adventacnc.com.tr/</loc>
            <lastmod>2024-05-24</lastmod>
            <priority>1.0</priority>
          </url>
        </urlset>
        ```
    2.  Push this new file to your GitHub repository so it's live at `https://adventacnc.com.tr/sitemap.xml`.
    3.  Go to [Google Search Console](https://search.google.com/search-console/about).
    4.  Add your property using the "Domain" option. It will ask you to verify ownership by adding a DNS `TXT` record, which you already know how to do.
    5.  Once verified, navigate to the "Sitemaps" section in the left-hand menu.
    6.  Enter `sitemap.xml` into the box and click "Submit."

---

### **Priority 4: (Long-Term Growth) Enhance Website Content with Keywords**

*   **Action:** Expand the text on your website to include more detail and relevant keywords.
*   **Why is that important:** To rank for terms like "CNC for woodworking," your website needs to have rich, authoritative content about that topic. Currently, your site has great summaries, but adding more detail will signal to Google that you are an expert and provide more value to potential customers, which will improve your rankings over time.
*   **Steps to be done:**
    1.  **Keyword Research:** Use a free tool like Google Keyword Planner to find terms that your potential customers in Turkey are searching for (e.g., "ahşap CNC," "mobilya CNC router," etc.).
    2.  **Expand Machine Descriptions:** For each Impera FX model, add a short paragraph describing its ideal application. For example: "The Impera FX 1325 is the perfect entry-point for small to medium-sized workshops specializing in custom cabinetry and sign making..."
    3.  **Add an "Applications" or "Industries Served" Section:** Create a new section on your page. Add subheadings like `### Furniture & Cabinetry`, `### Sign Making`, `### Interior Architecture`, and write a sentence or two for each, explaining how your machines meet the needs of that industry. This is a natural way to include important keywords.

---

### **Priority 5: (Advanced/Ongoing) Build Authority with Backlinks**

*   **Action:** Acquire links to your website from other relevant, reputable websites.
*   **Why is that important:** Backlinks are like "votes of confidence" from other sites. When a reputable site links to you, it signals to Google that your website is trustworthy and authoritative, which is a major factor in ranking higher. This is a long-term, ongoing strategy.
*   **Steps to be done:**
    1.  **Start with Local Directories:** Get your business listed in reputable Turkish business directories, ensuring your name, address, and phone number are consistent.
    2.  **Contact Suppliers/Partners:** If you have suppliers for parts or software (like Syntec or Alphacam), see if they have a "Partners" or "Customers" page where they might be willing to link to your site.
    3.  **Industry Associations:** If you are a member of any manufacturing or woodworking associations in Turkey, ensure your website is listed in their member directory.