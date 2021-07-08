
const input = document.querySelector('.form-control')
console.log(input);
const btn = document.querySelector('.btn')
console.log(btn);
const listGroup = document.querySelector('.list-group')
console.log(listGroup);


//Получение данных localStorage и преобразование обратно в js
const todo = JSON.parse(localStorage.getItem('todo'));

//Если в переменной todo что-то есть мы его храним а в противном случае мы храним пустой маасив
const todoList = todo ? todo : [];
const checkList = [];

//Вешаем клик на переменную btn
btn.addEventListener('click', function() {
    //Добавляем новый элемент в массив todo-list
    todoList.push({
        value: input.value,
        checked: false
    });
    //Преобразуем в JSON массив todo-list
    const stringTodo = JSON.stringify(todoList)
    console.log(todoList);
    console.log(stringTodo);
    //Помещаем нашу строку в localStorage
    localStorage.setItem('todo', stringTodo)
    //Чтобы добавить новый элемент из input
    listGroup.insertAdjacentHTML('beforeend', `
    <li class="list-group-item list-group-item-${(todoList.length - 1) % 2 === 0 ? 'warning' : 'info'}">
      <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
          <label class="form-check-label" for="flexCheckChecked">
            ${input.value}
          </label>
      </div>
    </li>
`)
    input.value = ""
})


function drawList() {
    //чтобы перебирать массив 
    for(let i = 0; i < todoList.length; i++){
        //Чтобы добавить элемент из инпута
        listGroup.insertAdjacentHTML('beforeend', `
        <li class="list-group-item list-group-item-${i % 2 === 0 ? 'warning' : 'info' }">
          <div class="form-check">
              <input class="form-check-input" type="checkbox" ${todoList[i].checked ? 'checked' : ''} value="" id="flexCheckChecked">
              <label class="form-check-label ${todoList[i].checked ? 'checkedText' : ''}" for="flexCheckChecked">
                ${todoList[i].value}
              </label>
          </div>
        </li>
    `)
    }
    const arr = document.querySelectorAll('.form-check-input')
    for(let i = 0; i < arr.length; i++){
        checkList.push(arr[i])
    }
    console.log(checkList);
    setClick()
}
function setClick() {
    for (let i = 0; i < checkList.length; i++) {
      checkList[i].addEventListener('click', function(){
        setDone(i)
      })
    }
}

function setDone(index) {
    todoList[index].checked = true
    console.log(todoList[index]);
}

drawList()










// //new todo-list

// let enterButton = document.getElementById("enter");
// let input = document.getElementById("userInput");
// let ul = document.querySelector("ul");
// let item = document.getElementsByTagName("li");
// function inputLength(){
//     return input.value.length
// }
// function listLength(){
//     return item.length
// }
// function createListElement() {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value))
//     ul.appendChild(li)
//     input.value = "";
//     function crossOut() {
//         li.classList.toggle("done")
//     }
//     li.addEventListener("click",crossOut)
//     let dBtn = document.createElement("button")
//     dBtn.appendChild(document.createTextNode("X"));
//     li.appendChild(dBtn);
//     dBtn.addEventListener("click", deleteListItem);
//     function deleteListItem(){
//         li.classList.add("delete")
//     }
// }
// function addListAfterClick(){
//     if (inputLength() > 0) { 
//         createListElement()
//     }
// }
// function addListAfterKeypress(event) {
//     if (inputLength() > 0 && event.which ===13) { 
//         createListElement()
//     }
// }

// enterButton.addEventListener("click",addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress)