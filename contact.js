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
  const gmail = document.querySelector("#gmail").value;
  const message = document.querySelector("#message").value;

  checkG = gmail.replace(/\s+/g, '');
  checkM = message.replace(/\s+/g, '');

  

  if (checkG !== "" && gmail.includes("@gmail.com") && checkS !== "" && checkM !== "") {
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

    } else {
        document.getElementById("warning").style.display = "flex";
    }
  }

  function sendContact() {
    const gmail = document.querySelector("#gmail").value;
    const message = document.querySelector("#message").value;

    var newDiv = document.createElement("p");
    newDiv.innerHTML = `${gmail} <br> ${message}`;
    
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
    alert('thanks for commenting');
    postContact('https://santatsut.github.io/contact', gmail, message);
}

async function postContact(url, gmail, message) {

  const userData = {
    gmail, 
    message,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('User created:', data);
  } catch (error) {
    console.error('There was a problem with the POST request:', error);
  }
}