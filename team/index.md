---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

The City Science Laboratory brings together a multidisciplinary team of researchers with expertise in physics, mathematics, and computer science. United by a common goal of understanding urban complexity, we develop innovative methodologies and computational tools to address challenges in mobility, climate resilience, and energy efficiency.

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'pi'" %}
{% include list.html data="members" component="portrait" filter="role != 'pi'" %}


