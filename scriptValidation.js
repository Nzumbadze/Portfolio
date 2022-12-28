"use strict";

let navigation = document.getElementById("nav-ul");
let burgerbar = document.getElementById("burger-bar");

burgerbar.addEventListener('click', function(){
    navigation.classList.toggle('navActive')
})

// sticky header

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;


function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }




function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
    if (input.value.match(validRegex)) {
      document.form1.text1.focus();
      return true;
    } else {  
      alert("Invalid email address!");  
      document.form1.text1.focus();  
      return false;  
    }  
  }


// valdation

let form = document.getElementById("contactWrapper");

form.addEventListener ("submit", function(event) {
  event.preventDefault();
  let error = {};


  let email = document.getElementById("email").value;
  if (email == "") {
    error.email = "Email field must not be empty";
  }

  // subject
  let subject = document.getElementById("subject").value;
  if (!subject) {
    error.subject = "This field is required and cannot be empty";
  }

  let messageBox = document.getElementById("messageBox").value;
  if (!messageBox) {
    error.messageBox = "This field is required and cannot be empty";
  }

  console.log(error);

  document.querySelectorAll(".error-text").forEach((item) => {
    item.textContent = "";
  });

  for(let key in error) {
    let errorText = document.getElementById("error_" + key);

    if(errorText){
      errorText.innerText = error[key];
    }
  }
  if (Object.keys(error).length == 0) {
    form.submit();
  }
});

