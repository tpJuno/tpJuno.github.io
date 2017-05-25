var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/3692427372_0f596c0f45_b.jpg') {
      myImage.setAttribute ('src','images/3691568837_7fddf05fc0_o.jpg');
    } else {
      myImage.setAttribute ('src','images/3692427372_0f596c0f45_b.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = "Hi " + myName +",";
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "Hi " + storedName +",";
}

myButton.onclick = function() {
  setUserName();
}