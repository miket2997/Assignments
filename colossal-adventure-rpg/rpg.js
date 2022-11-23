const readline = require("readline-sync");
const name = readline.question("What is your name? ");




const enemies = ["Green Goblin", "Sandman", "Doc Oc"];

const awards = ["webs", "super strength", "health boost"];

const awardArray = [];


let yourHealth = 100;
let newInventory = awards[Math.floor(Math.random() * awards.length)];

readline.question("Good luck " + name + "!. Press the enter key to begin the game.")


let gameOver = false;

while(!gameOver){
    const wToWalk = readline.question("Enter 'w' to walk. ");
    const damageDone = Math.floor(Math.random() * (95-20) + 20);
    const enemy = enemies[Math.floor(enemies.length * Math.random())];
    let enemyHealth = 100;
    const enemyPower = Math.floor(Math.random() * (95 - 20) + 20);

    if(wToWalk === "w"){
        console.log("You are walking");
        let randomMath = Math.random();
        if(randomMath >= .3){
            console.log("You are safe")
        }else if(randomMath <= .3){
            console.log(enemy + " is here. ");
            while(yourHealth > 0 && enemyHealth > 0){
                const runAttack = readline.question("If you want to run, enter 'r.' If you want to attack, enter 'a.' If you want to see your info, enter 'p.'");
                if(runAttack === 'p'){
                    console.log(name + ", " + yourHealth + ", " + newInventory);
                }

                switch(runAttack){
                    case "a":
                        enemyHealth -= damageDone;
                        console.log("You attacked " + enemy + " and took " + damageDone + " points off his health. ");
            

                        yourHealth -= enemyPower;
                        console.log(enemy + " attacked you and took " + enemyPower + " points off your health. ");
                        

                        if(enemyHealth <= 0){
                            console.log("You killed " + enemy + ". You can pick up " + newInventory);
                            let inventory = Math.random();
                            if(inventory <= .3){
                                awardArray.push(newInventory);
                                
                            }
                        }else if (yourHealth <= 0){
                            console.log(enemy + " killed you. The game is over.");
                            gameOver = true;
                        }
                        break;
                        

                        case "r":
                            const escape = Math.random();
                            if(escape < .5){
                                console.log(enemy + " caught you and took " + enemyPower + " points from your health. ");
                            } else {
                                console.log("You managed to escape.");
                                
                            

                                if(yourHealth <= 0){
                                    console.log("You have died and the game is over. ");
                                    gameOver = true;
                                }
                                
                            }
                            break;
                }
            }
        }
    }
}