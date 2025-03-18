---
layout: default
title: News
permalink: /news/
---

# News & Updates

Stay informed about Artist Name's latest exhibitions, projects, press coverage, and more.

<div class="posts news-posts">
  {% for post in site.posts %}
    <article class="post-card">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
      
      {% if post.categories.size > 0 %}
      <div class="post-categories">
        {% for category in post.categories %}
        <span class="category">{{ category }}</span>
        {% endfor %}
      </div>
      {% endif %}
      
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      <a href="{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>

<div class="newsletter-signup">
  <h2>Subscribe to Newsletter</h2>
  <p>Sign up to receive updates about new artwork, exhibitions, and events.</p>
  
  <form action="https://formspree.io/f/your-formspree-id" method="POST" class="newsletter-form">
    <div class="form-group">
      <input type="email" id="email-signup" name="email" placeholder="Your email address" required>
      <button type="submit" class="button">Subscribe</button>
    </div>
  </form>
</div>

<style>
  .news-posts {
    margin-bottom: 4rem;
  }
  
  .newsletter-signup {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 5px;
    text-align: center;
  }
  
  .newsletter-form {
    max-width: 500px;
    margin: 1.5rem auto 0;
  }
  
  .newsletter-form .form-group {
    display: flex;
  }
  
  .newsletter-form input {
    flex-grow: 1;
    margin-right: 10px;
  }
</style>
