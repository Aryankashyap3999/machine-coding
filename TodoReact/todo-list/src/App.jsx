import { useState } from 'react'
import './App.css'
import { InputElement } from './inputElement'
import { ShowTodos } from './ShowTodos';

function App() {

  const [todos, setTodos] = useState(["Read Book"]);

  function addTodo(text) {
    setTodos([...todos, text]);
  }

  function removeTodo(idx) {
    setTodos(todos.filter((_, i) => i !== idx));
  }

  return (
    <>
     <h1>My Todo List</h1>
     <br />
     <InputElement addTodo={addTodo}/>
     <br />
     <ShowTodos todos={todos} removeTodo={removeTodo}/>
    </>
  )
}

export default App
