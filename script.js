// Array of phrases to rotate through
const phrases = [
    'Creating fantasies...',
    'Building worlds...',
    'Drafting narratives...',
    'Shaping adventures...'
];

// Get the container element
const rotatingText = document.querySelector('.rotating-text');

// Create and append all phrase elements
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