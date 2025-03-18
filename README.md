# Artist Portfolio Jekyll Site

This is a Jekyll-based portfolio website for artists to showcase their work, exhibitions, and news.

## Features

- Responsive design
- Portfolio/gallery of artwork
- Exhibition listings
- Blog/news section
- About page
- Contact form
- SEO optimization

## Getting Started

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Installation

1. Clone this repository
   ```
   git clone https://github.com/yourusername/artist-portfolio.git
   cd artist-portfolio
   ```

2. Install dependencies
   ```
   bundle install
   ```

3. Run the development server
   ```
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

## Site Configuration

Edit `_config.yml` to update site-wide configuration and information.

## Adding Content

### Artwork

Add new artwork by creating markdown files in the `collections/_artwork` directory.

### Blog Posts

Add new blog posts by creating markdown files in the `_posts` directory with the filename format `YYYY-MM-DD-title.md`.

### Exhibitions

Update exhibition information in the `_data/exhibitions.yml` file.

## Customization

- Colors and typography: Edit `_sass/variables.scss`
- Layout styles: Edit files in the `_sass` directory
- Templates: Edit files in the `_layouts` and `_includes` directories

## Deployment

This site can be deployed to GitHub Pages, Netlify, or any other static site hosting service.

### GitHub Pages

1. Push your changes to GitHub
2. Enable GitHub Pages in your repository settings

### Netlify

1. Connect your GitHub repository to Netlify
2. Configure the build command: `jekyll build`
3. Configure the publish directory: `_site`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
