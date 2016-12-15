'use strict'
var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var chartButton = document.getElementById('chart-button');
var names = ['babysweep', 'bananacutter','boots','chair','cthulhu','dog-duck', 'dragon','ipadtpholder', 'meatballgum', 'pen', 'pet-sweep', 'r2d2luggage', 'scissors', 'shark', 'tauntaun', 'toastercoffee', 'unicorn', 'usb-page3', 'water-can', 'wine-glass'];


// Global variables
// -----------------
var allProducts = [];
var newArray = [];
var oldArray = [];
var clickCounter = 1;
var clicked = [];
var viewed = [];



var ctx = document.getElementById('mychart');
function drawChart (){
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



// Constructor
// -----------------
function Product(name) {
  this.name = name;
  this.filepath = 'images/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

for(var i = 0; i < names.length; i++) {
  new Product(names[i]);
}

function rand() {
  return Math.floor(Math.random() * allProducts.length);
  // generate a random number between 0 and allProducts.length
}

function makeArrayOfThreeNumbers() {
  oldArray[0] = newArray[0];
  oldArray[1] = newArray[1];
  oldArray[2] = newArray[2];

  newArray[0] = rand();
  while (newArray[0] === oldArray[0] || newArray[0] === oldArray[1] || newArray[0] === oldArray[2]){
    // console.log(newArray, 'broken value in first position of new array');
    newArray[0] = rand();
    // console.log('fixed');
  }

  newArray[1] = rand();

  while (newArray[1] === newArray[0] || newArray[1] === oldArray[0] || newArray[1] === oldArray[1] || newArray[1] === oldArray[2]){
    // console.log(newArray, 'old broken array');
    newArray[1] = rand();
    // console.log('caught dupes between 1st and 2nd numbers');
  }

  newArray[2] = rand();
  while (newArray[2] === newArray[0] || newArray[2] === newArray[1] || newArray[2] === oldArray[0] || newArray[2] === oldArray[1] || newArray[2] === oldArray[2]){
    // console.log(newArray, 'old broken array');
    newArray[2] = rand();
    // console.log('caught a dupe with the 3rd number');
  }
}

function showThreePics() {
  makeArrayOfThreeNumbers();
  left.src = allProducts[newArray[0]].filepath;
  allProducts[newArray[0]].views += 1;
  center.src = allProducts[newArray[1]].filepath;
  allProducts[newArray[1]].views += 1;
  right.src = allProducts[newArray[2]].filepath;
  allProducts[newArray[2]].views += 1;
}

function renderList() {
  for (var i = 0; i < allProducts.length; i++){
    viewed[i] = allProducts[i].views;
    clicked[i] = allProducts[i].clicks;
  }
  // display a list of items and total clicks/views
};

function handleClick(event) {
  event.preventDefault();
  //id who was clicked
  // console.log(event.target.src, 'was clicked');
  // alert for clicks not on images
  if(clickCounter >= 25){
    picContainer.removeEventListener('click', handleClick);
    chartButton.style.display = 'block';
    chartButton.addEventListener('click', buttonHandler);
    return alert(' you outa clicks futha mucker');

  }

  if (event.target.id === 'pic-container'){
    return alert ('CLICK THE DAMN PHOTO');
  allProducts[newArray[0]].clicks += 1;
};
if(event.target.id === 'left'){
  allProducts[newArray[0]].clicks +=1;
};
if(event.target.id === 'center'){
allProducts[newArray[1]].clicks += 1;
};
if(event.target.id === 'right'){
allProducts[newArray[2]].clicks += 1;
};
  // tally the click
  clickCounter += 1;
  showThreePics();

}
function buttonHandler(event){
 event.preventDefault();
  renderList();
  drawChart();
  picContainer.removeEventListener('click', handleClick);

  }


/////////////////////////////////////////////////////////////////



    showThreePics();
    picContainer.addEventListener('click', handleClick);
