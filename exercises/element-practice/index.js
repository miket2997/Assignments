//var className = document.querySelector("#header").className += "new-class"
//console.log(className)

//document.querySelector("#header").classList.add("new-class")
//document.querySelector("#header").classList.toggle("another")
//console.log(querySelector("#header").className)
//document.querySelector("#header").classList.toggle("another")
//console.log(document.querySelector("#header").className)


document.querySelector("#header").classList.add("new-class")
console.log(document.querySelector("#header").className)
document.querySelector("#header").classList.toggle("another")
console.log(document.querySelector("#header").className)
document.querySelector("#header").classList.toggle("another")
console.log(document.querySelector("#header").className)

document.getElementById("teams").classList.add("first-class")
console.log(teams)
document.getElementById("teams").classList.toggle("second-class")
console.log(teams)

document.body.style.backgroundColor = "white"

var inputBox = document.getElementById("enter-text")
console.log(inputBox.value)
var textButton = document.getElementById("button").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello World" 
   
});





var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.append(newLi) 

var newParagraph = document.createElement("p")
newParagraph.textContent = "I love my dog"
document.body.append(newParagraph)
newParagraph.style.textAlign = "center"
newParagraph.style.fontSize = "40px"


var myList = document.getElementById("my-list")
myList.innerHTML += "<li>4</li>"

document.body.innerHTML += "<p id = 'pg'>Trent is Great</p>"
document.getElementById("pg").style.textAlign = "center"

var philliesPlayers = [
    "Bryce Harper",
    "Rhys Hoskins",
    "JT Realmuto",
    "Kyle Schwarber",
    "Nick Castellanos",
    "Zack Wheeler"

]
var playersList = document.getElementById("players")

for (var i = 0; i < philliesPlayers.length; i++) {
    playersList.innerHTML += "<li>" + philliesPlayers[i] + "</li>"




}


