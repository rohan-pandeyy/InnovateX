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
let complaintDropdownVisible = false;
let recommendationDropdownVisible = false;
let feedbackDropdownVisible = false;

function handleScroll(scrollPos) {
  const complaintBot = document.getElementById('complaint-bot');
  const complaintDropdown = document.getElementById('complaint-dropdown');
  const recommendationBot = document.getElementById('recommendation-bot');
  const recommendationDropdown = document.getElementById('recommendation-dropdown');
  const feedbackBot = document.getElementById('feedback');
  const feedbackDropdown = document.getElementById('feedback-dropdown');

  const triggerPosition1 = 300;  // When the first sign appears
  const triggerPosition2 = 1300; // When the second sign appears
  const triggerPosition3 = 2400; // When the third sign appears

  const hidePosition1 = 800;     // When the first sign should disappear
  const hidePosition2 = 1900;    // When the second sign should disappear
  const hidePosition3 = 3200;    // When the third sign should disappear

  const complaintDropdownHidePosition = 300;
  const recommendationDropdownHidePosition = 1000;
  const feedbackDropdownHidePosition = 1600;

  // Handle visibility for complaint signs
  if (scrollPos >= hidePosition1) {
    complaintBot.classList.remove('visible');
    complaintBot.classList.add('hidden');
    complaintDropdown.classList.remove('visible');
    complaintDropdown.classList.add('hidden');
    complaintDropdownVisible = false;
  } else if (scrollPos > triggerPosition1) {
    complaintBot.classList.remove('hidden');
    complaintBot.classList.add('visible');
    if (complaintDropdownVisible && scrollPos > complaintDropdownHidePosition) {
      complaintDropdown.classList.remove('hidden');
      complaintDropdown.classList.add('visible');
    }
  } else {
    complaintBot.classList.remove('visible');
    complaintBot.classList.add('hidden');
    complaintDropdown.classList.remove('visible');
    complaintDropdown.classList.add('hidden');
    complaintDropdownVisible = false;
  }

  // Handle visibility for recommendation signs
  if (scrollPos >= hidePosition2) {
    recommendationBot.classList.remove('visible');
    recommendationBot.classList.add('hidden');
    recommendationDropdown.classList.remove('visible');
    recommendationDropdown.classList.add('hidden');
    recommendationDropdownVisible = false;
  } else if (scrollPos > triggerPosition2) {
    recommendationBot.classList.remove('hidden');
    recommendationBot.classList.add('visible');
    if (recommendationDropdownVisible && scrollPos > recommendationDropdownHidePosition) {
      recommendationDropdown.classList.remove('hidden');
      recommendationDropdown.classList.add('visible');
    }
  } else {
    recommendationBot.classList.remove('visible');
    recommendationBot.classList.add('hidden');
    recommendationDropdown.classList.remove('visible');
    recommendationDropdown.classList.add('hidden');
    recommendationDropdownVisible = false;
  }

  // Handle visibility for feedback signs
  if (scrollPos >= hidePosition3) {
    feedbackBot.classList.remove('visible');
    feedbackBot.classList.add('hidden');
    feedbackDropdown.classList.remove('visible');
    feedbackDropdown.classList.add('hidden');
    feedbackDropdownVisible = false;
  } else if (scrollPos > triggerPosition3) {
    feedbackBot.classList.remove('hidden');
    feedbackBot.classList.add('visible');
    if (feedbackDropdownVisible && scrollPos > feedbackDropdownHidePosition) {
      feedbackDropdown.classList.remove('hidden');
      feedbackDropdown.classList.add('visible');
    }
  } else {
    feedbackBot.classList.remove('visible');
    feedbackBot.classList.add('hidden');
    feedbackDropdown.classList.remove('visible');
    feedbackDropdown.classList.add('hidden');
    feedbackDropdownVisible = false;
  }
}

// Event listener for complaint-bot to toggle complaint-dropdown
document.getElementById('complaint-bot').addEventListener('click', function() {
  const complaintDropdown = document.getElementById('complaint-dropdown');

  if (complaintDropdownVisible) {
    complaintDropdown.classList.remove('visible');
    complaintDropdown.classList.add('hidden');
    complaintDropdownVisible = false;
  } else {
    complaintDropdown.classList.remove('hidden');
    complaintDropdown.classList.add('visible');
    complaintDropdownVisible = true;
  }
});

// Event listener for recommendation-bot to toggle recommendation-dropdown
document.getElementById('recommendation-bot').addEventListener('click', function() {
  const recommendationDropdown = document.getElementById('recommendation-dropdown');

  if (recommendationDropdownVisible) {
    recommendationDropdown.classList.remove('visible');
    recommendationDropdown.classList.add('hidden');
    recommendationDropdownVisible = false;
  } else {
    recommendationDropdown.classList.remove('hidden');
    recommendationDropdown.classList.add('visible');
    recommendationDropdownVisible = true;
  }
});

// Event listener for feedback to toggle feedback-dropdown
document.getElementById('feedback').addEventListener('click', function() {
  const feedbackDropdown = document.getElementById('feedback-dropdown');

  if (feedbackDropdownVisible) {
    feedbackDropdown.classList.remove('visible');
    feedbackDropdown.classList.add('hidden');
    feedbackDropdownVisible = false;
  } else {
    feedbackDropdown.classList.remove('hidden');
    feedbackDropdown.classList.add('visible');
    feedbackDropdownVisible = true;
  }
});

// Scroll event listener to manage images and sign visibility
window.addEventListener('scroll', function(e) {
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

  // Handle the hanging signs based on scroll position
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
var typed1 = new Typed(".auto-type1", {
  strings : ["Talk to RailMitra", "Raise a Complaint"],
  typeSpeed : 150,
  backSpeed : 50,
  loop : true
});

var typed2 = new Typed(".auto-type2", {
  strings : ["Talk to YatriAdvisor", "Recommend a train", "Recommend a Movie", "Recommend food"],
  typeSpeed : 150,
  backSpeed : 50,
  loop : true
});
