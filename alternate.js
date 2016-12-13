'use strict';

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DATA SETUP
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

// DOM variables
// -----------------
var imageContainer = document.getElementById('image_container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

// Global variables
// -----------------
var allProducts = [];
var name = ['babysweep','bananacutter','boots','chair','cthulhu','dog-duck', 'dragon','ipadtpholder', 'meatballgum', 'pen', 'pet-sweep', 'r2d2luggage', 'scissors', 'shark', 'tauntaun', 'toastercoffee', 'unicorn', 'usb-page3', 'water-can', 'wine-glass'];
// Constructor
// -----------------
function Image(name){
this.filepath = 'img/' + name + '.jpg'
this.name = name;
this.clicks = 0;
this.views = 0;
}
// Instances
// -----------------

for (var i = 0; i < names.length; i++){
 new Image(names[i]);
}
console.table(allProducts)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DECLARE FUNCTIONS
// (DEFINE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

function rand() {
  // generate a random number between 0 and allProducts.length
}

function preventDupes() {
  // logic to prevent duplicates
  // duplicates with prior set of images
  // duplicates within the current set of images
}

function showThreePics() {
  // this will place three new images on the page
}

function renderList() {
  // display a list of items and total clicks/views
}

function handleClick(event) {
  event.preventDefault();
  // identify who was clicked
  // tally the click
  // display 3 new images
  // prevent duplicates
  // alert for clicks not on images
  // clear old images
  // check whether total clicks <25
  // after 25, remove event listeners on picNames
  // after 25, show "Results" button
}
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

showThreePics();
picContainer.addEventListener('click', handleClick);
