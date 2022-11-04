const square = document.getElementById("square");

square.addEventListener("mouseover", function() {
    document.getElementById("square").style.backgroundColor = "blue";
})


square.addEventListener("mousedown", function() {
    document.getElementById("square").style.backgroundColor = "red";
})

square.addEventListener("mouseup", function () {
    document.getElementById("square").style.backgroundColor = "yellow";
})

square.addEventListener("dblclick", function() {
    document.getElementById("square").style.backgroundColor = "green";
})

document.body.addEventListener("wheel", function() {
    square.style.backgroundColor = "orange";
})

document.addEventListener("keydown", function(event) {
    if (event.code == "KeyB") {
        document.getElementById("square").style.backgroundColor = "blue";
        
    } else if (event.code == "KeyR") {
        document.getElementById("square").style.backgroundColor = "red"
    } else if (event.code == "KeyY") {
        document.getElementById("square").style.backgroundColor = "yellow"
    } else if (event.code == "KeyG") {
        document.getElementById("square").style.backgroundColor = "green"
    } else if (event.code == "KeyO") {
        document.getElementById("square").style.backgroundColor = "orange"
    }
})



