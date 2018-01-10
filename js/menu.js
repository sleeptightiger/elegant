const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const hiddenMenu = document.querySelector('.hidden-menu');
menu.addEventListener('click', () => {
  hamburger.classList.toggle('close');
  hiddenMenu.classList.toggle('unhide');
});
