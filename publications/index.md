---
title: Publications
nav:
  order: 3
  tooltip: Published works
---

# {% include icon.html icon="fa-solid fa-microscope" %}Publications


{% include section.html %}

## Submitted
{% include list.html data="citations" component="citation" style="rich" filter="type == 'preprint'" %}


{% include section.html %}

## Published

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" filter="type != 'preprint'" %}
