

function getTodo(){
    axios.get("https://api.vschool.io/michaelt/todo")
        .then(response => createTodos(response.data))
        .catch(error => console.log(error))
}

getTodo();

const todoForm = document.todo


todoForm.addEventListener("submit", event => {
    event.preventDefault();

    const newTodo = {
        "title": todoForm.title.value,
        "description": todoForm.description.value,
        "price": todoForm.price.value,
        "imgUrl": todoForm.imgURL.value
    }

    todoForm.title.value = "";
    todoForm.description.value = "";
    todoForm.price.value = "";
    todoForm.imgURL.value = "";

    axios.post("https://api.vschool.io/michaelt/todo", newTodo)
        .then(getTodo)
        .catch(error => console.log(error))
})

createTodos = (data) => {
    const todoList = document.getElementById("list");
    clearList();
    for (let i = 0; i < data.length; i++){
        div = document.createElement("div");
        title = document.createElement("h2");
        price = document.createElement("h2");
        description = document.createElement("h2");
        image = document.createElement("img");

        checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.label = "todo";
        checkbox.checked = data[i].completed;

        price.textContent = data[i].price;
        title.textContent = data[i].title;
        description.textContent = data[i].description;
        image.src = data[i].imgUrl;

        div.className = data[i].completed;
        div.id = data[i]._id;

        div.appendChild(checkbox);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(description);
        div.appendChild(image);

        todoList.appendChild(div);
        todoList.style.borderBottom = "2px dashed black";
    }
    addButtons();
}

clearList = () => {
    const btns = document.getElementById("list");
    while (btns.firstChild){
        btns.removeChild(btns.firstChild);
    }
}

addButtons = () => {
    const buttons = document.getElementById("list").children;

    // add delete buttons
    for (let i = 0; i < buttons.length; i++){
       deleteButton = document.createElement("button");
       deleteButton.textContent = "Delete";
       deleteButton.className = "delete";
       buttons[i].appendChild(deleteButton);
    }


    


    // Event Listeners
    
    const deleteButtons = document.getElementsByClassName("delete");
    for (let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener("click", () => {
            const id = deleteButtons[i].parentElement.id;
            axios.delete(`https://api.vschool.io/michaelt/todo/${id}`)
                .then(getTodo)
                .catch(error => console.log(error))
         })
    }
    
    const checkboxes = document.getElementsByClassName("checkbox");
    for (let i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener("click", () => {
            const id = checkboxes[i].parentElement.id;
            if(checkboxes[i].checked === true) {
                axios.put(`https://api.vschool.io/michaelt/todo/${id}`, {"completed": true})
                    .then(getTodo)
                    .catch(error => console.log(error))
            } else {
                axios.put(`https://api.vschool.io/michaelt/todo/${id}`, {"completed": false})
                    .then(getData)
                    .catch(error => console.log(error))
            }
            
        })
    }
}