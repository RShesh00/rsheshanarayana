---
layout: page
title: projects
permalink: /projects/
description:
nav: true
nav_order: 3
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">

{% assign sorted_projects = site.projects | sort: "importance" %}
{% assign all_years = sorted_projects | map: "year" | uniq | sort | reverse %}

{% for year in all_years %}
  <h2 class="category">{{ year }}</h2>
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% if project.year == year %}
        {% include projects.liquid %}
      {% endif %}
    {% endfor %}
  </div>
{% endfor %}

</div>
