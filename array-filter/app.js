//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const arrayOne = [3, 6, 8, 2];

const fiveOVer= arrayOne.filter(fiveAndGreaterOnly);

function fiveAndGreaterOnly(num){
    if(num >= 5){
        return num
    }
}
console.log(fiveOVer);


// Given an array of numbers, return a new array that only includes the even numbers.


const arrayTwo = [3, 6, 8, 5];

const even = arrayTwo.filter(evensOnly);

function evensOnly(num){
    if(num % 2 === 0){
        return num
    }
}

console.log(even);


// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length


const arrayThree = ["dog", "wolf", "by", "family", "eaten", "camping"];

const characterFilter = arrayThree.filter(fiveCharactersOrFewerOnly);

function fiveCharactersOrFewerOnly(arr){
    if(arr.length <= 5){
        return arr
    }
}
console.log(characterFilter);



// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.


const arrayFour = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

const membershipCheck = arrayFour.filter(peopleWhoBelongToTheIlluminati);

function peopleWhoBelongToTheIlluminati(arr){
    if(arr.member == true){
        return arr
    }
}

console.log(membershipCheck);


// Make a filtered list of all the people who are old enough to see The Matrix (older than 18)


const lastArray = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];


const matrix = lastArray.filter(ofAge);

function ofAge(arr){
    if(arr.age >= 18){
        return arr
    }
}

console.log(matrix);