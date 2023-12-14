const screenWidth = window.innerWidth || document.documentElement.clientWidth;

const scroll = screenWidth < 1000 ? true : false

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
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



