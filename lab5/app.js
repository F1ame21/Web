const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
window.addEventListener('load', () =>{
  try{
  if ((localStorage.getItem('todos')!==null)){
    let todos = JSON.parse(localStorage.getItem('todos'))
      todos.map(value =>{
        const li = document.createElement('li')
        const btn = document.createElement('button')
        
        li.className = 'li'
        li.textContent = value
       // localStorage.setItem('todos', JSON.stringify([...localStorage.getItem("todos"), value]) )
       
        btn.className = 'btn'
        btn.textContent = 'Delete'
      
        li.appendChild(btn)
        btn.addEventListener('click', (e) => { 
          let todos = JSON.parse(localStorage.getItem('todos'))
          let index = todos.indexOf(li.textContent.slice(0, -6))
          todos.splice(index, 1)
          console.log(todos);
          localStorage.setItem('todos', JSON.stringify(todos))
          result.removeChild(li)    
      })
        result.appendChild(li)

    }) 
  }
  }catch(e){
    localStorage.setItem('todos', JSON.stringify([]))
  }

})
btn.addEventListener('click', (e) => {
  if (input.value === '') return
  createDeleteElements(input.value)
  input.value = ''
})
// функция для добавления и удаления элемента. Она принимает значение
function createDeleteElements(value) {
  console.log(value)
  try{
  const li = document.createElement('li')
  const btn = document.createElement('button')
  
  li.className = 'li'
  li.textContent = value
 // localStorage.setItem('todos', JSON.stringify([...localStorage.getItem("todos"), value]) )
 
  btn.className = 'btn'
  btn.textContent = 'Delete'

  li.appendChild(btn)
  btn.addEventListener('click', (e) => { 
    let todos = JSON.parse(localStorage.getItem('todos'))
    let index = todos.indexOf(li.textContent.slice(0, -6))
    todos.splice(index, 1)
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos))
    result.removeChild(li)  
})
if ((localStorage.getItem('todos') === null) || (localStorage.getItem('todos') === "")){
  localStorage.setItem('todos', JSON.stringify([value]))
}
else{
  let todos = JSON.parse(localStorage.getItem('todos'))
  todos = [...todos, value]
  localStorage.setItem('todos', JSON.stringify(todos))

} 
  result.appendChild(li)}
  catch(e){
  localStorage.setItem('todos', JSON.stringify([]))
}
}
