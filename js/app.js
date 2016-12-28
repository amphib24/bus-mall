'use strict'

// Global variables
// -----------------
var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var chartButton = document.getElementById('chart-button');
var ctx = document.getElementById('mychart');

var names = ['babysweep', 'bananacutter','boots','chair','cthulhu','dog-duck', 'dragon','ipadtpholder', 'meatballgum', 'pen', 'pet-sweep', 'r2d2luggage', 'scissors', 'shark', 'tauntaun', 'toastercoffee', 'unicorn', 'usb-page3', 'water-can', 'wine-glass'];
var allProducts = [];
var clickCounter = 1;
var clicked = [];
var viewed =[];

function drawChart () {
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['babysweep', 'bananacutter','boots','chair','cthulhu','dog-duck', 'dragon','ipadtpholder', 'meatballgum', 'pen', 'pet-sweep', 'r2d2luggage', 'scissors', 'shark', 'tauntaun', 'toastercoffee', 'unicorn', 'usb-page3', 'water-can', 'wine-glass'],
          datasets: [{
              label: '# of clicks',
              yAxesGroup: '1',
              data: clicked,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
              ],
              borderWidth: 1,
  },{
          label: 'Number of Views',
           type: "bar",
           yAxesGroup: "2",
           data: viewed,
           backgroundColor: [
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(54, 162, 235, 0.2)',

           ],
           borderColor: [
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(54, 162, 235, 1)',

           ],
           borderWidth: 1
       }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}

// Product Constructor
function Product(name) {
  this.name = name;
  this.filepath = 'images/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
  this.used = false;
  allProducts.push(this);
}

function rand() {
  return Math.floor(Math.random() * allProducts.length);
}

// function that gets three images that haven't been used previously
function makeArrayOfThreeNumbers() {

  var count = 0;
  var tempArrayofNumbers = [];

  while (count < 3) {
    var randomNumber = rand();

    if (allProducts[randomNumber].used === false) {

      // do stuff with the product that picked
      var product = allProducts[randomNumber];
      product.used = true;
      product.views += 1;
      tempArrayofNumbers.push(randomNumber);
      count += 1;
    }

  }

  // indexOf is key here it returns -1 if not in array
  for (var i = 0; i < allProducts.length; i++) {
    if (tempArrayofNumbers.indexOf(i) < 0) {
      allProducts[i].used = false;
    }
  }

  return tempArrayofNumbers;
}

function showThreePics() {
  var threeRandomNumbers = makeArrayOfThreeNumbers();
  left.src = allProducts[threeRandomNumbers[0]].filepath;
  center.src = allProducts[threeRandomNumbers[1]].filepath;
  right.src = allProducts[threeRandomNumbers[2]].filepath;
}

function renderList() {
  for (var i = 0; i < allProducts.length; i++) {
    viewed[i] = allProducts[i].views;
    clicked[i] = allProducts[i].clicks;
  }
}

function list() {
  var ulEl = document.createElement('ul');

  for (var i=0; i < clicked.length; i++) {
    clicked[i] = allProducts[i].clicks;

    var liEl = document.createElement('li');
    liEl.textContent = clicked[i];
    ulEl.appendChild(liEl);
  }
}

function handleClick(event) {
  event.preventDefault();

  if (clickCounter >= 25){
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
    picContainer.removeEventListener('click', handleClick);
    chartButton.style.display = 'block';
    chartButton.addEventListener('click', buttonHandler);
    return alert(' you outa clicks futher Mucker');
  }

  if (event.target.id === 'pic-container') {
    return alert ( 'Click on the image!!!!! Not the background!!!!');
  }

  if (event.target.id === 'left') {
    allProducts[newArray[0]].clicks += 1;
  }

  if (event.target.id === 'center'){
    allProducts[newArray[1]].clicks += 1;
  }

  if (event.target.id === 'right'){
    allProducts[newArray[2]].clicks += 1;
  }

  // tally the click
  clickCounter += 1;
  showThreePics();
}

function buttonHandler(event) {
  event.preventDefault();
  renderList();
  drawChart();
  picContainer.removeEventListener('click', handleClick);
}

// Checks local storage or create products /////////////////////////////////////
if (localStorage.allProducts) {
    var retrieveStorage = localStorage.getItem('allProducts')
    allProducts = JSON.parse(retrieveStorage);
}
else {
  for (var i=0; i < names.length; i++) {
      new Product(names[i]);
  }

  localStorage.setItem('allProducts', JSON.stringify(allProducts));
}

  showThreePics();
  picContainer.addEventListener('click', handleClick);
