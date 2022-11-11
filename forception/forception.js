var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var alphabetSplit = alphabet.split("");
//console.log(alphabetSplit);


for(var i = 0; i < people.length; i++){
    for(var j = 0; j < alphabetSplit[i].length; j++)
   var concated = people.concat(alphabetSplit);
    console.log(concated);
}