// Array of phrases to rotate through
const phrases = [
    'Creating fantasies...',
    'Building worlds...',
    'Drafting narratives...',
    'Shaping adventures...'
];

// Get the container element
const rotatingText = document.querySelector('.rotating-text');

// Create and append all phrase elements if rotatingText exists
if (rotatingText) {
    phrases.forEach((phrase, index) => {
        const span = document.createElement('span');
        span.className = 'text-phrase';
        span.textContent = phrase;
        if (index === 0) span.classList.add('active');
        rotatingText.appendChild(span);
    });

    // Get all phrase elements
    const phraseElements = document.querySelectorAll('.text-phrase');

    // Function to rotate through phrases
    function rotatePhrases() {
        // Find the current active phrase
        const currentActive = document.querySelector('.text-phrase.active');
        const currentIndex = Array.from(phraseElements).indexOf(currentActive);
        
        // Remove active class from current phrase
        currentActive.classList.remove('active');
        
        // Calculate next index (loop back to start if at end)
        const nextIndex = (currentIndex + 1) % phraseElements.length;
        
        // Add active class to next phrase
        phraseElements[nextIndex].classList.add('active');
    }

    // Set interval for rotation (2.5 seconds)
    setInterval(rotatePhrases, 2500);
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