var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/hugo-in-mijn-nek.png') {
    myImage.setAttribute('src','images/hugo-leonore-bad.png');
  } else if (mySrc === 'images/hugo-leonore-bad.png'){
    myImage.setAttribute('src','images/planckendael.png');
  } else {
    myImage.setAttribute('src', 'images/hugo-in-mijn-nek.png')
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Look at my Family, ' + myName;
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Look at my Family, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
