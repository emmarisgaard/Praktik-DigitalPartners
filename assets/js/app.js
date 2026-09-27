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

let likes = 0;

const likeButtons = document.querySelectorAll('.likeButton');
const totalLikes = document.querySelector('.totalLikes');

likeButtons.forEach(function (likeButton) {

    likeButton.addEventListener('click', function () {
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