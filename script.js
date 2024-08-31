const imageContainer = document.querySelector('.image-container');
const totalImages = 80;

// Create and append images
for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement('img');
  img.src = `images/00${i}.png`;
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

let lastKnownScrollPosition = 0;
let ticking = false;
let secondSignVisible = false;

function handleScroll(scrollPos) {
  const firstSign = document.getElementById('hanging-sign');
  const secondSign = document.getElementById('hanging-sign-2');
  const triggerPosition = 300;
  const hidePosition = 800; // When both signs should disappear
  const secondSignHidePosition = 300;

  // Hide both signs if scroll position is greater than or equal to hidePosition
  if (scrollPos >= hidePosition) {
    firstSign.classList.remove('visible');
    firstSign.classList.add('hidden');
    secondSign.classList.remove('visible');
    secondSign.classList.add('hidden');
    secondSignVisible = false;
    return; // Exit the function early
  }

  // Handle visibility for the first sign
  if (scrollPos > triggerPosition && scrollPos < hidePosition) {
    firstSign.classList.remove('hidden');
    firstSign.classList.add('visible');
  } else {
    firstSign.classList.remove('visible');
    firstSign.classList.add('hidden');
  }

  // Handle visibility for the second sign
  if (secondSignVisible) {
    if (scrollPos <= secondSignHidePosition) {
      secondSign.classList.remove('visible');
      secondSign.classList.add('hidden');
      secondSignVisible = false;
    } else if (scrollPos < hidePosition) {
      secondSign.classList.remove('hidden');
      secondSign.classList.add('visible');
    }
  }
}

// Event listener for the first sign
document.getElementById('hanging-sign').addEventListener('click', function() {
  const secondSign = document.getElementById('hanging-sign-2');
  secondSign.classList.remove('hidden');
  secondSign.classList.add('visible');
  secondSignVisible = true;
});

// Existing scroll event listener
window.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      handleScroll(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

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

  if (!ticking) {
    window.requestAnimationFrame(function() {
      handleScroll(scrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

// Navbar toggle functionality
const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

navbarToggle?.addEventListener('click', () => {
  navbar?.classList.toggle('active');
  navbarToggle.classList.toggle('active');
});

// Auto-typing effect
var typed = new Typed(".auto-type", {
  strings : ["Talk to RailMitra", "Raise a Complaint"],
  typeSpeed : 150,
  backSpeed : 50,
  loop : true
});
