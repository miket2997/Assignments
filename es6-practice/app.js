// Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work 
//(so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`
//John is the pet owner, and his name should be stored differently than the other names.


var name = "John"
var age = 101

function runForLoop(pets) {
    const petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name);
        pet.name = name;
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])




// Re-write this `.map()` using an arrow function:

//Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:`
//  will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

//function mapVegetables(arr) {
    //return arr.map(function(carrot) {
        //return { type: "carrot", name: carrot }
   // })
//}

const newArray = carrots.map(carrot => ({type: "carrot", name: carrot}))

console.log(newArray)




// Re-write this .filter() ’s callback function using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

//function filterForFriendly(arr) {
   // return arr.filter(function(person) {
      //  return person.friendly
   // })
//}

const filterArray = people.filter(person => person.friendly);
console.log(filterArray);



// Re-write the following functions to be arrow functions:

//function doMathSum(a, b) {
    //return a + b
//}

let sum = ((a, b) => a + b);
console.log(sum(3, 4));





//var produceProduct = function(a, b) {
    //return a * b
//}

const produce = ((a, b) => a * b);
console.log(produce(4, 5));



// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?

//firstName should default to "Jane"lastName should default to "Doe"age should default to 100


const printString = ((firstName, lastName, age) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
})
var firstName = "Jane";
var lastName = "Doe";
var age = 100;
console.log(printString("Kat", "Stark", 40));



// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.


const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 //function filterForDogs(arr) {
     //return animals.filter(animal => {
        // if (animal.type === "dog") {
           //  return true
        // } else {
            // return false
         //}
     //})
 //}

 const dogs = animals.filter(animal => animal.type == "dog");
 console.log(dogs);
 




 // Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
 // Hi Janice!

//Welcome to Hawaii.

//I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.


const templateLiteral = ((location, personName) => `Hi ${personName}! 

Welcome to ${location}.

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
)
console.log(templateLiteral("Hawaii", "Janice"));