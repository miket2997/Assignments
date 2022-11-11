let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";

let alphabetSplit = alphabet.split("");
//console.log(alphabetSplit);

function forception(people, alphabetSplit){
    let nArry = [];
    for(let i = 0; i < people.length; i++){
        nArry.push(people[i] + ":");
        for(let j = 0; j < alphabetSplit.length; j++){
            nArry.push(alphabetSplit[j].toUpperCase())
        }
    } return nArry
}

console.log(forception(people, alphabetSplit));