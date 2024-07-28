var country = ["Bangladesh", "India", "CA", "USA", 30, 50]

document.getElementById('demo').innerHTML = country;

// <!--OR-->
// var country = new Array  ("Bangladesh", "India", "CA", "USA", 30, 50)

// document.getElementById('demo').innerHTML = country;

// var country = ["Bangladesh", "India", "CA", "USA", 30, 50]

// document.getElementById('demo').innerHTML = country[0];


var country = ["Bangladesh", "India", "CA", "USA", 30, 50]
country[7] = "England";

document.getElementById('demo').innerHTML = country[7];
