const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const hiddenMenu = document.querySelector('.hidden-menu');


menu.addEventListener('click', () => {
  if(hamburger.classList.contains('close')) {
    hamburger.classList.toggle('close');
    hiddenMenu.style.transform = `translateY(-676px)`;
    body.style.overflow = 'scroll';
    if(window.pageYOffset > 0) {
      header.style.backgroundColor = 'rgba(14,34,42,.5)';
    }

  } else {
    hamburger.classList.toggle('close');
    hiddenMenu.style.transform = `translateY(${window.pageYOffset}px)`;
    body.style.overflow = 'hidden';
    setTimeout(function () {
      header.style.backgroundColor = 'transparent';
    }, 500);
  }

});
