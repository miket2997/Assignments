const readline = require("readline-sync");
const name = readline.question("What is your name? ");


let gameOver = false;
let haveKey = false;



while(!gameOver){
    let response = readline.question(`Hello ${name}, The goal is to escape the room. Choose from the following options: 
    A. Put hand in the hole. 
    B. Find the key. 
    C. Open the door `)
    if(response === "A"){
        console.log("Sorry but your character has died.");
        gameOver = true;
        if(gameOver == true){
            console.log("You lost");
        }
    } else if(response === "B"){
        console.log("You have found the key. However, the door remains closed.");
        haveKey = true;
    } else if(response === "C"){
        console.log("You need the key to open the door.")
        if(response === "C" && haveKey === true){
            console.log("The door is open. You have escaped.");
            gameOver = true
        }
    } 
    }


