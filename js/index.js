const burgerButton = document.getElementById('burgerIcon');
const burgerMenu = document.getElementById('menu');
let isOpen = false;

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
  });

  const handleMenu = () => {
    if(!isOpen){
      burgerMenu.style.display = "block"
      isOpen = true;
    }else{
      burgerMenu.style.display = "none"
      isOpen = false;
    }
  }

  burgerButton.onclick = handleMenu;