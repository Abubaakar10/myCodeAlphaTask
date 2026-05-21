const images = document.querySelectorAll(".image-card img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const closeBtn = document.querySelector(".close-btn");

const filterButtons = document.querySelectorAll(".filter-btn");

const imageCards = document.querySelectorAll(".image-card");


let currentIndex = 0;


images.forEach((img, index) => {
    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImage.src = img.src;
        currentIndex = index;
    });
});


closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex].src;
});


prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex].src;

});


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        imageCards.forEach((card) => {

            if (filter === "all") {

                card.style.display = "block";
            }

            else if (card.classList.contains(filter)) {

                card.style.display = "block";
            }

            else {

                card.style.display = "none";
            }

        });

    });

});