const form = document["my-form"];
form.addEventListener("submit", function(event){
    event.preventDefault()
    alert("it works")

    const fName = form.firstName.value;
    const lName = form.lastName.value;
    form.lastName.value = "";
    form.firstName.value = "";

    console.log(fName + " " + lName)

    const h1 = document.createElement("h1");
    h1.textContent = fName + " " + lName
    document.getElementsByTagName("body")[0].append(h1);
});


const thisForm = document.myForm
thisForm.addEventListener("submit",(event) =>{
    event.preventDefault()
    //console.log(thisForm.yesOrNo.value)
    //console.log(thisForm.entertainment)

    const checkedInputs = []
    for(let i = 0; i<thisForm.entertainment.length; i++){
        if(thisForm.entertainment[i].checked){
            checkedInputs.push(thisForm.entertainment[i].value)
        }
    }
    //console.log(checkedInputs)
    console.log(thisForm.city.value)
})




