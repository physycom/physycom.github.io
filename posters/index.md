---
title: Posters
nav:
  order: 3
  tooltip: Posters presented at workshops and conferences
---

# {% include icon.html icon="fa-solid fa-image" %}Posters

{% include section.html %}

{% assign posters = site.data.posters | sort: "date" | reverse %}
{% for poster in posters %}
<div class="citation-container" markdown="0">
<div class="citation">
<div class="citation-text">
{% include icon.html icon="fa-solid fa-chalkboard" %}
<a href="{{ poster.pdf | relative_url }}" target="_blank" class="citation-title">{{ poster.title }}</a>
<div class="citation-authors">
{% for author in poster.authors %}{% if author.member %}<a href="{{ '/members/' | append: author.member | relative_url }}">{{ author.name }}</a>{% else %}{{ author.name }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}
</div>
<div class="citation-details">
{% if poster.event %}<span class="citation-publisher">{{ poster.event }}</span>&nbsp;·&nbsp;{% endif %}<span class="citation-date">{{ poster.date | date: "%Y" }}</span>
</div>
<div class="citation-buttons">
{% include button.html type="link" icon="fa-solid fa-file-pdf" text="View PDF" link=poster.pdf style="bare" %}
</div>
</div>
</div>
</div>
{% endfor %}
