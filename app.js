let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const indicatorsContainer = document.querySelector('.carousel-indicators');

// Create indicators
for (let i = 0; i < totalSlides; i++) {
  const indicator = document.createElement('span');
  indicator.classList.add('carousel-indicator');
  indicator.setAttribute('onclick', `goToSlide(${i})`);
  indicatorsContainer.appendChild(indicator);
}

// Show initial slide
showSlide(currentSlide);

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Show the selected slide
  slides[index].style.display = 'block';

  // Update current slide indicator
  const indicators = document.querySelectorAll('.carousel-indicator');
  indicators.forEach(indicator => {
    indicator.classList.remove('active');
  });
  indicators[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Auto slide
setInterval(nextSlide, 3000);
