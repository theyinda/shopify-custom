# Shopify Custom Code

## Overview  
I added a couple of custom sections to the Shopify theme to improve flexibility and design.I built custom layouts for the **header, footer, hero section, product grids, sliders, and collections**. I also included custom CSS and JavaScript to handle styling and functionality.  

---

## Files I Added  

### 📂 sections/ _(Custom Sections)_  
- `custom-header.liquid` → Custom navigation with a logo, menu links, icons, and a hamburger menu for mobile.  
- `custom-footer.liquid` → Custom footer with multiple columns, social links, and a newsletter signup.  
- `custom-hero-section.liquid` → Hero banner with editable text, background image, and CTA buttons.  
- `custom-product-grid.liquid` → Displays products in a grid format.  
- `custom-image-grid.liquid` → Image-based grid for showcasing visuals.  
- `custom-collection-section.liquid` → Highlights product collections dynamically.  
- `custom-slider.liquid` → Image slider with smooth transitions and mobile swipe support.  

---

### 📂 assets/ _(Styling & Functionality)_  
- `custom.css` → Handles all custom styles for layout, typography, and responsiveness.  
- `custom.js` → Manages:  
  - **Hamburger menu toggle** for mobile navigation.  
  - **Auto-slide functionality** for sliders.  
  - **Smooth scrolling effects** and other UI interactions.  

---

## How to Use  
1. Copy the **custom section files** (`sections/`) into your Shopify theme’s `sections/` folder.  
2. Copy the **CSS and JavaScript files** (`assets/`) into your theme’s `assets/` folder.  
3. Add the custom header and footer in `layout/theme.liquid` (if not already included):  
   ```liquid
   {% section 'custom-header' %}
   {% section 'custom-footer' %}
