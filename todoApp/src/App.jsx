import {useEffect, useState } from "react"
import { TodoContextProvider} from "./contexts/TodoContext"
import { TodoForm } from "./components/TodoForm"
import { TodoItem } from "./components/TodoItem"

function App() {
  const [todos, setTodos] = useState([])

  // defining methods for todo context for addtodo, delete todo, update and toggle
  const addTodo = (todo)=>{
    setTodos((prevTodos) => [{id: Date.now(), ...todo, completed: false}, ...prevTodos])
  }
  // deleteTodo
  const deleteTodo = (id)=>{
    setTodos((prevTodos)=> prevTodos.filter((prevTodo)=> prevTodo.id !== id))
  }

  // update Todo function
  const updateTodo = (id, todo)=>{
    setTodos((prevTodos)=> prevTodos.map((prevTodo)=>
      (prevTodo.id === id ? {...prevTodo, ...todo} : prevTodo))) 
  }

  // toggle stuff
  const toggleComplete = (id)=>{
    setTodos((prevTodos)=> prevTodos.map((prevTodo)=> // mapping each prevtodo from the previous todo array ->prevTodos
    (prevTodo.id === id)? {...prevTodo, completed: //...prevTodo is destructuring the prevTodo obj(keeping it same while changing check)
    !prevTodo.completed} : prevTodo)) //if id matches change the completed check to inverse
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos")) 
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=> (

              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>

            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
