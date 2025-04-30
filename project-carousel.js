document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    const currentSlideDisplay = document.querySelector('.current-slide');
    const totalSlidesDisplay = document.querySelector('.total-slides');
    
    // Edge case: If there are no slides, exit the function
    if (!track || !slides.length) return;
    
    // Set up initial state
    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Set initial position of slides
    track.style.transform = 'translateX(0)';
    
    // Update total slides count
    totalSlidesDisplay.textContent = slides.length;
    
    // Update current slide indicator
    function updateCurrentSlide() {
        currentSlideDisplay.textContent = currentIndex + 1;
    }
    
    // Move to a specific slide
    function moveToSlide(targetIndex) {
        // Ensure the index is within bounds
        if (targetIndex < 0) {
            targetIndex = 0;
        } else if (targetIndex >= slides.length) {
            targetIndex = slides.length - 1;
        }
        
        // Update current index
        currentIndex = targetIndex;
        
        // Move the track
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update the current slide indicator
        updateCurrentSlide();
    }
    
    // Next slide button event
    nextButton.addEventListener('click', function() {
        moveToSlide(currentIndex + 1);
    });
    
    // Previous slide button event
    prevButton.addEventListener('click', function() {
        moveToSlide(currentIndex - 1);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Only handle arrow keys when carousel is in viewport
        const rect = track.getBoundingClientRect();
        const isInViewport = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        
        if (isInViewport) {
            if (e.key === 'ArrowRight') {
                moveToSlide(currentIndex + 1);
            } else if (e.key === 'ArrowLeft') {
                moveToSlide(currentIndex - 1);
            }
        }
    });
    
    // Touch events for swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        // Determine the swipe direction
        if (touchEndX < touchStartX) {
            // Swipe left, go to next slide
            moveToSlide(currentIndex + 1);
        } else if (touchEndX > touchStartX) {
            // Swipe right, go to previous slide
            moveToSlide(currentIndex - 1);
        }
    }
    
    // Initialize by showing the first slide
    updateCurrentSlide();
}); 