# Pritesh Anand Murmu - Portfolio Website

A modern, responsive, and attractive portfolio website built with HTML5, CSS3, and Vanilla JavaScript.

## 🎨 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean and professional design with smooth animations
- **Smooth Scrolling** - Seamless navigation between sections
- **Mobile Menu** - Hamburger menu for mobile devices
- **Animated Elements** - Smooth fade-in and slide animations as you scroll
- **Gradient Effects** - Modern gradient backgrounds and text
- **Contact Information** - Easy access to phone, email, LinkedIn, and location
- **Experience Timeline** - Visual timeline of your career journey
- **Skills Showcase** - Beautiful skill cards with icons
- **Social Links** - Quick links to social media profiles

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML file with all sections
├── styles.css      # Complete CSS styling and animations
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🚀 Getting Started

### Option 1: Open Locally
1. Open `index.html` directly in your web browser
2. Or use a local server (recommended for best experience)

### Option 2: Use a Local Server
**Using Python 3:**
```bash
cd /Users/pamurmu/Documents/portfolio
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

**Using Node.js (with http-server):**
```bash
npx http-server
```

**Using VS Code Live Server:**
- Right-click on `index.html` and select "Open with Live Server"

## 📋 Sections

### 1. **Navigation Bar**
- Sticky navigation for quick access to all sections
- Responsive hamburger menu for mobile devices
- Active link highlighting while scrolling

### 2. **Hero Section**
- Eye-catching introduction with your name and title
- Call-to-action buttons
- Animated avatar

### 3. **About Section**
- Professional summary
- Quick statistics about your experience

### 4. **Skills Section**
- 8 key skills displayed as beautiful cards
- Icons and descriptions for each skill
- Hover animations for interactivity

### 5. **Experience Section**
- Visual timeline of your career
- 4 positions from your professional journey
- Key achievements and responsibilities listed

### 6. **Education Section**
- Bachelor's degree information
- Certification details
- Language proficiencies

### 7. **Contact Section**
- All contact information easily accessible
- Social media links
- Direct links for email and phone calls

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6c5ce7;      /* Purple */
    --secondary-color: #0984e3;    /* Blue */
    --accent-color: #fd79a8;       /* Pink */
    /* ... more variables ... */
}
```

### Fonts
The portfolio uses 'Segoe UI' by default. Change it in `styles.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Contact Information
Update the contact details in the Contact section of `index.html`

### Add Your Photo
Replace the avatar icon with an actual photo:
```html
<div class="avatar">
    <img src="your-photo.jpg" alt="Your Name">
</div>
```

Add this CSS:
```css
.avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
```

## 📱 Responsive Breakpoints

- **Desktop** (1200px+) - Full layout with side-by-side sections
- **Tablet** (768px - 1199px) - Optimized grid layout
- **Mobile** (below 768px) - Single column layout with hamburger menu
- **Small Mobile** (below 480px) - Further optimized for tiny screens

## 🎯 Key Features Breakdown

### Animations
- Fade-in effects for sections
- Slide animations for content
- Floating avatar effect
- Hover animations on cards
- Smooth scroll-to-top button

### Performance
- Vanilla JavaScript (no heavy frameworks)
- CSS animations for smooth 60fps performance
- Optimized images and font loading
- Minimal external dependencies (only Font Awesome icons)

### Accessibility
- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for images
- Accessible color contrasts
- Keyboard navigation support

## 🔧 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

- **Font Awesome 6.4.0** - For icons (via CDN)
- All other code is vanilla HTML, CSS, and JavaScript

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repository named `portfolio`
2. Push your files to the repository
3. Enable GitHub Pages in repository settings
4. Your portfolio will be live at `https://yourusername.github.io/portfolio`

### Other Hosting Options
- Vercel
- Netlify
- AWS S3
- Firebase Hosting

## 💡 Tips for Enhancement

1. **Add a Blog Section** - Share your insights and experiences
2. **Portfolio Projects** - Showcase your best work
3. **Blog/Articles** - Display technical articles or case studies
4. **Testimonials** - Add quotes from colleagues or clients
5. **Contact Form** - Add a working contact form
6. **Dark Mode** - Implement a theme toggle
7. **Analytics** - Add Google Analytics to track visitors

## 📄 License

This portfolio template is free to use and modify for your personal use.

## 🤝 Support

For questions or issues:
- Email: anandpritesh.17@gmail.com
- LinkedIn: [Connect on LinkedIn](https://www.linkedin.com/in/pritesh-a-murmu-226b1587/)

---

**Last Updated**: 2024
**Created with ❤️ using HTML5, CSS3 & JavaScript**
