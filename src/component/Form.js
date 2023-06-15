import React,{useState,useEffect} from 'react'
import {} from "reactstrap"
import {v4} from 'uuid'
export default function Form({addTodos}) {
    const [todo, settodo] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(todo === ''){
            return alert("please fill some todo")
        }
        const todos = {
            title : todo,
            id: v4()
        }
        addTodos(todos)
        settodo("")
    }
  return (
    <div>
       <form action="" onSubmit={handleSubmit}>
        <input type="text" name="todo" id="todo" placeholder='Enter A Todo String' value={todo}  onChange={e=>settodo(e.target.value)}/>
        <button>Submit</button>
       </form>
    </div>
  )
}
