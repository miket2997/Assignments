var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];
const result = peopleArray.filter(function(num){
    if(num.age > 18){
         return num
     }
})

//const sorted = result.sort((a, b) => a.lastName.localeCompare(b.lastName));
//console.log(sorted)

const sorted = result.sort(function(a, b){
    return a.lastName.localeCompare(b.lastName)
})
console.log(sorted);


const mapped = sorted.map(function(arr){
    return("<li>" + arr.firstName + " " + arr.lastName + " is " + arr.age + "</li>")
})
console.log(mapped)