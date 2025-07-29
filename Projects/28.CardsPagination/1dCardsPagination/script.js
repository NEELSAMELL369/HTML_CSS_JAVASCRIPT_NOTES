const cards = document.getElementById('cards');
const cardWidth = 320; // width of each card with margin
let currentIndex = 0;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateButtons() {
    // Disable/enable the previous and next buttons based on the current index
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.children.length - 1;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCardsPosition();
        updateButtons();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < cards.children.length - 1) {
        currentIndex++;
        updateCardsPosition();
        updateButtons();
    }
});

function updateCardsPosition() {
    cards.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
}

// Initialize button state
updateButtons();