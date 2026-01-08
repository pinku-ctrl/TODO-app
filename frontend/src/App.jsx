import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos] = useState([]);
  //* We will get rid of this since this is hitting our
  //* db infinite times as setTodos calls and rerender again and again.
  
  //* useEffect hook
  
  // fetch("http://localhost:3000/todos")
  //  .then(async function(res) {
  //    const json = await res.json();
  //    setTodos(json.todos);
  //  })
   
  return (
    <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>
    </div>
  )
}

export default App