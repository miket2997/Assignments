const form = document.travel;


form.addEventListener("submit", function (event){
    event.preventDefault();
    let fName = form.firstName.value;
    let lName = form.lastName.value;
    let personAge = form.age.value;
    let maleFemale = form.gender.value;
    let destination = form.places.value;
    const checkedInputs = [];
    for(let i = 0; i < form.diet.length; i ++){
        if(form.diet[i].checked){
            checkedInputs.push(form.diet[i].value)
            
        }
    }
   
    
    alert("First Name: " + fName + "\nLast Name: " + lName + "\nAge: " + personAge + "\nGender: " + maleFemale + "\nLocation: " + destination + "\nDietary Restrictions: " + checkedInputs.join(", "))
})
