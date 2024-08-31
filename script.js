const imageContainer = document.querySelector('.image-container');
const totalImages = 10; // Replace with your image count

for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement('img');
  img.src = `images/${i}.png`; // Update with your image paths
  imageContainer.appendChild(img);
}

const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;
images[currentImageIndex].classList.add('active');

const spacerHeight = document.querySelector('.content-spacer').offsetHeight;

window.addEventListener('scroll', () => {
    const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    const newImageIndex = Math.floor(scrollProgress * totalImages);

    if (newImageIndex !== currentImageIndex && newImageIndex < totalImages) {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = newImageIndex;
        images[currentImageIndex].classList.add('active');
    }
});

const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  navbarToggle.classList.toggle('active');
});
