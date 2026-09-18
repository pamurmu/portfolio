// ===========================
// MOBILE MENU TOGGLE
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// SMOOTH SCROLL BEHAVIOR
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.skill-card, .timeline-item, .education-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// ===========================
// FORM FUNCTIONALITY (if needed in future)
// ===========================

// You can add form handling here when you add a contact form

// ===========================
// TYPING ANIMATION FOR HERO
// ===========================

const typeWriter = () => {
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');

    if (title && subtitle) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const titleText = title.textContent;
        const subtitleText = subtitle.textContent;

        title.textContent = '';
        subtitle.textContent = '';

        let titleIndex = 0;
        let subtitleIndex = 0;

        const typeSubtitle = () => {
            if (subtitleIndex < subtitleText.length) {
                subtitle.textContent += subtitleText.charAt(subtitleIndex);
                subtitleIndex += 1;
                setTimeout(typeSubtitle, 18);
            }
        };

        const typeTitle = () => {
            if (titleIndex < titleText.length) {
                title.textContent += titleText.charAt(titleIndex);
                titleIndex += 1;
                setTimeout(typeTitle, 35);
            } else {
                typeSubtitle();
            }
        };

        typeTitle();
    }
};

// Run typing animation when page loads
window.addEventListener('load', typeWriter);

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

const createScrollToTopButton = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #0f6c74, #1d3557);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseover', () => {
        scrollBtn.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseout', () => {
        scrollBtn.style.transform = 'scale(1)';
    });
};

document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// ===========================
// PARALLAX EFFECT
// ===========================

const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ===========================
// PRELOAD ANIMATIONS
// ===========================

// Add animation classes to elements for better performance
const addAnimationClasses = () => {
    const elements = document.querySelectorAll('.skill-card, .timeline-item, .education-card');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
};

window.addEventListener('load', addAnimationClasses);

// ===========================
// COPY EMAIL/PHONE TO CLIPBOARD (optional)
// ===========================

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied: ' + text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
};

// You can add this to contact links if needed

// ===========================
// INITIALIZE
// ===========================

console.log('Portfolio script loaded successfully!');
