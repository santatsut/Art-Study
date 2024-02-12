// listen for scroll events
window.onscroll = function() {scrollFunction()};
// scroll event funciton
function scrollFunction() {
    if(window.scrollY > 225 && window.scrollY < 1400) {
        document.getElementById("square1").className= 'animated';        
    } else {
        document.getElementById("square1").className='';
    }
    if (window.scrollY > 1400 && window.scrollY < 2000) {
        document.getElementById("circle").className= 'animated';
    }
    if (window.scrollY > 200) {
        document.getElementById("imageArrowUp").style.display= 'flex';
    } else {
        document.getElementById("imageArrowUp").style.display= 'none';
    }
}

var down = false;
let dropDown = () => {
  if (down == false) {
    document.getElementById('dropdown-content').style.display = 'flex';
    down = true;
  } else {
    document.getElementById('dropdown-content').style.display = 'none';
    down = false;
  }
}

function scrollDown(viewElement) {
      viewElement.scrollIntoView({
        behavior: "smooth"
      });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
}