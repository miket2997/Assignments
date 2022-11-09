var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer",]
//console.log(officeItems[0]);
var count = 0

for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        count++;
    }
}
console.log(count);





var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]



  

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max. Let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in")
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in")
    };
}
    

var lights = false //false = lights off
var switches = [3, 1, 1] //true = lights on

for(var i = 0; i < switches.length; i++){
  for(var k = 0; k < switches[i]; k++){
    lights = !lights;
  }
}
console.log(lights);