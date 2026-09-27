// Billede overlay / slider


// Læs mere
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