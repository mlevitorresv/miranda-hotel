const burgerButton = document.getElementById('burgerIcon');
const burgerMenu = document.getElementById('menu');
let isOpen = false;



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