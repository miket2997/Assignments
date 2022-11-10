var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


var popped = vegetables.pop();
//console.log(popped);
//console.log(vegetables);


var shifted = fruit.shift();
//console.log(shifted);
//console.log(fruit);


var index = fruit.indexOf("orange");
//console.log(index);
fruit.push(index);
//console.log(fruit);


//console.log(vegetables.length);

vegetables.push(vegetables.length);
//console.log(vegetables);


var food = fruit.concat(vegetables);
//console.log(food);

var removed = food.splice(4, 2);
//console.log(removed);
//console.log(food);

food.reverse();
//console.log(food);

var joined = food.join();
console.log(joined);

