---
layout: default
title: Artwork
permalink: /artwork/
---

# Artwork

Browse through Artist Name's portfolio of works, organized by series and medium.

<div class="artwork-filters">
  <button class="filter active" data-filter="all">All</button>
  <button class="filter" data-filter="paintings">Paintings</button>
  <button class="filter" data-filter="sculptures">Sculptures</button>
  <button class="filter" data-filter="mixed-media">Mixed Media</button>
</div>

<div class="gallery artwork-gallery">
  {% assign all_artwork = site.artwork | sort: 'date' | reverse %}
  {% for artwork in all_artwork %}
    <div class="artwork-card" data-category="{{ artwork.categories | join: ' ' }}">
      <a href="{{ artwork.url }}">
        <img src="{{ artwork.image | relative_url }}" alt="{{ artwork.title }}">
        <h3>{{ artwork.title }}</h3>
        <p>{{ artwork.medium }}, {{ artwork.year }}</p>
      </a>
    </div>
  {% endfor %}
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.artwork-filters .filter');
    const artworks = document.querySelectorAll('.artwork-gallery .artwork-card');
    
    filters.forEach(filter => {
      filter.addEventListener('click', function() {
        // Update active filter
        filters.forEach(f => f.classList.remove('active'));
        this.classList.add('active');
        
        // Filter artwork
        const category = this.getAttribute('data-filter');
        
        artworks.forEach(artwork => {
          if (category === 'all' || artwork.getAttribute('data-category').includes(category)) {
            artwork.style.display = 'block';
          } else {
            artwork.style.display = 'none';
          }
        });
      });
    });
  });
</script>
