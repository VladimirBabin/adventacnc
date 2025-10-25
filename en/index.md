---
layout: default
lang: en
title: "Adventa | Precision CNC Router Solutions"
---

<section id="hero" class="hero-section">
    <div class="container text-center">
        <h1 class="hero-headline">{{ site.data.en.hero.headline }}</h1>
        <p class="hero-subheading">{{ site.data.en.hero.subheading }}</p>
        <a href="#machines" class="btn btn-primary">{{ site.data.en.hero.discover_button }}</a>
    </div>
</section>

<section id="machines" class="machines-section">
    <div class="container">
        <h2 class="section-headline">{{ site.data.en.machines_section.headline }}</h2>
        <div class="machines-grid">
            {% for machine in site.data.machines %}
            <article class="machine-card">
                <img src="/assets/images/{{ machine.slug }}.jpg"
                     alt="The {{ machine.model }} flatbed CNC router processing components with precision."
                     class="machine-image"
                     loading="lazy">
                <div class="card-content">
                    <h3>{{ machine.model }}</h3>
                    <ul class="spec-list">
                        <li>Table Size: {{ machine.tableSize }}</li>
                        <li>{{ machine.spindle }}</li>
                        <li>{{ machine.controller }}</li>
                        <li>{{ machine.vacuum }}</li>
                        <li>{{ machine.toolChanger }}</li>
                    </ul>
                    <a href="/en/machines/{{ machine.slug }}.html" class="btn btn-secondary">{{ site.data.en.machines_section.learn_more_button }}</a>
                </div>
            </article>
            {% endfor %}
        </div>
    </div>
</section>

<section id="why-adventa" class="why-adventa-section">
    <div class="container">
        <h2 class="section-headline">{{ site.data.en.why_adventa_section.headline }}</h2>
        <div class="advantage-grid">
            {% for advantage in site.data.en.why_adventa_section.advantages %}
            <article class="advantage-card">
                <h3>{{ advantage.title }}</h3>
                <p>{{ advantage.description }}</p>
            </article>
            {% endfor %}
        </div>
    </div>
</section>

<section id="contact" class="contact-section">
    <div class="container">
        <h2 class="section-headline">{{ site.data.en.contact_section.headline }}</h2>
        <p class="contact-text text-center">{{ site.data.en.contact_section.text }}</p>
        <div class="contact-wrapper">
            <form class="contact-form" action="https://formspree.io/f/xeopjnzq" method="POST">
                <div class="form-group">
                    <label for="name">{{ site.data.en.contact_section.form.name_label }}</label>
                    <input type="text" id="name" name="name" required placeholder="{{ site.data.en.contact_section.form.name_placeholder }}">
                </div>
                <div class="form-group">
                    <label for="email">{{ site.data.en.contact_section.form.email_label }}</label>
                    <input type="email" id="email" name="email" required placeholder="{{ site.data.en.contact_section.form.email_placeholder }}">
                </div>
                <div class="form-group">
                    <label for="message">{{ site.data.en.contact_section.form.message_label }}</label>
                    <textarea id="message" name="message" rows="6" required placeholder="{{ site.data.en.contact_section.form.message_placeholder }}"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-submit">{{ site.data.en.contact_section.form.submit_button }}</button>
            </form>
            <div class="contact-info">
                <h3>{{ site.data.en.contact_info.headline }}</h3>
                <address class="contact-details">
                    <div class="contact-item">
                        <strong>{{ site.data.en.contact_info.email }}</strong>
                        <a href="mailto:info@adventacnc.com">info@adventacnc.com</a>
                    </div>
                    <div class="contact-item">
                        <strong>{{ site.data.en.contact_info.phone }}</strong>
                        <a href="tel:+905052739698">+90 (505) 273 96 98</a>
                    </div>
                    <div class="contact-item">
                        <strong>{{ site.data.en.contact_info.address }}</strong>
                        <p>Hatip Mah. Sarisalkim 3.Sk No: 1<br>Corlu / Tekirdag<br>TURKIYE</p>
                    </div>
                    <div class="contact-item">
                        <strong>{{ site.data.en.contact_info.business_hours }}</strong>
                        <p>{{ site.data.en.contact_info.business_hours_details }}</p>
                    </div>
                </address>
            </div>
        </div>
    </div>
</section>
