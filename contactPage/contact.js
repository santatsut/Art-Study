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

function comment() {
  var key = 0;
  const gmail = document.querySelector("#gmail").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;
  checkG = gmail.replace(/\s+/g, '');
  checkS = subject.replace(/\s+/g, '');
  checkM = message.replace(/\s+/g, '');
  

  if (checkG !== "" && checkS !== "" && checkM !== "") {
    //let key = (Math.random() + 1).toString(36).substring(7);
    
    var newDiv = document.createElement("p");
    newDiv.innerHTML = `${gmail} <br> ${subject} <br> ${message}`;
    
    const parent = document.querySelector("#commentSection");
    parent.appendChild(newDiv);
    
    newDiv.style.backgroundColor = "rgb(50, 50, 20)";
    newDiv.style.color = "white";
    newDiv.style.width = "50rem";
    newDiv.style.height = "10rem";
    newDiv.style.display = "flex";
    newDiv.style.position = "relative";
    newDiv.style.padding = "10px";
    newDiv.style.margin = "auto";
    newDiv.style.marginTop = "100px";
    newDiv.style.borderRadius = "10px";

    localStorage.setItem(key,`${gmail}`);  
    key += 1;
  }
}

window.onload = function() {
  let key = localStorage.length;
  console.log(key)
  for (let i = 0; i < key; i++) {
    var newDiv = document.createElement("p");

    var x = localStorage.getItem(i);
    newDiv.innerHTML = `${x}asdfs <br> hello this is storage <br> adjfklajsdk`;
    
    newDiv.style.backgroundColor = "rgb(50, 50, 20)";
    newDiv.style.color = "white";
    newDiv.style.width = "50rem";
    newDiv.style.height = "10rem";
    newDiv.style.display = "flex";
    newDiv.style.position = "relative";
    newDiv.style.padding = "10px";
    newDiv.style.margin = "auto";
    newDiv.style.marginTop = "100px";
    newDiv.style.borderRadius = "10px";
    
    const parent = document.querySelector("#commentSection");
    parent.appendChild(newDiv);
  }
};