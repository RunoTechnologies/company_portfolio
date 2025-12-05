# Runo Technologies - Portfolio Website

A modern, animated portfolio website for Runo Technologies, an AI startup specializing in complex mobile and web app development. Built with vanilla HTML, CSS, and JavaScript with smooth Framer-like animations.

## Features

- **Modern Design**: Dark theme with teal/purple gradient accents
- **Smooth Animations**: Scroll-triggered animations, parallax effects, and micro-interactions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Vanilla JS with no dependencies
- **Interactive Elements**: Magnetic buttons, counter animations, floating cards

## Quick Start

### Option 1: Open directly
Simply open `index.html` in your browser.

### Option 2: Local server (recommended)

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
npx serve
```

Using PHP:
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
company_portfolio/
├── index.html      # Main HTML file
├── styles.css      # Styling with animations
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Sections

1. **Navigation**: Fixed navbar with scroll effects
2. **Hero**: Animated intro with floating cards and dashboard mockup
3. **Trusted By**: Logos of partner companies
4. **Services**: Four service cards with icons
5. **Process**: Four-step workflow timeline
6. **Work/Portfolio**: Project showcase grid
7. **Testimonials**: Client testimonial cards
8. **Contact CTA**: Contact form with animated decoration
9. **Footer**: Links and company info

## Customization

### Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --accent-teal: #00D4AA;
    --accent-purple: #7B61FF;
    --accent-amber: #FFB547;
    --accent-rose: #FF6B9D;
    /* ... more variables */
}
```

### Content
Update the text content directly in `index.html`:
- Company name and logo
- Service descriptions
- Project portfolio items
- Testimonial quotes
- Contact information

### Animations
Modify animation timing in `styles.css`:

```css
:root {
    --transition-fast: 0.2s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Images**: Replace placeholder mockups with optimized images (WebP format recommended)
2. **Fonts**: Fonts are loaded from Google Fonts; consider self-hosting for production
3. **Minification**: Minify CSS and JS for production deployment

## Deployment

This static site can be deployed to any hosting platform:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the folder
- **GitHub Pages**: Push to a gh-pages branch
- **Cloudflare Pages**: Connect your repository

## License

This project is for Runo Technologies internal use.

---

Built with ❤️ for Runo Technologies

