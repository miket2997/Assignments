const form = document["pestControl"];

function baddiePrice(num1, num2){
    return(num1 * num2);
}


function totalCost(event){
    event.preventDefault();

    let goom = baddiePrice(form.goombas.value, 5);
    let bomb = baddiePrice(form.bob.value, 7);
    let cheepcheep = baddiePrice(form.cheep.value, 11);

    let sum = (goom + bomb + cheepcheep);

    const p = document.createElement("p");
    p.textContent = "The total cost is " + sum + " dollars.";
    document.getElementsByTagName("form")[0].append(p);

    form.goombas.value = " ";
    form.bob.value = " ";
    form.cheep.value = " ";
}
form.addEventListener("submit", totalCost);

