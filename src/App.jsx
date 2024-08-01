import {useEffect, useState} from "react"
import {NewTodoForm} from  "./NewTodoForm"
import "./styles.css"
import {TodoList} from "./TodoList"

export default function App()
{
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(todos))
  }, [todos])
  function addTodo(title)
  {
    setTodos(currentTodos => {
        return [
            ...currentTodos, 
            {id: crypto.randomUUID(), title, completed: 
            false},
        ]
    })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id)
        {
          return {...todo, completed} 
          //everytime changing your state, you're creating 
          //a new branch instead of mutating the state
        }

        return todo
      })
    })
  }

function deleteTodo(id)
{
  setTodos(curentTodos => {
    //keep all the IDs except the one I want to remove
    return curentTodos.filter(todo => todo.id !== id)
  })
}

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} 
      deleteTodo = {deleteTodo}/>
    </>
  )
  
}
