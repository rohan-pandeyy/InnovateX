const imageContainer = document.querySelector('.image-container');
const totalImages = 40; // Change this to the number of images in your sequence

// Load and append images to the container
for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement('img');
  img.src = `images/${i}.png`; // Update with your image file names 
  imageContainer.appendChild(img);
}

const images = document.querySelectorAll('.image-container img');

let currentImageIndex = 0; 
images[currentImageIndex].classList.add('active'); 

window.addEventListener('scroll', () => {
  const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

  const newImageIndex = Math.floor(scrollProgress * totalImages);

  if (newImageIndex !== currentImageIndex && newImageIndex < totalImages) {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = newImageIndex;
    images[currentImageIndex].classList.add('active'); 
  }
});