import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoList(props) {
  return (
    <nav className='flex justify-center bg-slate-800 text-white my-1'>
    <li className="list-none max-w-lg w-[50%] mx-0 my-4">
        {props.item}
    </li>
    <span className='my-5'>
            <RiDeleteBin6Line
            onClick={e=>{
            props.deleteItem(props.index)
            }}
            className="cursor-pointer hover:animate-wiggle hover:text-red-500 hover:text-lg ease-in-out"
            />
    </span>
    
    </nav>
  )
}

export default TodoList