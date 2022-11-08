const readline = require("readline-sync");
var num1 = readline.questionInt("Please enter your first number: ");
var num2 = readline.questionInt("Please enter your second number: ");
var operator = readline.question("Please enter the operation to perform: add, sub, mul, div ");


//Add 
function addTwoNumbers(num1, num2){
    return num1 + num2;
}


//Subtract 
function subtractTwoNumbers(num1, num2){
    return num1 - num2;
}


// multiply

function multiplyTwoNumbers(num1, num2){
    return num1 * num2;
}


//divide

function divideTwoNumbers(num1, num2){
    return num1 / num2;
}




function nodeCalculator(num1, num2, operator){
    if(operator === "add"){
        console.log("when you add the first number: " + num1 + " to the second number: " + num2 + " the result is: " +
        addTwoNumbers(num1, num2));
    }
    else if(operator === "sub"){
        console.log("when you subtract the first number: " + num1 + " with the second number: " + num2 + " the result is: " +
        subtractTwoNumbers(num1, num2));
    }
    else if(operator === "mul"){
        console.log("when you multiply the first numer: " + num1 + " by the second number: " + num2 + " the result is: " + 
        multiplyTwoNumbers(num1, num2));
    }
    else if(operator === "div"){
        console.log("when you divide the first number: " + num1 + " by the second number: " + num2 + " the result is: " + 
        divideTwoNumbers(num1, num2));
    }
}

nodeCalculator(num1, num2, operator);