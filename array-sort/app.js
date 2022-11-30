// Sort an array from smallest number to largest

const arrayOne = [1, 3, 5, 2, 90, 20];

arrayOne.sort(function(a, b){
    return a - b
    })
console.log(arrayOne);


// Sort an array from largest number to smallest

const arrayTwo = [1, 3, 5, 2, 90, 20];

arrayTwo.sort(function(a, b){
    return b - a
})
console.log(arrayTwo);



//Sort an array from shortest string to longest


const arrayThree = ["dog", "wolf", "by", "family", "eaten"];

arrayThree.sort(function(a, b){
    return a.length - b.length
})
console.log(arrayThree);


// Sort an array alphabetically

arrayFour = ["dog", "wolf", "by", "family", "eaten"];

const alphabetical = arrayFour.sort();
console.log(alphabetical);


// Sort the objects in the array by age


const lastArray = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];


lastArray.sort(function(a, b){
    return a.age - b.age
})
console.log(lastArray);