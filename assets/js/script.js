// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const langEnBtn = document.getElementById('lang-en');
    const langMlBtn = document.getElementById('lang-ml');
    const elements = document.querySelectorAll('[data-en], [data-ml]');
    
    let currentLang = 'en';
    
    function switchLanguage(lang) {
        currentLang = lang;
        
        // Update button states
        langEnBtn.classList.toggle('active', lang === 'en');
        langMlBtn.classList.toggle('active', lang === 'ml');
        
        // Update all elements with language data
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
        
        // Update document language
        document.documentElement.lang = lang === 'en' ? 'en' : 'ml';
        
        // Store language preference
        localStorage.setItem('ism-lang', lang);
    }
    
    // Load saved language preference
    const savedLang = localStorage.getItem('ism-lang') || 'en';
    switchLanguage(savedLang);
    
    // Add event listeners
    langEnBtn.addEventListener('click', () => switchLanguage('en'));
    langMlBtn.addEventListener('click', () => switchLanguage('ml'));
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(n) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Calculate current slide index
    currentSlide = (n + totalSlides) % totalSlides;
    
    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-advance carousel every 2 seconds
setInterval(nextSlide, 2000);

// Add event listeners for carousel navigation
document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.querySelector('.carousel-next');
    const prevBtn = document.querySelector('.carousel-prev');
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// District navigation
function navigateToDistrict(districtName) {
    window.location.href = `${districtName}/index.html`;
}

// Future programs expiry check
document.addEventListener('DOMContentLoaded', function() {
    const futureProgramsSection = document.getElementById('future-programs');
    const programDate = '2024-03-17'; // Set your expiry date here
    
    function checkProgramExpiry() {
        const today = new Date();
        const expiryDate = new Date(programDate);
        
        if (today > expiryDate) {
            if (futureProgramsSection) {
                futureProgramsSection.classList.add('hidden');
            }
        }
    }
    
    // Check on page load
    checkProgramExpiry();
    
    // Check daily
    setInterval(checkProgramExpiry, 24 * 60 * 60 * 1000);
});

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Header background change on scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
});

// Form validation (if contact form is added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Add error styles for form validation
const style = document.createElement('style');
style.textContent = `
    .error {
        border-color: #e74c3c !important;
        box-shadow: 0 0 5px rgba(231, 76, 60, 0.3) !important;
    }
`;
document.head.appendChild(style);

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Add loading states
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Remove loading class when page is fully loaded
    window.addEventListener('load', function() {
        document.body.classList.remove('loading');
    });
});

// Add loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    .loading {
        overflow: hidden;
    }
    
    .loading::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #2c5aa0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .loading::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
    }
`;
document.head.appendChild(loadingStyle);
