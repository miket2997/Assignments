const clickButton = document.getElementById("btn");


clickButton.addEventListener("click", function(){
    if(localStorage.counter){
        localStorage.counter = Number(localStorage.counter) + 1;
    }else {
        localStorage.counter = 1;
    }
    const countGet = localStorage.getItem("counter");
    document.getElementById("number").textContent = countGet;
})