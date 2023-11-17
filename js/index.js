const burgerButton = document.getElementById('burgerIcon');
const crossBurgerButton = document.getElementById('crossBurgerIcon');
const burgerMenu = document.getElementById('menu');
let isOpen = false;



const handleMenu = () => {
  if(!isOpen){
    burgerMenu.style.display = "block";
    // burgerButton.style.display = 'none';
    // crossBurgerButton.style.display = 'block';
    isOpen = true;
  }else{
    burgerMenu.style.display = "none"
    burgerButton.style.display = 'block';
    // crossBurgerButton.style.display = 'none';
    isOpen = false;
  }
}

burgerButton.onclick = handleMenu;