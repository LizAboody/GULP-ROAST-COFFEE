document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
  
    let currentIndex = 0;
  
    function updateCarousel() {
      const translateValue = -currentIndex * 100 + '%';
      carouselInner.style.transform = 'translateX(' + translateValue + ')';
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      updateCarousel();
    }
  
    if (nextButton){
      nextButton.addEventListener('click', nextSlide);
    }
    if (prevButton){
      prevButton.addEventListener('click', prevSlide);
    }
  });