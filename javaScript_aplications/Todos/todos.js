var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list-todos') || [])

function renderTodos(){

   listElement.innerHTML = ""
   for(todo of todos){
      var createLi = document.createElement('li')
      var createTextList = document.createTextNode(todo)

      var createButtonExcluir = document.createElement('a')
      createButtonExcluir.setAttribute('href', '#')

      var pos = todos.indexOf(todo)
      createButtonExcluir.setAttribute('onclick', 'deleteTodo('+pos+')')
      var createButtonText = document.createTextNode('Excluir')

      

      createButtonExcluir.appendChild(createButtonText)
      listElement.appendChild(createLi)
      listElement.appendChild(createButtonExcluir)
      createLi.appendChild(createTextList)
   }
}

renderTodos()

function addTodo(){
   var inputValue = inputElement.value

   todos.push(inputValue)
   inputElement.value = ""

   renderTodos()
   saveStorage()
}

buttonElement.onclick = addTodo

function deleteTodo(pos){
   todos.splice(pos,1)

   renderTodos()
   saveStorage()
}

function saveStorage(){
   localStorage.setItem('list-todos', JSON.stringify(todos))
}