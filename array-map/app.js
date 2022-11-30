
//Make an array of numbers that are doubles of the first array

const firstArray = [2, 4, 6, 8];

//const result = firstArray.map(function(num){
    //return(num * 2);
//})
//console.log(result);


const doubleArray = firstArray.map(douleNumbers);

function douleNumbers(num){
    return num * 2;
}
console.log(doubleArray)





//Take an array of numbers and make them strings


const secondArray = [16, 70, 400, 800];

const strings = secondArray.map(stringItUp);

function stringItUp(num){
    return String(num)
}
console.log(strings);



//Capitalize the first letter of each name and make the rest of the characters lowercase


const thirdArray = ["john", "JACOB", "jinGleHeimer", "schmidt"];

//const capitalize = thirdArray.map(capitalizeWords);

function capitalizeWords(arr) {
    return arr.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  }

  console.log(capitalizeWords(thirdArray))


  //Make an array of strings of the names


  const fourthArray = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

const names = fourthArray.map(namesOnly);

function namesOnly(arr){
    return arr.name
}
console.log(names);



//Make an array of strings of the names saying whether or not they can go to The Matrix


const fifthArray = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

const allowed = fifthArray.map(makeStrings);

function makeStrings(arr){
    if(arr.age > 17){
        return arr.name + " can see the Matrix." 
    }else{
        return arr.name + " is underage."
    }
}

console.log(allowed);



// Make an array of the names in h1s, and the ages in h2s



const lastArray = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

const namesAges = lastArray.map(readyToPutInTheDom);

function readyToPutInTheDom(arr){
    return "<h1>" +arr.name + "</h1>" + "<h2>" +arr.age + "</h2>"
}
console.log(namesAges);
