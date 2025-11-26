# TODA Investor Pitch

A professional, scroll-based web presentation designed to pitch TODA to investors, business angels, and industry insiders.

## Overview

This is an immersive single-page web presentation with 8 sections following an emotional → rational → visionary narrative arc. Built as a static website for easy deployment via Netlify.

## Structure

The presentation consists of 8 distinct sections:

1. **Opening - The Promise**: Bold vision statement and core value proposition
2. **Emotional Story - Why TODA Exists**: Founder's personal journey and passion
3. **Solutions & Market - The Problems We Solve**: Industry pain points and TODA's solutions
4. **Market Analysis - The Opportunity**: Data-driven market analysis and statistics
5. **Market Entry - Our Strategy**: Go-to-market approach and timeline
6. **Marketing - Growth Engine**: Community building and growth mechanisms
7. **Technology & Innovation - Long-term Moat**: Technological uniqueness and defensibility
8. **Scalability - The Vision**: Revenue projections and platform potential

## Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Custom styling with dark theme and gold accents
- **Vanilla JavaScript**: Smooth scrolling and animations
- **Deployment**: Netlify (or any static hosting)

## Design System

### Color Palette

**Main Colors:**
- Primary Background: `#0F0F0F`
- Secondary Background: `#1A1A1A`
- Card Background: `#242424`
- Primary Accent (Gold): `#D4AF37`

**Text Colors:**
- Body Text: `#FFFFFF`
- Secondary Text: `#D1D5DB`
- Muted Text: `#9CA3AF`

**CTA Buttons:**
- Standard: `#D4AF37`
- Hover: `#F5E6D3`
- Text: `#0F0F0F`

### Typography

- Primary Font: System font stack (Apple, Segoe UI, Roboto, etc.)
- Bold, modern typography with clear hierarchy
- Responsive font sizing using `clamp()`

## How to Replace Placeholder Content

All placeholder content is marked with `[BRACKETS]` for easy identification and replacement.

### Text Placeholders

Search for text within brackets like:
- `[Replace with founder's personal story...]`
- `[Problem #1 Title]`
- `[Market Size Title]`

Simply replace the entire bracketed text with your real content.

### Image Placeholders

Look for elements with classes:
- `.placeholder-image`
- `.placeholder-chart`

Replace these `<div>` elements with actual `<img>` tags or chart libraries:

```html
<!-- Replace this: -->
<div class="placeholder-image">
    <span class="placeholder-text">Founder Image / Key Visual</span>
</div>

<!-- With this: -->
<img src="path/to/your/image.jpg" alt="Description">
```

### Icon Placeholders

Look for `.icon-placeholder` elements and replace with:
- SVG icons
- Icon fonts (Font Awesome, Material Icons)
- Custom graphics

### Chart Placeholders

For data visualizations, integrate libraries like:
- Chart.js
- D3.js
- ApexCharts

## File Structure

```
/
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
├── Dev_brief.md        # Development guidelines
└── Project_Idea.md     # Project concept
```

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - pure static files

## Deployment

### Netlify (Recommended)

1. Push to GitHub
2. Connect repository to Netlify
3. Deploy (no build command needed)
4. Site is live!

### Alternative Hosting

Any static hosting works:
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## Features

- **Smooth Scrolling**: Seamless navigation between sections
- **Responsive Design**: Works on laptops and tablets
- **Keyboard Navigation**: Arrow keys for section navigation
- **Scroll Animations**: Cards fade in as you scroll
- **Accessibility**: Focus states and semantic HTML

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Next Steps (Phase 2)

1. Replace placeholder text with real content (section by section)
2. Add real images, team photos, and product screenshots
3. Integrate data visualizations with actual market data
4. Add contact form functionality to CTAs
5. Optimize images for performance
6. Add meta tags for SEO and social sharing

## Notes

- All placeholders are clearly marked for easy replacement
- Design maintains professional polish while being bold and edgy
- Focus is on content delivery, not conversion optimization
- Built for presentation context (investor pitches, events)

---

**Built for tattoo artists, by passionate founders** 🎨

