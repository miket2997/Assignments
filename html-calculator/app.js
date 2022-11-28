const form = document["calculator"];

form.addEventListener("submit", function(){
    event.preventDefault();
    let num1 = form.firstNumber.value;
    form.firstNumber.value = " ";
    let num2 = form.secondNumber.value;
    form.secondNumber.value = " ";
    const h1 = document.createElement("h1");
    let sum = parseInt(num1) + parseInt(num2);
    h1.textContent = sum;
    document.getElementById("addition").append(h1);
})


const form2 = document["calculator2"];
form2.addEventListener("submit", function(){
    event.preventDefault();
    let number1 = form2.mFirst.value;
    form2.mFirst.value = " ";
    let number2 = form2.mSecond.value;
    form2.mSecond.value = " ";
    const secondH1 = document.createElement("h1");
    let product = number1 * number2;
    secondH1.textContent = product;
    document.getElementById("multiplication").append(secondH1);
})

const form3 = document["calc3"];
form3.addEventListener("submit", function(){
    event.preventDefault();
    let numOne = form3.sFirst.value;
    form3.sFirst.value = " ";
    let numTwo = form3.sSecond.value;
    form3.sSecond.value = " ";
    const thirdH1 = document.createElement("h1");
    let subtract = numOne - numTwo;
    thirdH1.textContent = subtract;
    document.getElementById("subtraction").append(thirdH1);
})





