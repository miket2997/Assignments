const readline = require('readline-sync');
const name = readline.question("What is your Name? ");

readline.question("Hello " + name + ", Welcome to Spiderman. Press enter to begin. ");

const enemies = ["Green goblin", "Sandman", "Venom"];
const awards = ["super strength", "fast healing", "heightened senses"];

var awardArray = [];
let yourHealthPoints = 100;
let newInventory = awards[Math.floor(Math.random() * awards.length)];


let game = false

while(!game){
    const damageDone = Math.floor(Math.random() * (20 - 10) + 10);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemyHealthPoints = 100;
    const enemyDamageDone = Math.floor(Math.random() * (20 - 10) + 10);

    const wToWalk = readline.question("Press w to walk. ");


    if(wToWalk === "w"){
    console.log("You are walking. ");
    let mathRandom = Math.random();
    if (mathRandom >= .25){
        console.log("You are safe for now.");
    } else if(mathRandom < .25){
        console.log("You have encountered " + enemy);
        while(yourHealthPoints > 0 && enemyHealthPoints > 0){
            const runAttack = readline.question("Enter 'a' if you want to attack. Enter 'r' if you want to run. To see your info, press 'p.'");
            if(runAttack === "a"){
                enemyHealthPoints -= damageDone;
                console.log("You have attacked " + enemy + " and hit him with " + damageDone + " damage points.");
                
                yourHealthPoints -= enemyDamageDone;
                console.log(enemy + " attacked you back for " + enemyDamageDone + "damage points.");
                if(enemyHealthPoints <= 0){
                    console.log("You killed " + enemy + " and can pick up " + newInventory);
                    let inventory = Math.random();
                    if(inventory < 1){
                        awardArray.push(newInventory);
                    }
                } else if(yourHealthPoints <= 0){
                    console.log("You have died. Game over.");
                    game = true;
                    break;
                }
                
            }else if(runAttack === "r"){
                const escape = Math.random();
                if(escape < .5){
                    console.log("You have been caught by " + enemy + " and he attacked you with " + enemyDamageDone + " damage points." );

                }else {
                    console.log("You have escaped for now.");
                    break;
                }

            } else if (runAttack === "p"){
                console.log(name + ", " + yourHealthPoints + ", " + newInventory);
            }
            
            }
        
        

    }
    }
}