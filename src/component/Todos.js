import React from 'react'
import {FaCheckDouble} from 'react-icons/fa'
export default function Todos({todos,markComplete}) {
  return (
    <div>
        <ul>
            {todos.map((todo)=>(

            <li key = {todo.id}>
                {todo.title} <span><FaCheckDouble onClick={()=>markComplete(todo.id)} /></span>
            </li>
            ))}
        </ul>
    </div>
  )
}
