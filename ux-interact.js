// Interactive Flip Cards Functionality
document.addEventListener('DOMContentLoaded', function() {
    const flipCards = document.querySelectorAll('.flip-card');
    let revealedCards = 0;
    
    // Add click event listeners to each card
    flipCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
            
            // Add a subtle sound effect simulation (visual feedback)
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
        
        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Fun fact card ${index + 1}. Click to reveal.`);
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Optional: Auto-reveal cards with a delay (uncomment to enable)
    /*
    function autoRevealCards() {
        flipCards.forEach((card, index) => {
            setTimeout(() => {
                if (!card.classList.contains('flipped')) {
                    card.classList.add('flipped');
                }
            }, (index + 1) * 800); // 800ms delay between each card
        });
    }
    
    // Start auto-reveal after 3 seconds
    setTimeout(autoRevealCards, 3000);
    */
    
    // Add intersection observer for entrance animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Initialize cards with entrance animation
    flipCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        cardObserver.observe(card);
    });
    
    // Add a "Reveal All" functionality (optional)
    function createRevealAllButton() {
        const revealButton = document.createElement('button');
        revealButton.textContent = 'Reveal All Facts';
        revealButton.className = 'reveal-all-btn';
        revealButton.style.cssText = `
            background: var(--secondary-color);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 28px;
            font-family: var(--body-text-font);
            font-size: 0.8rem;
            cursor: pointer;
            margin-top: 1rem;
            transition: all 0.3s ease;
        `;
        
        revealButton.addEventListener('click', function() {
            flipCards.forEach(card => {
                if (!card.classList.contains('flipped')) {
                    card.classList.add('flipped');
                }
            });
            this.style.display = 'none';
        });
        
        revealButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        revealButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Insert the button after the cards container
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.parentNode.insertBefore(revealButton, cardsContainer.nextSibling);
    }
    
    // Uncomment the line below to add a "Reveal All" button
    // createRevealAllButton();
    
    // Track card interactions for analytics (optional)
    function trackCardInteraction(cardIndex) {
        // You can add analytics tracking here
        console.log(`Card ${cardIndex + 1} was flipped`);
    }
    
    // Add tracking to existing click events
    flipCards.forEach((card, index) => {
        card.addEventListener('click', () => trackCardInteraction(index));
    });
}); 