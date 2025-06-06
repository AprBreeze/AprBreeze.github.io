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

// Wait for everything to load, then initialize mission panel
window.addEventListener('load', function() {
  console.log('Window loaded, initializing mission panel...');
  setTimeout(initializeMissionPanel, 200);
});

// Backup initialization in case window.load doesn't fire
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    if (!window.missionPanelInitialized) {
      console.log('Backup initialization triggered...');
      initializeMissionPanel();
    }
  }, 1000);
});

// Mission Panel Navigation System
function initializeMissionPanel() {
  if (window.missionPanelInitialized) {
    console.log('Mission panel already initialized, skipping...');
    return;
  }
  
  console.log('=== INITIALIZING MISSION PANEL ===');
  
  const missionItems = document.querySelectorAll('.mission-item');
  const mainContent = document.querySelector('.main-content');
  const gameCards = document.querySelectorAll('.main-content .game-card');
  
  console.log('Found elements:', {
    missionItems: missionItems.length,
    mainContent: !!mainContent,
    gameCards: gameCards.length
  });

  if (missionItems.length === 0) {
    console.error('❌ No mission items found!');
    return;
  }

  if (!mainContent) {
    console.error('❌ Main content container not found!');
    return;
  }

  if (gameCards.length === 0) {
    console.error('❌ No game cards found!');
    return;
  }

  // Set up click handlers with direct event binding
  missionItems.forEach((item, index) => {
    const targetId = item.getAttribute('data-target');
    const targetCard = document.getElementById(targetId);
    
    console.log(`Setting up mission item ${index}: ${targetId} -> ${!!targetCard}`);
    
    if (!targetCard) {
      console.error(`❌ Target card not found for: ${targetId}`);
      return;
    }
    
    // Remove any existing event listeners
    item.removeEventListener('click', handleMissionClick);
    
    // Add new event listener
    item.addEventListener('click', function(event) {
      handleMissionClick(event, targetId, missionItems, mainContent, gameCards);
    });
    
    console.log(`✅ Click handler added for: ${targetId}`);
  });

  // Auto-activate first mission item
  if (missionItems.length > 0) {
    missionItems[0].classList.add('active');
    console.log('✅ First mission item activated');
  }

  window.missionPanelInitialized = true;
  console.log('✅ Mission Panel initialization complete!');
}

// Separate click handler function
function handleMissionClick(event, targetId, missionItems, mainContent, gameCards) {
  event.preventDefault();
  event.stopPropagation();
  
  console.log(`🎯 Mission clicked: ${targetId}`);
  
  const targetCard = document.getElementById(targetId);
  
  if (!targetCard) {
    console.error(`❌ Target card not found: ${targetId}`);
    return;
  }
  
  // Remove active state from all mission items
  missionItems.forEach(item => item.classList.remove('active'));
  
  // Add active state to clicked item
  event.currentTarget.classList.add('active');
  console.log(`✅ Active state set for: ${targetId}`);
  
  // Remove highlighted state from all cards
  gameCards.forEach(card => card.classList.remove('highlighted'));
  
  // Calculate scroll position for the main window
  const targetRect = targetCard.getBoundingClientRect();
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Calculate target scroll position (account for fixed header and some padding)
  const headerHeight = 80; // Approximate header height
  const padding = 20;
  const targetScrollTop = currentScrollTop + targetRect.top - headerHeight - padding;
  
  console.log(`📍 Scrolling to position: ${targetScrollTop}`);
  
  // Scroll the main window to target
  window.scrollTo({
    top: targetScrollTop,
    behavior: 'smooth'
  });
  
  // Highlight the card
  setTimeout(() => {
    targetCard.classList.add('highlighted');
    console.log(`✨ Card highlighted: ${targetId}`);
    
    // Remove highlight after 3 seconds
    setTimeout(() => {
      targetCard.classList.remove('highlighted');
      console.log(`🔄 Highlight removed: ${targetId}`);
    }, 3000);
  }, 300);
}

// Test function for debugging mission panel
function testMissionPanel() {
  console.log('=== MISSION PANEL TEST ===');
  
  const missionItems = document.querySelectorAll('.mission-item');
  const mainContent = document.querySelector('.main-content');
  const gameCards = document.querySelectorAll('.main-content .game-card');
  
  console.log('Elements found:');
  console.log('- Mission items:', missionItems.length);
  console.log('- Main content:', !!mainContent);
  console.log('- Game cards:', gameCards.length);
  
  missionItems.forEach((item, index) => {
    const targetId = item.getAttribute('data-target');
    const targetCard = document.getElementById(targetId);
    console.log(`Mission ${index}: ${targetId} -> Card found: ${!!targetCard}`);
  });
  
  // Test clicking the first mission item
  if (missionItems.length > 0) {
    console.log('🧪 Testing click on first mission item...');
    missionItems[0].click();
  } else {
    console.error('❌ No mission items to test!');
  }
}

