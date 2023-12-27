const scroll = window.screen.width < 1000;

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    allowSlideNext: scroll,  // Permite deslizar a la siguiente diapositiva
    allowSlidePrev: scroll,
});



const handleSwiperScroll =  () => {
  if(scroll) swiper.detachEvents();
  else swiper.attachEvents();
}

window.addEventListener('resize', () => handleSwiperScroll);
window.addEventListener('load', () => handleSwiperScroll);