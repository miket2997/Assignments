
//highest number
const numbers = [4, 27, 97, 456, 12];
numbers.sort(function(a, b){return b - a});
console.log(numbers[0]);



// certain character present (!)

const characters = ["$hello!", "%%^%%", "test!"];
var newList = [];
for(let i = 0; i < characters.length; i++){
    if(characters[i].includes("!"))
    newList.push(characters[i])
}


console.log(newList);



//divisible by 2



myFunction(16, 8);

function myFunction(a, b) {
    if(a % b == 0){
        console.log("true")
    }else
    console.log("false")
}