// Mobile Mission Navigation Toggle
function toggleMissionNav() {
  const missionNav = document.querySelector('.mission-nav');
  if (missionNav) {
    missionNav.classList.toggle('open');
    console.log('Mission nav toggled:', missionNav.classList.contains('open'));
  }
}

// Close mission nav when clicking outside on mobile
document.addEventListener('click', function(event) {
  const missionNav = document.querySelector('.mission-nav');
  const missionToggle = document.querySelector('.mission-toggle');
  
  if (missionNav && missionToggle && window.innerWidth <= 768) {
    // If clicking outside the nav and not on the toggle button
    if (!missionNav.contains(event.target) && !missionToggle.contains(event.target)) {
      missionNav.classList.remove('open');
    }
  }
});

// Gallery Navigation and Lightbox Functionality - Full Version
document.addEventListener('DOMContentLoaded', function() {
  console.log('Gallery script starting...');
  
  // Wait a bit for DOM to be fully ready
  setTimeout(function() {
    const gallery = document.querySelector('.horizontal-gallery');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Look for gallery slides in any container, not just .horizontal-gallery
    const slides = document.querySelectorAll('.gallery-slide');
    
    console.log('Gallery elements found:', {
      gallery: !!gallery,
      prevBtn: !!prevBtn,
      nextBtn: !!nextBtn,
      slidesCount: slides.length
    });
    
    // Only set up horizontal gallery navigation if the gallery container exists
    if (gallery && prevBtn && nextBtn && gallery.querySelectorAll('.gallery-slide').length > 0) {
      console.log('Setting up horizontal gallery...');
      
      const gallerySlides = gallery.querySelectorAll('.gallery-slide');
      
      // Function to calculate slide width dynamically
      function getSlideWidth() {
        const slide = gallery.querySelector('.gallery-slide');
        if (slide) {
          return slide.offsetWidth + 20; // width + gap
        }
        return 300; // fallback
      }
      
      // Gallery navigation click handlers
      prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Previous button clicked!');
        const slideWidth = getSlideWidth();
        gallery.scrollBy({
          left: -slideWidth,
          behavior: 'smooth'
        });
      });
      
      nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Next button clicked!');
        const slideWidth = getSlideWidth();
        gallery.scrollBy({
          left: slideWidth,
          behavior: 'smooth'
        });
      });
      
      console.log('Horizontal gallery navigation setup complete!');
    } else {
      console.log('Horizontal gallery elements missing - skipping gallery navigation');
    }
    
    // Lightbox Functionality - works with any .gallery-slide images
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxCaption = document.getElementById('lightbox-caption');
    let currentImageIndex = 0;
    let currentZoom = 1;
    let isDragging = false;
    let hasDragged = false;
    let startX = 0;
    let startY = 0;
    let translateX = 0;
    let translateY = 0;
    
    console.log('Lightbox elements found:', {
      lightbox: !!lightbox,
      lightboxImage: !!lightboxImage,
      lightboxClose: !!lightboxClose,
      lightboxPrev: !!lightboxPrev,
      lightboxNext: !!lightboxNext,
      lightboxCaption: !!lightboxCaption,
      slidesCount: slides.length
    });
    
    if (lightbox && lightboxImage && lightboxClose && lightboxPrev && lightboxNext && lightboxCaption && slides.length > 0) {
      console.log('Setting up lightbox...');
      
      // Image click handlers for lightbox
      slides.forEach((slide, index) => {
        slide.addEventListener('click', function(e) {
          e.preventDefault();
          console.log(`Image ${index} clicked for lightbox!`);
          currentImageIndex = index;
          openLightbox(slide.src, slide.alt, index);
        });
      });
      
      function openLightbox(src, alt, index) {
        console.log('Opening lightbox for image:', index);
        lightboxImage.src = src;
        lightboxImage.alt = alt;
        lightboxCaption.textContent = `Image ${index + 1} of ${slides.length} - Use mouse wheel to zoom`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling while lightbox is open
        
        // Reset zoom and position
        currentZoom = 1;
        translateX = 0;
        translateY = 0;
        updateImageTransform();
      }
      
      function closeLightbox() {
        console.log('Closing lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
        
        // Reset zoom and position
        currentZoom = 1;
        translateX = 0;
        translateY = 0;
        updateImageTransform();
      }
      
      function updateImageTransform() {
        lightboxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
        lightboxImage.style.cursor = currentZoom > 1 ? 'grab' : 'default';
      }
      
      function navigateLightbox(direction) {
        currentImageIndex += direction;
        
        // Loop around if at the end
        if (currentImageIndex < 0) {
          currentImageIndex = slides.length - 1;
        } else if (currentImageIndex >= slides.length) {
          currentImageIndex = 0;
        }
        
        const slide = slides[currentImageIndex];
        lightboxImage.src = slide.src;
        lightboxImage.alt = slide.alt;
        lightboxCaption.textContent = `Image ${currentImageIndex + 1} of ${slides.length} - Use mouse wheel to zoom`;
        console.log('Navigated to image:', currentImageIndex);
        
        // Reset zoom and position when navigating
        currentZoom = 1;
        translateX = 0;
        translateY = 0;
        updateImageTransform();
      }
      
      // Zoom functionality with mouse wheel
      lightboxImage.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        const zoomSpeed = 0.1;
        const minZoom = 0.5;
        const maxZoom = 3;
        
        if (e.deltaY < 0) {
          // Zoom in
          currentZoom = Math.min(currentZoom + zoomSpeed, maxZoom);
        } else {
          // Zoom out
          currentZoom = Math.max(currentZoom - zoomSpeed, minZoom);
        }
        
        // Reset position when zooming out to 1x or less
        if (currentZoom <= 1) {
          translateX = 0;
          translateY = 0;
        }
        
        updateImageTransform();
        console.log('Zoom level:', currentZoom);
      });
      
      // Drag functionality for zoomed images
      lightboxImage.addEventListener('mousedown', function(e) {
        if (currentZoom > 1) {
          isDragging = true;
          hasDragged = false;
          startX = e.clientX - translateX;
          startY = e.clientY - translateY;
          lightboxImage.style.cursor = 'grabbing';
          e.preventDefault();
        }
      });
      
      document.addEventListener('mousemove', function(e) {
        if (isDragging && currentZoom > 1) {
          const deltaX = e.clientX - startX;
          const deltaY = e.clientY - startY;
          
          // If mouse has moved more than 5 pixels, consider it a drag
          if (Math.abs(deltaX - translateX) > 5 || Math.abs(deltaY - translateY) > 5) {
            hasDragged = true;
          }
          
          translateX = deltaX;
          translateY = deltaY;
          updateImageTransform();
        }
      });
      
      document.addEventListener('mouseup', function() {
        if (isDragging) {
          isDragging = false;
          lightboxImage.style.cursor = currentZoom > 1 ? 'grab' : 'default';
          
          // Reset hasDragged after a short delay to prevent accidental closes
          setTimeout(() => {
            hasDragged = false;
          }, 100);
        }
      });
      
      // Lightbox event listeners
      lightboxClose.addEventListener('click', closeLightbox);
      lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
      lightboxNext.addEventListener('click', () => navigateLightbox(1));
      
      // Close lightbox when clicking outside the image
      lightbox.addEventListener('click', function(e) {
        // Don't close if user was dragging (to prevent accidental closes)
        if (isDragging || hasDragged) {
          return;
        }
        
        if (e.target === lightbox) {
          closeLightbox();
        }
      });
      
      // Prevent accidental lightbox close when dragging
      lightbox.addEventListener('mousedown', function(e) {
        if (e.target === lightbox && currentZoom > 1) {
          e.preventDefault();
        }
      });
      
      // Keyboard navigation for lightbox
      document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
          navigateLightbox(1);
        } else if (e.key === '+' || e.key === '=') {
          // Zoom in with keyboard
          currentZoom = Math.min(currentZoom + 0.2, 3);
          updateImageTransform();
        } else if (e.key === '-') {
          // Zoom out with keyboard
          currentZoom = Math.max(currentZoom - 0.2, 0.5);
          if (currentZoom <= 1) {
            translateX = 0;
            translateY = 0;
          }
          updateImageTransform();
        } else if (e.key === '0') {
          // Reset zoom with keyboard
          currentZoom = 1;
          translateX = 0;
          translateY = 0;
          updateImageTransform();
        }
      });
      
      console.log('Lightbox setup complete!');
    } else {
      console.log('Lightbox elements missing');
    }
    
  }, 500); // Wait 500ms for everything to load
});
