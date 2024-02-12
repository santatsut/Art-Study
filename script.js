// listen for scroll events
window.onscroll = function() {scrollFunction()};
// scroll event funciton
function scrollFunction() {
  if (document.documentElement.scrollTop > 175) {
    document.getElementById('arrow').style.display = 'flex';
  } else {
    document.getElementById('arrow').style.display = 'none';
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

function rendering() {
  if (document.documentElement.scrollTop > 600) {
    document.getElementsByClassName('hidden').className="PaintingShowing";
  } 
}
// scrolling down with start button
let viewElement = document.getElementById('middle'); 
function scrollDown() {
    /*
    window.scrollTo({
        top: 900,
        behavior: "smooth",
      });
    */
      viewElement.scrollIntoView({
        behavior: "smooth"
      });
}

let viewElement1 = document.getElementById('titleDigitalArt'); 
function scrollDown2() {
    /*
    window.scrollTo({
        top: 900,
        behavior: "smooth",
      });
    */
      viewElement1.scrollIntoView({
        behavior: "smooth"
      });
}


// scrolling up
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
}
// for showing digital art
function showingDigitalArt() {
  document.getElementById('digitalArt').style.display = 'flex';
  document.getElementById('Logos').style.display = 'none';
  document.getElementById('titleDigitalArt').style.textDecorationColor = 'rgba(0, 0, 0, 1)';
  document.getElementById('titleLogos').style.textDecorationColor = 'rgba(0, 0, 0, 0)';
  if (window.innerWidth > 1024) {
    document.getElementById('sideways').style.display = 'flex';
    document.getElementById('sideways1').style.display = 'none';
  }
}
// for showing the logos
function showingLogos() {
  document.getElementById('digitalArt').style.display = 'none';
  document.getElementById('Logos').style.display = 'flex';
  document.getElementById('titleDigitalArt').style.textDecorationColor = 'rgba(0, 0, 0, 0)';
  document.getElementById('titleLogos').style.textDecorationColor = 'rgba(0, 0, 0, 1)';
  if (window.innerWidth > 1024) {
  document.getElementById('sideways').style.display = 'flex';
  document.getElementById('sideways1').style.display = 'flex';
  document.getElementById('sideways').style.display = 'none';
  document.getElementById('sideways1').style.display = 'flex';
  }
}

// light box
var body = document.body;
function openLightbox(imageSrc, Name) {
    document.getElementById('myLightbox').style.display = 'flex';
    document.getElementById('lightbox-image').src = imageSrc;
    document.getElementById('overlay').style.display = 'flex';
    window.scrollTo({
        top: 900,
        behavior: "smooth",
        });
    body.style.overflow = 'hidden';
}
function closeLightbox() {
    document.getElementById('myLightbox').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    body.style.overflow = 'auto';
}

document.querySelectorAll('#digitalArt img').forEach(image => {
  image.onclick = () => {
      document.querySelector('#digitalArt .popUpDG').style.display = 'block';
      document.querySelector('.popUpDG img').src = image.getAttribute('src');
  }
})

document.querySelector('.popUpDG span').onclick = () => {
  document.querySelector('#digitalArt .popUpDG').style.display = 'none';
}

document.querySelectorAll('#Logos img').forEach(image => {
  image.onclick = () => {
      document.querySelector('#Logos .popUpLogo').style.display = 'block';
      document.querySelector('.popUpLogo img').src = image.getAttribute('src');
  }
})

document.querySelector('.popUpLogo span').onclick = () => {
  document.querySelector('#Logos .popUpLogo').style.display = 'none';
}