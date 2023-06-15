import logo from './logo.svg';
import './App.css';
import Todos from './component/Todos';
import Form from './component/Form';
import React,{useEffect,useState} from 'react'
function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    const localTodos = localStorage.getItem("todos")
    console.log('storage',localStorage)

    if(localTodos){
      console.log('local',localTodos)
      setTodos(JSON.parse(localTodos))
      console.log('json',JSON.parse(localTodos))
    }
  },[])
  const addTodos = todo =>{
    setTodos([...todos,todo])
  }
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])
  const markComplete =(id)=>{
    setTodos(todos.filter(todo=> todo.id !== id))
  }
  return (
          <>
            <h1>Todo List</h1>
            <Todos todos={todos} markComplete={markComplete}/>
            <Form addTodos={addTodos}/>
          </>
  );
}

export default App;
