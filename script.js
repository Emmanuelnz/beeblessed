// Email.js
function sendMail() {
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }

  emailjs.send().then(alert("Message Submitted, Thank you!"))
}

// Side Menu Functionality 

var navmenu = document.getElementById("navmenu");

      function openmenu() {
        navmenu.style.right = "0";
      }

      function closemenu() {
        navmenu.style.right = "-200px";
      }
      