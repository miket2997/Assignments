 const itemForm = document.addItem;
 itemForm.addEventListener("submit", function(event){
    event.preventDefault()
    //alert("it works")

    const shoppingItem = itemForm.title.value
    //console.log(shoppingItem)
        itemForm.title.value = ""

    //console.log(shoppingItem)

    const div = document.createElement("li");
        div.textContent = shoppingItem
        document.getElementsByTagName("ul")[0].append(div)
        div.className = "newItem"

    const editButton = document.createElement("button");
        editButton.innerHTML =  "edit";
        div.appendChild(editButton);

    editButton.addEventListener("click", function(event){
        //console.log("hi");
        var editBox = document.createElement("input")
        editBox.innerHTML = "<input type = text";
        editBox.value = shoppingItem
        div.appendChild(editBox);
        editButton.innerHTML = "save"
    })

    

    const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "X";
        div.appendChild(deleteButton);

    deleteButton.addEventListener("click", function(event){
        //console.log("hello")
        div.remove();

 
    })

    



 })
 