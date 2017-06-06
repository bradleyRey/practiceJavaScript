//alert('helooooo');

/*var  hello = "hello biatch"
alert(hello);
*/


/* FOR LOOPS

for (i = 0 ; i < 10 ; i++) {

    if (i === 5 || i === 3){
        continue;
    }
    console.log(i);

    if(i===7){
        break  ;
    }

}
console.log("loop broken at iteration: " + i)
*/
/* INITIALISING A FUNCTION
function findTheMean(a,b,c){

    var average = a + b + c / 3;
    console.log(average);
    return average;
}

var finalResult = findTheMean(3,7,4);
console.log("The final average of the numbers is: " + finalResult);

*/
const prompt = require("prompt");
var shapes = require('./nodepractice');
var myArray1 = []

myArray1[0] = "yolo"

console.log("ARRAY : " +  myArray1)

var myArray2 = ["hello","goodbye",21,true];

myArray2.push("wanka")
var test = "27"
myArray2.push(test)
console.log(myArray2)
 myArray2.splice(2,1,"dickhead","nobhead")
console.log("ARRAY 2: " + myArray2);

var myArray3 = new Array(5);

for(i = 0; i < myArray2.length; i++) {
    myArray3.push(1)

}
console.log("ARRRAY 3: " +  myArray3)

///// OBJECTS ///////
///MAKING  A NEW CAR ///
var newCar = new Object();

newCar.maxSpeed = 200;
newCar.breakHorsePower = 150;

newCar.drive = function(){
    console.log("The car is driving......")
}

newCar.left = function(){
    console.log("The car is turning left");
}

var perfectWoman = {
    tits: "DD",
    hair: "brunette",
    height: "5''3"
}
console.log(perfectWoman.tits)


 /// Tutorial for "this"

 var myObject = {
     name: "Bradley",
     secondName: "Reynolds - Price",
     DOB : function() {
          prompt.start();
          prompt.get(["DOB"], function(err, result) {
              console.log("Your date of birth is: " + result.DOB);
              if (result === NaN){
                  console.log(err)}
          });
      },
       testThis: function(){
           console.log("My name is: " + this.name + " " + this.secondName);
       }
 };

//myObject.DOB()
myObject.DOB()

/// Constructor function ////
console.log("This is for the practice of CONSTRUCTOR FUNCTIONS")
var DreamCar = function(maxSpeed, driver, model) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.model =  model;
    this.drive = function(s,t){
        console.log("My dream car is driving, hell ya!");
        distance = s *t;
        console.log("The car has driven a total of " + distance + " miles")
    }
    this.driverName = function(){
        console.log("The person at the wheel of the dream car is Mr." + this.driver);
    };

    this.modelName = function(){
        console.log("The model of this car is a " + this.model)
    }
}


var car = new DreamCar(250,"Bradley", "Bugatti");
var car2 = new DreamCar(200, "Bradley", "Ferarri");
var car3 = new DreamCar(190, "Bradley", "Lambo");
var car4 = new DreamCar(180, "Bradley", "Aston Martin");

car2.driver;
car3.modelName();
car4.drive(30,10);


/// The DATE object ///

console.log("This is for the DATE OBJECT")

var date = new Date();

console.log("Tne date and time is : " +  date);

var dob = new Date(1996,4,26, 7, 24, 40);
var dob2 = new Date(1996,4,26, 7, 24, 40);

console.log("I was born on: " + dob);

console.log(dob.getDay())
/// USE THIS TO COMPARE TIMES!
if(dob.getTime() == dob2.getTime()) {
    console.log("These two perople were born at the exact same time!")
}
else {
    console.log("these two people were not born at the same time!")
}
console.log("There have been " + dob.getTime() + " milliseconds since jan 1st 1970");

console.log(shapes.triangle(200,6))
console.log(shapes.triangle2(150,56))
