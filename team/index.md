---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

<p style="font-family: 'Georgia', serif; font-size: 18px;">
The City Science Laboratory brings together a multidisciplinary team of researchers with expertise in physics, mathematics, and computer science. United by a common goal of understanding urban complexity, we develop innovative methodologies and computational tools to address challenges in mobility, climate resilience, and energy efficiency.
</p>

{% include section.html %}

{% assign current_members = site.members | where: "category", "current" | sort: "order" %}
{% assign former_members = site.members | where: "category", "former" | sort: "order" %}
{% assign external_members = site.members | where: "category", "external" | sort: "order" %}

## Current Members

{% for member in current_members %}
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

{% if former_members.size > 0 %}
## Former Members

{% for member in former_members %}
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
{% endif %}

{% if external_members.size > 0 %}
## External Collaborators

{% for member in external_members %}
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
{% endif %}


