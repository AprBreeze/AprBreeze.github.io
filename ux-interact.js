// Interactive Flip Cards Functionality
document.addEventListener('DOMContentLoaded', function() {
    const flipCards = document.querySelectorAll('.flip-card');
    const gaugeFill = document.getElementById('gaugeFill');
    const gaugeText = document.getElementById('gaugeText');
    const achievementText = document.getElementById('achievementText');
    const experienceGauge = document.querySelector('.experience-gauge');
    const achievementPopup = document.getElementById('achievementPopup');
    
    let flippedCards = new Set();
    const totalCards = flipCards.length;
    
    // Experience gauge update function
    function updateExperienceGauge() {
        const progress = (flippedCards.size / totalCards) * 100;
        const progressPercent = (flippedCards.size / totalCards * 100).toFixed(2);
        
        // Update gauge fill
        gaugeFill.setAttribute('data-progress', progressPercent);
        gaugeFill.style.width = progress + '%';
        
        // Check if all cards are flipped
        if (flippedCards.size === totalCards) {
            // Complete the gauge
            gaugeFill.classList.add('complete');
            
            // Hide the entire gauge after a brief delay
            setTimeout(() => {
                experienceGauge.classList.add('complete');
                
                // Show popup notification
                showAchievementPopup();
            }, 400);
        }
    }
    
    // Show achievement popup notification
    function showAchievementPopup() {
        achievementPopup.classList.add('show');
        
        // Hide popup after 3 seconds
        setTimeout(() => {
            achievementPopup.classList.remove('show');
            achievementPopup.classList.add('hide');
            
            // Clean up hide class after animation
            setTimeout(() => {
                achievementPopup.classList.remove('hide');
            }, 500);
        }, 3000);
    }
    
    // Add click event listeners to each card
    flipCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            // Only allow flipping if card is not already flipped
            if (!this.classList.contains('flipped')) {
                this.classList.add('flipped');
                flippedCards.add(index);
                updateExperienceGauge();
                
                // Add a celebration effect for each card flip
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                // Make the card unclickable after flipping
                this.style.cursor = 'default';
                this.setAttribute('aria-label', `Fun fact card ${index + 1} revealed.`);
            }
        });
        
        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Fun fact card ${index + 1}. Click to reveal.`);
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Only trigger click if card is not already flipped
                if (!this.classList.contains('flipped')) {
                    this.click();
                }
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
                    flippedCards.add(index);
                    updateExperienceGauge();
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
            flipCards.forEach((card, index) => {
                if (!card.classList.contains('flipped')) {
                    setTimeout(() => {
                        card.classList.add('flipped');
                        flippedCards.add(index);
                        updateExperienceGauge();
                    }, index * 200);
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
        
        // Insert the button after the gauge container
        const gaugeContainer = document.querySelector('.experience-gauge-container');
        gaugeContainer.parentNode.insertBefore(revealButton, gaugeContainer.nextSibling);
    }
    
    // Uncomment the line below to add a "Reveal All" button
    // createRevealAllButton();
    
    // Track card interactions for analytics (optional)
    function trackCardInteraction(cardIndex, isFlipped) {
        console.log(`Card ${cardIndex + 1} was ${isFlipped ? 'flipped' : 'unflipped'}`);
    }
    
    // Initialize the gauge
    updateExperienceGauge();
}); 