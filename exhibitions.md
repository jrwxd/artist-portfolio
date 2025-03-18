---
layout: default
title: Exhibitions
permalink: /exhibitions/
---

# Exhibitions

Explore past, current, and upcoming exhibitions featuring Artist Name's work.

## Current & Upcoming

<div class="exhibitions">
  {% assign current_exhibitions = site.data.exhibitions | where: "status", "current" %}
  {% for exhibition in current_exhibitions %}
    <div class="exhibition-card" id="{{ exhibition.title | slugify }}">
      <img src="{{ exhibition.image | relative_url }}" alt="{{ exhibition.title }}">
      <div class="exhibition-details">
        <h3>{{ exhibition.title }}</h3>
        <p class="exhibition-location">{{ exhibition.venue }}, {{ exhibition.location }}</p>
        <p class="exhibition-dates">{{ exhibition.start_date | date: "%B %d, %Y" }} - {{ exhibition.end_date | date: "%B %d, %Y" }}</p>
        <div class="exhibition-description">{{ exhibition.description }}</div>
        {% if exhibition.link %}
          <a href="{{ exhibition.link }}" class="button" target="_blank">Learn More</a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
  
  {% assign upcoming_exhibitions = site.data.exhibitions | where: "status", "upcoming" %}
  {% for exhibition in upcoming_exhibitions %}
    <div class="exhibition-card" id="{{ exhibition.title | slugify }}">
      <img src="{{ exhibition.image | relative_url }}" alt="{{ exhibition.title }}">
      <div class="exhibition-details">
        <h3>{{ exhibition.title }}</h3>
        <p class="exhibition-location">{{ exhibition.venue }}, {{ exhibition.location }}</p>
        <p class="exhibition-dates">{{ exhibition.start_date | date: "%B %d, %Y" }} - {{ exhibition.end_date | date: "%B %d, %Y" }}</p>
        <div class="exhibition-description">{{ exhibition.description }}</div>
        {% if exhibition.link %}
          <a href="{{ exhibition.link }}" class="button" target="_blank">Learn More</a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

## Past Exhibitions

<div class="exhibitions past-exhibitions">
  {% assign past_exhibitions = site.data.exhibitions | where: "status", "past" | sort: 'end_date' | reverse %}
  {% for exhibition in past_exhibitions %}
    <div class="exhibition-card" id="{{ exhibition.title | slugify }}">
      <img src="{{ exhibition.image | relative_url }}" alt="{{ exhibition.title }}">
      <div class="exhibition-details">
        <h3>{{ exhibition.title }}</h3>
        <p class="exhibition-location">{{ exhibition.venue }}, {{ exhibition.location }}</p>
        <p class="exhibition-dates">{{ exhibition.start_date | date: "%B %d, %Y" }} - {{ exhibition.end_date | date: "%B %d, %Y" }}</p>
        <div class="exhibition-description">{{ exhibition.description }}</div>
        {% if exhibition.link %}
          <a href="{{ exhibition.link }}" class="button" target="_blank">Learn More</a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
