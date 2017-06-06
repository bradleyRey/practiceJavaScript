const events = require('events');
const util  = require('util');


// PRACTICE USING THE setTimeout METHOD

setTimeout(function(){
  console.log("hello")
},2000);


// TIME THAT GOES FROM 10 THEN GOERS BACK DOWN TO 0 USING setInterval
time = 0
var timer = setInterval(function(){

  time+= 1;
  console.log("The time is: " + time)
  if(time === 10){
    clearInterval(timer)
     var timer2 = setInterval(function(){
      time -= 1
      console.log("The times going down to:" + time)
      if(time === 0){
        clearInterval(timer2)
      }
    },1000)
  }
},1000)


// Used to check file names and current directory locations
console.log("Currently at: " + __dirname)
console.log("Currently on: " + __filename)

// Using object template strongs (new to ES6)  and exporting modules

var triangle = function(b,h){
  area = (b*h)/2
  return (`The area of this triangle is ${area} cm2`);

}

var triangle2 = function(b,h){
  area = (b*h)/2
  return (`The area of this triangle is ${area} cm2`);

}
module.exports = {
  triangle:triangle,
  triangle2:triangle2

}

///// EVENT EMMITTER PRACTICE /////

var eventEmitter = new events.EventEmitter()

eventEmitter.on('shapeArea', function(b,h,w){
  var cube = b * h * w
  if (cube < 20){
    console.log(`This is a small cube!, with a volume of: ${cube}cm3`)
  }
  else {
    console.log(`This is a big cube!, with a volume of: ${cube}cm3`)
  };
});

eventEmitter.emit("shapeArea",10,40,1);

// PRACTICE WITH THE "util" module

var  Person = function(name,eyecolor,height){
    this.name = name;
    this.eyecolor = eyecolor;
    this.height = height;
}
// using inherits to inerit the event emmiter to be used to emit events on the object
util.inherits(Person,events.EventEmitter);

var bradley = new Person("bradley","brown","5''10");
var reece = new Person("reece","greed","5''11");
var chloe = new Person("chloe","blue","6''10");
// created an array to iterate throgh the objects using forEach
var people = [bradley,reece,chloe]

people.forEach(function(who){
    who.on("Introduce",function(){
        console.log(`Hello, my name is ${who.name} and I have ${who.eyecolor} eyes. I am also ${who.height}`);
    });
});

bradley.emit("Introduce");
