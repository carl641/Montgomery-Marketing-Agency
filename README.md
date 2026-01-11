# Gomery Marketing Website

A modern, SEO-optimized website for Gomery Marketing, a full-service digital marketing agency based in Montgomery, Alabama.

## Overview

This is a lightweight, performance-focused website built with vanilla HTML5, CSS3, and JavaScript. No frameworks required—just clean, semantic code optimized for search engines and user experience.

## Features

- **Mobile-First Responsive Design**: Optimized for all devices (320px to 1440px+)
- **SEO-Optimized**: Complete with meta tags, structured data, and semantic HTML
- **Accessibility-Focused**: ARIA labels, focus states, color contrast compliance
- **Performance-Optimized**: Minimal CSS/JS, efficient loading patterns
- **Local SEO Ready**: Schema.org LocalBusiness markup, NAP consistency

## Project Structure

```
/
├── index.html          # Homepage
├── services.html       # Services page with 4 service sections
├── about.html          # About page with team section
├── contact.html        # Contact page with form and Google Maps
├── sitemap.xml         # XML sitemap for search engines
├── robots.txt          # Search engine crawler instructions
├── css/
│   └── styles.css      # Main stylesheet with CSS custom properties
├── js/
│   └── main.js         # JavaScript for interactivity
└── README.md           # This file
```

## Pages

### Homepage (index.html)
- Hero section with value proposition
- Services overview with 4 service cards
- Why choose us section
- Client testimonials
- Call-to-action sections

### Services (services.html)
- **Web Design & Development** (#web-design)
- **Search Engine Optimization** (#seo)
- **Social Media Marketing** (#social-media)
- **Graphic Design & Branding** (#graphic-design)

Each service section includes:
- Service description and benefits
- Process overview
- Call-to-action

### About (about.html)
- Company story and mission
- Core values
- Local Montgomery connection
- Team member profiles

### Contact (contact.html)
- Contact form with validation
- Business contact information
- Google Maps embed
- Social media links
- Business hours

## SEO Features

### Meta Tags
- Unique title tags (50-60 characters)
- Meta descriptions (150-160 characters)
- Open Graph tags for social sharing
- Twitter Card meta tags
- Canonical URLs

### Structured Data (JSON-LD)
- LocalBusiness schema on homepage
- Service schema on services page
- Organization schema on about page
- ContactPage schema on contact page

### Technical SEO
- Semantic HTML5 structure
- Single H1 per page
- Logical heading hierarchy
- Internal linking between pages
- NAP in footer on every page
- XML sitemap
- robots.txt

### Target Keywords
**Primary:**
- Montgomery Alabama marketing agency
- Montgomery AL web design
- SEO services Montgomery Alabama
- Digital marketing Montgomery AL

**Secondary:**
- Social media marketing Montgomery
- Graphic design services Alabama
- Small business marketing Montgomery
- Website development Montgomery Alabama

## Deployment

### Prerequisites
- Any web server (Apache, Nginx, or static hosting)
- No build process required

### Deployment Steps

1. **Upload Files**
   Upload all files to your web server maintaining the directory structure.

2. **Update URLs**
   Replace `https://www.gomerymarketing.com` with your actual domain in:
   - All HTML files (canonical URLs, Open Graph tags)
   - sitemap.xml
   - robots.txt

3. **Add Images**
   Create an `/images` directory and add:
   - `og-image.jpg` (1200x630px for social sharing)
   - `twitter-card.jpg` (1200x600px for Twitter)
   - Team photos and other imagery

4. **Configure SSL**
   Ensure HTTPS is enabled for security and SEO benefits.

5. **Submit to Search Engines**
   - Submit sitemap.xml to Google Search Console
   - Submit sitemap.xml to Bing Webmaster Tools

### Static Hosting Options
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for static sites
- **AWS S3 + CloudFront**: Scalable hosting
- **Firebase Hosting**: Google's hosting solution

## Customization

### Colors
Edit CSS custom properties in `css/styles.css`:
```css
:root {
  --color-primary: #1e3a5f;      /* Main brand color */
  --color-secondary: #3d9970;    /* Accent color */
  --color-accent: #f39c12;       /* CTA buttons */
}
```

### Typography
The site uses Google Fonts (Inter and Poppins). To change:
1. Update the Google Fonts link in each HTML file
2. Update `--font-primary` and `--font-heading` in CSS

### Contact Information
Update NAP (Name, Address, Phone) in:
- Footer section of all HTML files
- Contact page content
- Schema.org structured data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Chrome for Android

## Performance Considerations

- **CSS**: Single stylesheet, no frameworks
- **JavaScript**: Vanilla JS, deferred loading
- **Fonts**: Preconnect to Google Fonts
- **Images**: Use lazy loading attribute for below-fold images
- **No dependencies**: Zero external libraries required

## Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Focus visible states
- Color contrast compliance
- Skip links for keyboard navigation
- Reduced motion support

## License

All rights reserved. This website template is for Gomery Marketing use only.

## Contact

**Gomery Marketing**
123 Commerce Street, Suite 200
Montgomery, AL 36104
Phone: (334) 555-0123
Email: hello@gomerymarketing.com
