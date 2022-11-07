const h1 = document.createElement("h1");
h1.textContent = "JavaScript Made This!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("sub");
subTitle.innerHTML = "<span class = 'name'>Mike</span> wrote the JavaScript";
document.getElementById("header").appendChild(subTitle);
subTitle.className = "header";

var messages = document.getElementsByClassName("message");

messages[0].textContent = "nice day";
messages[1].textContent = "Be safe";
messages[2].textContent = "Looking forward to it";
messages[3].textContent = "Fun weekend";

const clearButton = document.getElementById("clear-button");
const dltMsg = document.querySelector(".messages");

clearButton.addEventListener("click", () => {
    dltMsg.textContent = "";
})

const dropDown = document.getElementById("theme-drop-down");
const messageText = document.querySelector(".messages");



for (let i = 0; i < messages.length; i++){
    messages[i].classList.toggle("theme-two");
}


dropDown.onchange = function() {
    if(dropDown.value == "theme-one"){
        messageText.style.color = "brown";
        document.querySelector(".message.left").style.backgroundColor = "blue";
        document.querySelector(".message.right").style.backgroundColor = "blue";
    } else if (dropDown.value == "theme-two"){
        messageText.style.color = "red";
       document.querySelector(".message.left").style.backgroundColor = "black";
        document.querySelector(".message.right").style.backgroundColor = "black";
    }

}    

    