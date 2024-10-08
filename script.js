let currentPosition = 0;
const imageHeight = 150; // Adjust this to the height of your images
const containerHeight = document.querySelector('.carousel-container').clientHeight;
const innerCarousel = document.querySelector('.carousel-inner');
const totalHeight = innerCarousel.scrollHeight;

function scrollUp() {
    if (currentPosition < 0) {
        currentPosition += imageHeight;
        innerCarousel.style.transform = `translateY(${currentPosition}px)`;
    }
}

function scrollDown() {
    if (Math.abs(currentPosition) < totalHeight - containerHeight) {
        currentPosition -= imageHeight;
        innerCarousel.style.transform = `translateY(${currentPosition}px)`;
    }
}
