# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static, single-page landing website for **Investment Company of Karabakh (ICK)**, a construction company founded in 2024 that focuses on reconstruction projects in the liberated territories of Azerbaijan. The website is built with vanilla HTML, CSS, and JavaScript with no external dependencies (except Font Awesome CDN for icons).

**Language**: Azerbaijani (az)

**Key Business Focus**:
- Construction projects in liberated territories (Karabakh region)
- Infrastructure development
- Reconstruction services
- Project management
- Technical support

## File Structure

```
/
├── index.html              # Main HTML file - single page with all sections
├── assets/
│   ├── css/
│   │   └── site.css       # All styles (variables, responsive, animations)
│   ├── js/
│   │   └── site.js        # Interactive features (mobile nav, smooth scroll, animations)
│   └── img/
│       └── gallery/       # SVG placeholder images (currently using Pexels in HTML)
├── logo/
│   └── ick-latest.svg     # Company logo (used in header and as favicon)
└── README.md              # Basic project documentation
```

## Development Commands

This is a static website with no build process. To work with it:

**Local Development**:
```bash
# Serve with any static file server, e.g.:
python3 -m http.server 8000
# or
npx serve .
```

**Deployment**: Works on any static hosting platform (Netlify, Vercel, GitHub Pages, or Nginx)

## Architecture & Code Structure

### HTML Structure (index.html)

The page follows a single-page application pattern with semantic HTML5 sections:

1. **Navigation** (`<nav>`) - Fixed header with smooth scroll links
2. **Hero Section** (`#home`) - Full-viewport hero with CTA button
3. **About Section** (`#about`) - Company info with statistics
4. **Services Section** (`#services`) - 6 service cards with inline SVG icons
5. **Gallery Section** (`#gallery`) - Photo grid with captions (currently using Pexels CDN images)
6. **Partners Section** (`#partners`) - Partner logos as placeholder initials
7. **Contact Section** (`#contact`) - Contact info + form
8. **Footer** - Copyright notice

**Important SVG Icons**: Service section uses inline SVG icons with custom scaling transforms. When editing services, maintain the SVG structure and viewBox attributes.

### CSS Architecture (assets/css/site.css)

**Structure**:
- Global reset and base styles
- Component-specific styles (navigation, hero, sections, cards, forms)
- Responsive breakpoints using media queries
- CSS animations for scroll-triggered effects

**Color Scheme**:
- Primary blue: `#2c5f8d` (corporate blue)
- Gradient hero: `linear-gradient(135deg, #1e3c72 0%, #2c5f8d 50%, #6fa3d9 100%)`
- Light backgrounds with subtle overlays
- White cards with hover effects

**Responsive Breakpoints**:
- Mobile: `max-width: 768px`
- Desktop: Default (1200px max-width container)

### JavaScript Features (assets/js/site.js)

**Core functionality**:
1. **Mobile menu toggle** - Hamburger menu for responsive nav
2. **Smooth scrolling** - Anchor link smooth scroll with navbar auto-close
3. **Navbar scroll effect** - Add `.scrolled` class after 100px scroll
4. **Form submission** - Basic alert message (no backend integration)
5. **Intersection Observer** - Fade-in animations for cards/items on scroll

**Animation Pattern**: Elements start with `opacity: 0` and `translateY(30px)`, then animate to visible when entering viewport.

## Key Technical Details

### Current External Images
The gallery section currently uses Pexels CDN images. These should be replaced with real project photos:
- Line 236-258 in index.html contain the gallery `<figure>` elements
- Each image needs: src URL, alt text (Azerbaijani), and caption

### Contact Information
- **Address**: AZ1900, Füzuli rayonu, Füzuli şəhəri, Heydər Əliyev prospekti, ev 14, mənzil 1
- **Phone**: +995 559 006 503
- **Email**: poladova.leman14@gmail.com

### Form Behavior
The contact form (line 321-340) currently shows a JavaScript alert on submission. To add real backend integration:
- Form fields: name, email, phone, message
- No validation library used - HTML5 `required` attributes only
- Consider adding FormSpree, Netlify Forms, or custom backend

### Logo Integration
The site references `logo/ick-latest.svg` but it's not currently linked in the HTML. To add:
- Update `.logo` class in nav to use `<img>` instead of text
- Add favicon `<link>` in `<head>`

## Content Editing Guidelines

### Azerbaijani Language
All content is in Azerbaijani. When editing text:
- Maintain formal business tone
- Use appropriate diacritical marks (ə, ı, ş, ç, etc.)
- Section titles use title case

### Adding/Editing Services
Service cards (line 74-225) have this structure:
```html
<div class="service-card">
  <div class="service-icon">
    <svg>...</svg>  <!-- Inline SVG with specific transform scale -->
  </div>
  <h3>Service Title</h3>
  <p>Service description</p>
</div>
```

When adding new service icons, ensure proper SVG scaling via the `transform="scale(X)"` attribute in the `<g>` element.

### Partners Section
Currently uses placeholder logos with initials. To add real partner logos:
- Replace `.partner-logo` div content with `<img>` tags
- Maintain aspect ratio and sizing in CSS

## Git Workflow

**Current branch**: `feature/new-ui-split-assets`
**Main branch**: (not specified - likely `main` or `master`)

Recent commits focus on:
- UI refinements for service icons (minimal, thin-line style)
- Gallery improvements (themed images with captions)
- Construction-focused imagery

## Browser Support

The site uses modern JavaScript features:
- `IntersectionObserver` - No IE11 support
- CSS `backdrop-filter` - Limited Safari support
- Arrow functions and `const`/`let`

For broader support, consider:
- IntersectionObserver polyfill for older browsers
- Autoprefixer for CSS vendor prefixes

## Performance Considerations

- Font Awesome loaded from CDN (6.4.0) - only icons used: `fa-map-marker-alt`, `fa-phone`, `fa-envelope`
- Pexels images: 1200x800px with compression - consider WebP format
- No lazy loading implemented (except `loading="lazy"` on images)
- No CSS/JS minification

## SEO & Meta Tags

Currently minimal. Consider adding:
- Structured data (JSON-LD) for construction company
- More descriptive meta tags
- Open Graph tags for social sharing
- Sitemap (single page, but good practice)

## Future Enhancements

Based on project structure:
1. Replace placeholder partner logos with real logos
2. Add real project photos to gallery
3. Integrate contact form with backend/service
4. Add actual logo image to header
5. Add loading animations/skeleton screens
6. Consider WebP images for better performance
7. Add Google Maps integration for contact section
