var inputBox = document.getElementById("text-here")



var buttonClick = document.getElementById("button")
buttonClick.addEventListener("click", function(){
    var x = document.getElementById("text-here").value;
    console.log(value = x);
    document.getElementById("paragraph").innerHTML = x;
});
