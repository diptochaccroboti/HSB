// Hero section background image swap
const hero = document.querySelector('.hero');
let images = ['hero1.jpg', 'hero2.jpg', 'hero3.jfif'];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeImage, 5000);
