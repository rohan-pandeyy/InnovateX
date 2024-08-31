const imageContainer = document.querySelector('.image-container');
const totalImages = 40; // Replace with your image count

// Create and append images
for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement('img');
  img.src = `images/${i}.png`; // Update with your image paths
  imageContainer.appendChild(img);
}

const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;
images[currentImageIndex].classList.add('active');

// Calculate the total scrollable height
const getScrollHeight = () => {
  const body = document.body;
  const html = document.documentElement;

  return Math.max(
    body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight
  ) - window.innerHeight;
};

// Scroll event listener
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const maxScroll = getScrollHeight();
  const scrollFraction = scrollPosition / maxScroll;
  
  // Calculate which image should be shown
  const imageIndex = Math.min(
    Math.floor(scrollFraction * totalImages),
    totalImages - 1
  );

  // Update active image
  if (imageIndex !== currentImageIndex) {
    images[currentImageIndex].classList.remove('active');
    images[imageIndex].classList.add('active');
    currentImageIndex = imageIndex;
  }
});

// Navbar toggle functionality
const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

navbarToggle?.addEventListener('click', () => {
  navbar?.classList.toggle('active');
  navbarToggle.classList.toggle('active');
});