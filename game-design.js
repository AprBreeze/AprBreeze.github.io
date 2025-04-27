// Game Design Page JavaScript

// Initialize particles background
document.addEventListener('DOMContentLoaded', function() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 1000
          }
        },
        "color": {
          "value": "#4d5bce"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 0.2,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#4d5bce",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.5
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
});

// Text rotation animation
const phrases = [];

// Initialize the rotating text
document.addEventListener('DOMContentLoaded', function() {
  const rotatingText = document.querySelector('.rotating-text');
  
  // Clear any existing content (from the global script.js)
  rotatingText.innerHTML = '';
  
  // Create and append all phrase elements
  phrases.forEach((phrase, index) => {
    const span = document.createElement('span');
    span.className = 'text-phrase';
    span.textContent = phrase;
    span.style.width = '100%';
    span.style.whiteSpace = 'nowrap';
    span.style.textAlign = 'left';
    span.style.left = '0';
    if (index === 0) span.classList.add('active');
    rotatingText.appendChild(span);
  });
  
  // Get all phrase elements
  const phraseElements = document.querySelectorAll('.text-phrase');
  
  // Function to rotate through phrases
  function rotatePhrases() {
    // Find the current active phrase
    const currentActive = document.querySelector('.text-phrase.active');
    
    if (!currentActive) return;
    
    // Remove active class from current phrase
    currentActive.classList.remove('active');
    
    const currentIndex = Array.from(phraseElements).indexOf(currentActive);
    
    // Calculate next index (loop back to start if at end)
    const nextIndex = (currentIndex + 1) % phraseElements.length;
    
    // Add active class to next phrase
    phraseElements[nextIndex].classList.add('active');
  }
  
  // Set interval for rotation
  setInterval(rotatePhrases, 3000);
});
// Card hover effects enhancement
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.game-card');
  
  cards.forEach(card => {
    // Create subtle movement effect on mouse move
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      
      // Calculate rotation based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;
      
      // Apply subtle transform
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    // Reset transform on mouse leave
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
      // Add a small delay to make it look smoother
      setTimeout(() => {
        card.style.transition = 'transform 0.3s ease';
      }, 100);
    });
    
    // Reset transition on mouse enter
    card.addEventListener('mouseenter', function() {
      card.style.transition = 'transform 0.1s ease';
    });
  });
});
