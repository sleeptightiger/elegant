const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
menu.addEventListener('click', () => {
  hamburger.classList.toggle('close');
});
