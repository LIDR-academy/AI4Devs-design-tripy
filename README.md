# Tripy 🏝 - Travel Landing Page

A modern, responsive travel landing page built with HTML, Tailwind CSS, and a component-based design system. This project recreates the beautiful Tripy travel landing page design with best practices and reusable components.

## 🎨 Design System

### Color Palette

- **Primary**: `#E61C5D` (Pink/Red) - Used for CTAs, highlights, and brand elements
- **Secondary**: `#FFBD39` (Yellow/Gold) - Used for ratings, accents, and secondary highlights  
- **Dark**: `#112B3C` (Dark Blue) - Used for headings and primary text
- **Gray**: `#808080` - Used for secondary text and subtle elements
- **Light Gray**: `#FAFAFA` - Used for backgrounds and borders

### Typography

- **Font Family**: Barlow (Google Fonts)
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold), 900 (Black)
- **Font Sizes**: Responsive scaling from 12px to 64px

## 🧩 Component System

### Button Components

#### Primary Button (`.btn-primary`)
```html
<button class="btn-primary">Get Started</button>
```

#### Secondary Button (`.btn-secondary`)
```html
<button class="btn-secondary">Learn More</button>
```

#### Ghost Button (`.btn-ghost`)
```html
<button class="btn-ghost">View Details</button>
```

#### Icon Button (`.btn-icon`)
```html
<button class="btn-icon">
    <i data-lucide="chevron-right" class="w-5 h-5 text-primary"></i>
</button>
```

### Card Components

#### Tour Card (`.tour-card`)
```html
<div class="tour-card">
    <div class="tour-card-image">
        <img src="image.jpg" alt="Destination" class="hover-scale">
    </div>
    <div class="tour-card-content">
        <h3 class="tour-card-title">Amazing destination title</h3>
        <p class="tour-card-location">City, Country</p>
        <div class="tour-card-footer">
            <div class="tour-card-rating">
                <i data-lucide="star" class="star-filled"></i>
                <span class="text-sm font-semibold text-secondary">4.9</span>
            </div>
            <div class="tour-card-price">
                <div class="tour-card-price-amount">$200</div>
                <div class="tour-card-price-duration">10 days tour</div>
            </div>
        </div>
    </div>
</div>
```

#### Small Tour Card (`.tour-card-small`)
```html
<div class="tour-card-small">
    <img src="image.jpg" alt="Destination" class="w-full h-full object-cover">
    <div class="tour-card-small-overlay"></div>
    <div class="tour-card-small-content">
        <h3 class="tour-card-small-title">Destination Name</h3>
        <div class="tour-card-small-price">
            <span class="text-xl font-bold text-primary">$150</span>
            <span class="text-sm">7 days tour</span>
        </div>
    </div>
</div>
```

#### Testimonial Card (`.testimonial-card`)
```html
<div class="testimonial-card">
    <div class="testimonial-quote-icon">
        <i data-lucide="quote" class="w-5 h-5 text-white"></i>
    </div>
    <div class="testimonial-content">
        <img src="avatar.jpg" alt="Customer" class="testimonial-avatar">
        <div class="space-y-2">
            <h4 class="testimonial-name">Customer Name</h4>
            <p class="testimonial-role">Job Title</p>
            <div class="testimonial-rating">
                <!-- 5 star icons -->
            </div>
        </div>
        <p class="testimonial-text">Customer testimonial text...</p>
    </div>
</div>
```

### Form Components

#### Search Bar (`.search-bar`)
```html
<div class="search-bar max-w-md">
    <div class="search-bar-content">
        <div class="search-field">
            <i data-lucide="map-pin" class="w-5 h-5 text-primary"></i>
            <div class="space-y-1">
                <div class="flex items-center gap-2">
                    <span class="search-field-label">Location</span>
                    <i data-lucide="chevron-down" class="w-3 h-3 text-gray"></i>
                </div>
                <span class="search-field-value">City, Country</span>
            </div>
        </div>
        <div class="search-divider"></div>
        <!-- Repeat for other fields -->
        <button class="search-button">
            <i data-lucide="search" class="w-5 h-5"></i>
        </button>
    </div>
</div>
```

