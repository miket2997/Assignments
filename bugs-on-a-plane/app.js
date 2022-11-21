//var form = document.getElementByID("airlineForm");
//var submit = document.getElementByID("submit");
//var query = document.querySelector;

const wholeForm = document.getElementById("airlineForm");
const submitButton = document.getElementById("submit");

//submitButton.addEventListener("click", function (){
    //console.log("works");
//})

function formAlert() {
    var firstName = wholeForm.elements["firstName"].value;
    var lastName = wholeForm.elements["lastName"].value;
    var age = wholeForm.elements["age"].value;
    var gender = wholeForm.elements["gender"].value;
    var location = wholeForm.elements["travelLocation"].value;
    var diet = [];
    if (wholeForm.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (wholeForm.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (wholeForm.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submitButton.addEventListener("click", formAlert);


submitButton.style.backgroundColor = "blue"
submitButton.style.color = "white"