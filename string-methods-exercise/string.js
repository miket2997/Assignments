var helloworld = "helloworld";
var allUpperCase = helloworld.toUpperCase();
//console.log(allUpperCase);

var allLowerCase = allUpperCase.toLowerCase();
//console.log(allLowerCase);

var combined = allUpperCase.concat(allLowerCase);
//console.log(combined);

var helloWorld = "hello world";
var fullLength = helloWorld.length;
var halfLength = Math.floor(fullLength / 2);
//console.log(halfLength);

var firstHalf = helloWorld.slice(0, 5);
//console.log(firstHalf);

var secondHalf = helloWorld.slice(6);
//console.log(secondHalf);

var fUpper = firstHalf.toUpperCase();
var sLower = secondHalf.toLowerCase();
//console.log(fUpper, sLower);


var lastString = "this is a practice";

var spaces = lastString.split(' ');
//console.log(spaces);
var arry = [];

for (var i = 0; i < spaces.length; i++){
    arry.push(spaces[i].charAt(0).toUpperCase() + spaces[i].slice(1))
}


var joined = arry.join(" ");
//console.log(joined);