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
{% assign grouped = sorted_projects | group_by: "year" | sort: "name" | reverse %}

{% for group in grouped %}
  <h2 class="category">{{ group.name }}</h2>
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in group.items %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endfor %}

</div>
