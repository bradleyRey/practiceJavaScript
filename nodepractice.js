const events = require('events');



setTimeout(function(){
  console.log("hello")
},2000);


// TIME THAT GOES FROM 10 THEN GOERS BACK DOWN TO 0
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



console.log("Currently at: " + __dirname)
console.log("Currently on: " + __filename)

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


var emmiter2  = new events.EventEmitter();

emmiter2.on("hello", function(){
    console.log("Hello")
});

emmiter2.emit("hello");
