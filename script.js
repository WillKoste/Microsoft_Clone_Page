const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  const mainMenu = document.querySelector('.main-menu');
  mainMenu.classList.toggle('show');
}