const phrasesByLang = {
    en: [
        'Creating fantasies...',
        'Building worlds...',
        'Drafting narratives...',
        'Shaping adventures...'
    ],
    zh: [
        '构筑幻想……',
        '搭建世界……',
        '起草叙事……',
        '塑造冒险……'
    ]
};

const rotatingText = document.querySelector('.rotating-text');
let phraseElements = [];

function mountPhrases() {
    if (!rotatingText) return;
    const lang = document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
    rotatingText.replaceChildren();
    phrasesByLang[lang].forEach((phrase, index) => {
        const span = document.createElement('span');
        span.className = 'text-phrase';
        span.textContent = phrase;
        if (index === 0) span.classList.add('active');
        rotatingText.appendChild(span);
    });
    phraseElements = Array.from(rotatingText.querySelectorAll('.text-phrase'));
}

function rotatePhrases() {
    if (!phraseElements.length) return;
    const currentActive = rotatingText.querySelector('.text-phrase.active') || phraseElements[0];
    const currentIndex = Math.max(0, phraseElements.indexOf(currentActive));
    phraseElements[currentIndex].classList.remove('active');
    phraseElements[(currentIndex + 1) % phraseElements.length].classList.add('active');
}

if (rotatingText) {
    mountPhrases();
    setInterval(rotatePhrases, 3000);
    document.addEventListener('portfolio-lang-change', mountPhrases);
}

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add subtle animation for items on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with these classes if they exist
const elementsToAnimate = [
    '.work-item', 
    '.portfolio-item', 
    '.blog-post',
    '.game-card'
];

elementsToAnimate.forEach(selector => {
    document.querySelectorAll(selector).forEach(item => {
        observer.observe(item);
    });
});

// Image Showcase Tab Switching (supports multiple showcase frames)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.image-showcase-section').forEach(section => {
        const tabs = section.querySelectorAll('.showcase-tab');
        const showcaseImg = section.querySelector('.showcase-image');
        if (tabs.length && showcaseImg) {
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    showcaseImg.src = this.getAttribute('data-img');
                });
            });
        }
    });
});