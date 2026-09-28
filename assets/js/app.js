

// LÆS MERE - Description
const descriptionText = document.querySelector('.descriptionText');
const readMoreButton = document.querySelector('.readMoreButton');

readMoreButton.addEventListener('click', function () {

    descriptionText.classList.toggle('expanded');

    if (descriptionText.classList.contains('expanded')) {
        readMoreButton.textContent = 'Læs mindre';
    } else {
        readMoreButton.textContent = 'Læs mere';
    }

});

// 'LIKE' TOGGLE + COUNTER
let likes = 0;

const likeButtons = document.querySelectorAll('.likeButton');
const totalLikes = document.querySelector('.totalLikes');

likeButtons.forEach(function (likeButton) {

    likeButton.addEventListener('click', function (event) {
        event.preventDefault();
        if (likeButton.classList.contains('fa-regular')) {

            likeButton.classList.remove('fa-regular');
            likeButton.classList.add('fa-solid');

            likes++;

        } else {

            likeButton.classList.remove('fa-solid');
            likeButton.classList.add('fa-regular');

            likes--;
        }

        totalLikes.textContent = likes;
    });
});


// BILLEDE OVERLAY / SLIDER

const overlay = document.querySelector('.imageOverlay');
const overlayImage = document.querySelector('.overlayImage');

const floorplanButton = document.querySelector('.floorplanButton');
const allImagesButton = document.querySelector('.allImagesButton');

const closeOverlay = document.querySelector('.closeOverlay');
const previousImage = document.querySelector('.previousImage');
const nextImage = document.querySelector('.nextImage');

// Billeder i slider
const images = [
    './assets/img/plantegning.jpg',
    './assets/img/hero1.jpg',
    './assets/img/hero2.jpg',
    './assets/img/hero3.jpg',
    './assets/img/køkken.jpg',
    './assets/img/soveværelse.jpg'

];


let currentImage = 1;


// Se alle billeder - åben overlay

allImagesButton.addEventListener('click', function () {

    currentImage = 1;

    overlayImage.src = images[currentImage];

    overlay.classList.add('active');

});


// Se plantegning - åben overlay

floorplanButton.addEventListener('click', function () {

    currentImage = 0;

    overlayImage.src = images[currentImage];

    overlay.classList.add('active');

});


// Næste billede

nextImage.addEventListener('click', function () {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    overlayImage.src = images[currentImage];

});


// Forrige billede

previousImage.addEventListener('click', function () {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    overlayImage.src = images[currentImage];

});


// Luk overlay på kryds

closeOverlay.addEventListener('click', function () {

    overlay.classList.remove('active');

});

// Luk overlay med ESC
document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape') {
        overlay.classList.remove('active');
    }

});