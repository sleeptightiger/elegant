let marginY = 0;
let destination = 0;
const speed = 5;
let scroller = null;

const header = document.querySelector('header');
const body = document.querySelector('body');

function initScroll(elementId) {
  destination = document.getElementById(elementId).offsetTop - 170;

  scroller = setTimeout(function(){
    initScroll(elementId);
  }, 1);

  marginY += speed;

  window.scroll(0, marginY);

  if(marginY >= destination) {
    clearTimeout(scroller);
    marginY = 0;
  }


}

window.onscroll = function() {sticky()};
let lastScrollTop = 0;
function sticky() {

  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop){
     console.log('down');
     header.classList.remove('sticky');
     body.style.marginTop = "0px";
  } else {
    console.log('up');
    header.classList.add('sticky');
    body.style.marginTop = "-100px";
    header.style.backgroundColor = 'rgba(14,34,42,.5)';
    if(window.pageYOffset < 100) {
      header.classList.remove('sticky');
      body.style.marginTop = "0px";
      header.style.backgroundColor = 'transparent';
    }
  }
  lastScrollTop = st;
}
