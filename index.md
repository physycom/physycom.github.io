---
---

# physycom's Website

The City Science Laboratory is a multidisciplinary research group within the Department of Physics and Astronomy at the University of Bologna.
The Laboratory leverages expertise in physics, mathematics, and computer science to explore and understand the complexity of urban systems.
With a focus on mobility, climate, and energy, the Laboratory aims to contribute to the development of sustainable and resilient cities by advancing scientific methodologies and computational tools.
The Laboratory collaborates closely with CINECA, one of the largest high-performance computing centers in Europe, on several urban Digital Twin initiatives.
A notable example is the Digital Twin of the City of Bologna, which integrates diverse datasets and advanced modeling techniques to provide actionable insights for urban planning, climate adaptation, and energy efficiency.
The Laboratory offers the expertise in the fields, Urban LiDAR and Orthophoto Analysis, Infrastructure Morphology and Indicators, Vegetation and Climate Vulnerability Indices, Building Energy Simulations, Urban Microclimate Simulations, Vehicular Mobility Modeling, Pedestrian Dynamics and Crowd Analysis.
The City Science Laboratory combines advanced computational methods with real-world applications, fostering collaborations with
stakeholders to address critical urban challenges and promote evidence-based decision-making.

{% include section.html %}

## Highlights

{% capture text %}

Get insights of our research interests and explore our publications.

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/research.png"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

Explore our projects and collaborations.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/projects.png"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

Meet the people running the lab, and get in touch!

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/team.png"
  link="team"
  title="Our Team"
  text=text
%}