#### Newsletter Form (`.newsletter-form`)
```html
<div class="newsletter-form">
    <input type="email" placeholder="Enter your email address" class="newsletter-input">
    <button class="newsletter-submit">
        <i data-lucide="send" class="w-4 h-4"></i>
    </button>
</div>
```

### Typography Components

#### Section Headers
```html
<div class="space-y-4">
    <span class="section-subtitle">Section Category</span>
    <h2 class="section-title">Main Section Title</h2>
    <p class="section-description">Section description text...</p>
</div>
```

#### Hero Typography
```html
<h1 class="hero-title">Main hero headline</h1>
<p class="hero-subtitle">Hero subtitle text</p>
```

### Layout Components

#### Section Container
```html
<section class="section-container bg-section-white">
    <div class="section-content">
        <!-- Section content -->
    </div>
</section>
```

#### Grid Layouts
```html
<!-- 2 Column Grid -->
<div class="grid-2">
    <div>Item 1</div>
    <div>Item 2</div>
</div>

<!-- 3 Column Grid -->
<div class="grid-3">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>

<!-- 4 Column Grid -->
<div class="grid-4">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>
```

### Navigation Components

#### Logo
```html
<div class="logo">Tripy</div>
```

#### Navigation Links
```html
<a href="#" class="nav-link-active">Home</a>
<a href="#about" class="nav-link">About</a>
<a href="#services" class="nav-link">Services</a>
```

### Statistic Components

#### Stat Item
```html
<div class="stat-item">
    <div class="stat-number">15</div>
    <div class="stat-label">Years of Experience</div>
</div>
```

## 📱 Responsive Design

The landing page is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### Responsive Utilities

- `.mobile-hidden` - Hide on mobile devices
- `.mobile-only` - Show only on mobile devices
- Grid systems automatically adapt to screen size

## 🎭 Animation & Interactions

### Hover Effects

- `.hover-scale` - Scale element on hover
- `.hover-lift` - Add shadow elevation on hover
- All buttons include smooth color transitions
- Images scale on hover within containers

### Transitions

All interactive elements include smooth transitions:
- Color changes: 200ms ease
- Transform effects: 300ms ease
- Shadow changes: 300ms ease

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful, customizable icons
- **Google Fonts** - Barlow font family
- **Responsive Design** - Mobile-first approach

## 📁 File Structure

```
tripy/
├── index.html          # Main landing page
├── components.css      # Reusable component classes
└── README.md          # This documentation
```

## 🚀 Getting Started

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Or serve using a local development server

### Using with a Local Server

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

## 🎯 Features Implemented

### ✅ Completed Features

- [x] Responsive navigation with mobile menu
- [x] Hero section with search functionality
- [x] About us section with statistics
- [x] Tour packages grid with hover effects
- [x] Customer testimonials carousel
- [x] Additional tours section
- [x] Footer with newsletter signup
- [x] Component-based design system
- [x] Smooth animations and transitions
- [x] Mobile-first responsive design
- [x] Semantic HTML structure
- [x] Accessibility considerations

### 🔮 Future Enhancements

- [ ] JavaScript functionality for search filters
- [ ] Carousel/slider functionality for tour packages
- [ ] Form validation and submission handling
- [ ] Loading states and micro-interactions
- [ ] Dark mode support
- [ ] Performance optimizations
- [ ] SEO enhancements

## 🎨 Design Credits

Original design from Figma Community: "Tripy 🏝 | Travel Landing Page (Community)"

## 📄 License

This project is for educational and portfolio purposes. Feel free to use and modify as needed.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using modern web technologies and best practices. 