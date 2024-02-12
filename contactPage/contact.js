//för mobil navbaren
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
