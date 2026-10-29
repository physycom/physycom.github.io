---
title: Seminars
nav:
  order: 2
  tooltip: Synthetic Populations Seminar Series
description: "Synthetic Populations Seminar Series at the City Science Laboratory, University of Bologna. Methods, validation and applications. Hybrid seminars, autumn 2026."
---

{% include section.html size="full" %}

{% assign sem = site.data.seminars %}
<div class="sp">
<section class="hero" aria-labelledby="series-title">
<div class="wrap hero-inner">
<div class="hero-copy">
<div class="eyebrow"><span class="eyebrow-dot"></span>Research seminars · Autumn 2026</div>
<h1 id="series-title">Synthetic<br>Populations</h1>
<p class="hero-subtitle">Methods, validation and applications.</p>
<div class="hero-bottom"><a class="hero-link" href="#programme">Explore the programme <span aria-hidden="true">↓</span></a><span class="hero-edition">Bologna &amp; online</span></div>
</div>
<div class="population" aria-hidden="true">
{% include sp-population.html %}
</div>
</div>
</section>
<div class="wrap">
<section class="info" aria-label="Seminar information">
<div><div class="info-label">When</div><div class="info-value">Tuesdays · 16:00<br><span class="info-sub">Europe/Rome</span></div></div>
<div><div class="info-label">Where</div><div class="info-value">Aula Teorici · First floor<br><span class="info-sub">Via Irnerio 46, Bologna</span></div></div>
<div><div class="info-label">Format</div><div class="info-value">In person &amp; online<br><span class="info-sub">Online via Microsoft Teams</span></div></div>
<div><div class="info-label">Language</div><div class="info-value">English</div></div>
</section>
<section class="about" aria-labelledby="about-title">
<div><span class="section-number">01 / ABOUT THE SERIES</span><h2 class="section-title" id="about-title">Building populations.<br>Studying complexity.</h2></div>
<div class="about-copy">
<p>Synthetic populations are individual-level reconstructions of real populations, built from official aggregates, registers and surveys to reproduce selected statistical characteristics. Geographically detailed representations of individuals and households provide a foundation for studying population heterogeneity, spatial inequalities and collective behaviour, connecting demographic and socioeconomic data to computational models.</p>
<p>This seminar series explores how synthetic populations are constructed, validated and used. Methods range from statistical reconstruction and maximum-entropy modelling to deep generative approaches. Generative AI opens further possibilities both for population synthesis—integrating heterogeneous sources and modelling complex dependencies—and for simulation, combining synthetic populations with agent-based models and agents powered by large language models.</p>
<p>These developments extend across urban systems and mobility, public health and medicine, economics and finance, communication and other areas of social research. They also raise scientific and computational challenges: which features of real populations can be recovered from available data? How should uncertainty, bias and model validity be assessed? How can individual attributes and simulated behaviours remain consistent across spatial scales? And how can increasingly large and complex populations be generated, simulated and analysed efficiently using high-performance computing?</p>
<p>Bringing together perspectives from physics, statistics, computer science and the social and health sciences, the series aims to connect methodological advances with applications, with particular attention to validation, reproducibility and computational scalability.</p>
<p class="themes">Population synthesis · Maximum entropy · Reproducibility · Agent-based modelling · Generative AI</p>
</div>
</section>
<section class="programme" id="programme" aria-labelledby="programme-title">
<div class="section-head"><div><span class="section-number">02 / SEMINARS</span><h2 class="section-title" id="programme-title">The programme</h2></div><span class="season">November — December 2026</span></div>
<div id="talks">
{% for t in sem.talks %}
{% assign n = forloop.index | prepend: "0" | slice: -2, 2 %}
<article class="talk" aria-labelledby="title-{{ t.id }}"{% if t.date_confirmed %} data-end="{{ t.end }}"{% endif %}>
<div class="talk-date">
{% if t.date_confirmed %}
<time datetime="{{ t.start }}"><span class="date-day">{{ t.date | date: "%-d" }}</span><span class="date-month">{{ t.date | date: "%b" }} {{ t.date | date: "%Y" }}</span><span class="date-time">16:00 Europe/Rome</span></time>
{% else %}
<span class="date-pending">December</span><span class="date-options">{{ t.date_options | default: "Date to be confirmed" }}<br>Date to be confirmed</span>
{% endif %}
</div>
<div>
<div class="talk-topline"><span class="talk-number">SEMINAR {{ n }}</span>{% unless t.date_confirmed %}<span class="tag">Date to be confirmed</span>{% endunless %}{% if t.online_only %}<span class="tag">Online only</span>{% endif %}<span class="tag tag-next" hidden>Next seminar</span></div>
<h3 id="title-{{ t.id }}"{% unless t.date_confirmed %} class="pending-title"{% endunless %}>{{ t.title }}</h3>
<p class="speaker">{{ t.speaker }}<span class="affiliation">{{ t.affiliation }}</span></p>
<div class="talk-actions">
{% if t.date_confirmed %}
{% if t.teams_url != "" and t.teams_url %}<a class="action action-primary" data-future href="{{ t.teams_url }}" target="_blank" rel="noopener noreferrer">Join on Teams <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10"/></svg></a>{% endif %}
{% endif %}
{% if t.video_url != "" and t.video_url %}<a class="action action-primary" href="{{ t.video_url }}" target="_blank" rel="noopener noreferrer">Watch recording <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10"/></svg></a>{% endif %}
{% if t.slides_url != "" and t.slides_url %}<a class="action" href="{{ t.slides_url }}" target="_blank" rel="noopener noreferrer">Slides <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10"/></svg></a>{% endif %}
{% if t.paper_url != "" and t.paper_url %}<a class="action" href="{{ t.paper_url }}" target="_blank" rel="noopener noreferrer">Related paper <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10"/></svg></a>{% endif %}
{% if t.date_confirmed %}<button class="action calendar" type="button" hidden data-talk="{{ t.id }}"><svg viewBox="0 0 20 20" aria-hidden="true"><rect x="3" y="4.5" width="14" height="13" rx="1.5"/><path d="M6 2v5m8-5v5M3 9h14"/></svg>Add to calendar<span class="sr-only">: {{ t.speaker }}, {{ t.date | date: "%-d %B %Y" }}</span></button>{% endif %}
{% if t.date_confirmed and t.teams_url == "" %}<span class="forthcoming" data-future>Teams link forthcoming</span>{% endif %}
</div>
{% if t.abstract != "" and t.abstract %}<details><summary>Read abstract</summary><p>{{ t.abstract | escape | newline_to_br }}</p></details>{% endif %}
</div>
</article>
{% endfor %}
</div>
<p class="programme-note">Online access links will be added here before each seminar.</p>
</section>
</div>
<section class="attend" id="attend" aria-labelledby="attend-title">
<div class="wrap attend-inner">
<div><span class="section-number">03 / JOIN US</span><h2 class="section-title" id="attend-title">Attend a seminar</h2></div>
<div>
<div class="attend-columns">
<div><h3>In Bologna</h3><p>Aula Teorici, first floor<br>Department of Physics and Astronomy<br>University of Bologna<br>Via Irnerio 46, Bologna, Italy</p><a class="small-link" href="https://www.openstreetmap.org/search?query=Via%20Irnerio%2046%2C%20Bologna" target="_blank" rel="noopener noreferrer">Find the venue <span aria-hidden="true">↗</span></a></div>
<div><h3>Online</h3><p>Join via the Microsoft Teams link listed with each seminar. All times are given in Europe/Rome. The seminars are held in English, with discussion following the presentation.</p><a class="small-link" href="mailto:mirko.degliesposti@unibo.it">Contact the organiser <span aria-hidden="true">↗</span></a></div>
</div>
<div class="recordings-note" id="recordings">Recordings and materials will be linked alongside each talk when available, subject to the speaker’s approval.{% if sem.youtube_channel_url != "" %} <a href="{{ sem.youtube_channel_url }}" target="_blank" rel="noopener noreferrer">Visit our YouTube channel ↗</a>{% endif %}</div>
</div>
</div>
</section>
<section class="newsletter" id="mailing-list" aria-labelledby="newsletter-title">
<div class="wrap newsletter-inner">
<div><span class="section-number">04 / SEMINAR ANNOUNCEMENTS</span><h2 class="section-title" id="newsletter-title">Stay informed</h2></div>
<div class="newsletter-copy">
<p>Receive seminar announcements, online access details and links to recordings.</p>
{% if sem.mailing_list_url != "" and sem.mailing_list_url %}
<a class="action action-primary" href="{{ sem.mailing_list_url }}" target="_blank" rel="noopener noreferrer">Subscribe to the mailing list <span aria-hidden="true">↗</span></a>
<p class="newsletter-note">You can unsubscribe at any time using the link in each announcement.</p>
{% else %}
<p class="newsletter-status">Mailing list registration will open soon.</p>
{% endif %}
<p class="newsletter-note">Seminar attendance is open. A mailing list subscription is not required to attend.</p>
</div>
</div>
</section>
<div class="wrap sp-contact"><p>Series organiser: Mirko Degli Esposti · <a href="mailto:mirko.degliesposti@unibo.it">mirko.degliesposti@unibo.it</a></p></div>
</div>

<script id="seminar-data" type="application/json">{{ sem.talks | jsonify }}</script>
<script src="{{ '/seminars/synthetic-populations/seminars.js' | relative_url }}"></script>
