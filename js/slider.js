const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
const viewAllBtn = document.querySelector('.view-all-btn');
const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");

let index = 0;

function showSlide(index) {
    const offset = -index * 100 / images.length;
    slides.style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % images.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
    });
});

viewAllBtn.addEventListener('click', () => {
    modal.style.display = "block";
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

showSlide(index);