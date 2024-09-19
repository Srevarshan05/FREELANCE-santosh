let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function moveSlide(direction) {
    // Slide out the current card
    cards[currentIndex].style.animation = 'slide-out 0.5s forwards';
    
    currentIndex = (currentIndex + direction + totalCards) % totalCards;
    
    // Reset the animation for the new card
    cards[currentIndex].style.animation = 'slide-in 0.5s forwards';
    
    updateCardVisibility();
}

function updateCardVisibility() {
    cards.forEach((card, index) => {
        card.style.display = (index === currentIndex) ? 'block' : 'none';
    });
}

function autoSlide() {
    moveSlide(1);
}

updateCardVisibility(); // Initialize visibility
setInterval(autoSlide, 4000); // Automatic slide every 4 seconds