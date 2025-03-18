---
layout: default
title: Contact
permalink: /contact/
---

# Contact

Get in touch with Artist Name for inquiries about commissions, exhibitions, artwork sales, or any other questions.

<div class="contact-content">
  <div class="contact-info">
    <h2>Contact Information</h2>
    <p>Email: <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
    {% if site.phone %}<p>Phone: {{ site.phone }}</p>{% endif %}
    {% if site.studio_address %}
    <h3>Studio Address</h3>
    <address>
      {{ site.studio_address | newline_to_br }}
    </address>
    {% endif %}
    
    <h3>Social Media</h3>
    <div class="social-links">
      {% if site.social.instagram %}<a href="{{ site.social.instagram }}" target="_blank">Instagram</a>{% endif %}
      {% if site.social.facebook %}<a href="{{ site.social.facebook }}" target="_blank">Facebook</a>{% endif %}
      {% if site.social.twitter %}<a href="{{ site.social.twitter }}" target="_blank">Twitter</a>{% endif %}
    </div>
  </div>
  
  <div class="contact-form">
    <h2>Send a Message</h2>
    <form action="https://formspree.io/f/your-formspree-id" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      
      <button type="submit" class="button">Send Message</button>
    </form>
  </div>
</div>

<style>
  .contact-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    .contact-content {
      grid-template-columns: 1fr;
    }
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  
  .social-links {
    display: flex;
    gap: 15px;
  }
</style>
