const initCarousel = () => {
    const carouselWrapper = document.querySelector('.carousel__images');
    const images = document.querySelectorAll('.carousel__image');
    const prevButton = document.querySelector('.carousel__button--prev');
    const nextButton = document.querySelector('.carousel__button--next');
  
    let currentIndex = 0;
  
    const updateCarousel = () => {
      const offset = -currentIndex * 100; // Move by 100% for each image
      carouselWrapper.style.transform = `translateX(${offset}%)`;
    };
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });
  };
  
  document.addEventListener('DOMContentLoaded', initCarousel);