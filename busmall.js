'use strict';
var totalClicks = 0;
var allProducts = [];
var container = document.getElementById('image_container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

console.log(allProducts);
function Images (filepath,name){
  this.location = filepath;
  this.picName = name;
  this.itemsClicked = 0;
  this.itemsViewed = 0;

  allProducts.push(this);
};
function imagePlacement(){
  var lefty = allProducts [Math.floor(Math.random() * 20)];
  var centre = allProducts [Math.floor(Math.random() * 20)];
  var righty = allProducts [Math.floor(Math.random() * 20)];

  left.src = lefty.location;
  center.src = centre.location;
  right.src = righty.location;
while(lefty === centre || lefty === righty){
  lefty = allProducts [Math.floor(Math.random() * 20)];
}
while(centre === righty || centre === lefty){
  var centre = allProducts [Math.floor(Math.random() * 20)];
}
while(righty === centre || righty === lefty){
  righty = allProducts [Math.floor(Math.random() * 20)];
}
}

new Images ('images/babysweep.jpg', 'baby');
new Images ('images/bananacutter.jpg', 'banana');
new Images ('images/boots.jpg', 'boots');
new Images ('images/chair.jpg', 'chair');
new Images ('images/cthulhu.jpg.jpg', 'monster');
new Images ('images/dog-duck.jpg', 'dog-duck');
new Images ('images/dragon.jpg', 'dragon');
new Images ('images/ipadtpholder.jpg', 'ipad');
new Images ('images/meatballgum.jpg', 'meatball');
new Images ('images/pen.jpg', 'pen');
new Images ('images/pet-sweep.jpg', 'pet');
new Images ('images/r2d2luggage.jpg', 'r2d2');
new Images ('images/scissors.jpg', 'scissors');
new Images ('images/shark.jpg', 'shark');
new Images ('images/tauntaun.jpg', 'tatu');
new Images ('images/toastercoffee.jpg', 'breakfast');
new Images ('images/unicorn.jpg', 'unicorn');
new Images ('images/usb-page3.jpg', 'tail');
new Images ('images/water-can.jpg', 'water');
new Images ('images/wine-glass.jpg', 'wine');

imagePlacement();
// function selectRandomCrap(){
//   var randomIndex = Math.floor(Math.random() * allProducts.length);
//   console.log(allProducts[randomIndex]);
// }
// selectRandomCrap();
//
//
//   function selectRandomImage(){
//     var randomIndex = Math.floor(Math.random() * allProducts.length);
//     console.log(allProducts[randomIndex]);
//
// function randomImaGenerator(){
//   if(totalClicks < 25) {
//     var rand1 = randomImage();
//     var rand2 = randomImage();
//     var rand3 = randomImage();
//     while (rand1 === rand2 || rand1 === rand3) {
//       rand1 = randomImage();
//     }
//     while (rand2 === rand1 || rand2 === rand3) {
//       rand2 = randomImage();
//     }
//     while (rand3 === rand1 || rand3 === rand2) {
//       rand3 = randomImage();
//     }
// }
// }
