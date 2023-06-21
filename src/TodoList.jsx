import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoList(props) {
  return (
    <nav className='flex justify-center text-gray-800 my-2 '>
    <li className="list-none max-w-lg w-[50%] mx-0 my-4 text-xl">
        {props.item}
        <hr className='' />
    </li>
    <span className='my-5'>
            <RiDeleteBin6Line
            onClick={e=>{
            props.deleteItem(props.index)
            }}
            className="text-slate-700
            cursor-pointer hover:animate-wiggle hover:text-red-500 text-xl"
            />
    </span>
    
    </nav>
  )
}

export default TodoList