---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

The City Science Laboratory brings together a multidisciplinary team of researchers with expertise in physics, mathematics, and computer science. United by a common goal of understanding urban complexity, we develop innovative methodologies and computational tools to address challenges in mobility, climate resilience, and energy efficiency.

{% include section.html %}

{% for member in site.members | sort: "order" %}
  {% include portrait.html 
    name=member.name
    image=member.image
    role=member.role
    affiliation=member.affiliation
    links=member.links
    order=member.order
    description=member.description
    slug=member.slug
  %}
{% endfor %}


