import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoList(props) {
  return (
    <nav className='flex justify-center min-w-fit text-slate-900 my-2 flex-wrap '>
    <li className="list-none max-w-lg w-[70%] mx-0 my-4 text-xl break-words">
        {props.item}
        <hr className='' />
    </li>
    <span className='my-5 mx-2'>
            <RiDeleteBin6Line
            onClick={e=>{
            props.deleteItem(props.index)
            }}
            className="text-slate-900
            cursor-pointer hover:animate-wiggle hover:text-red-500 text-xl"
            />
    </span>
    
    </nav>
  )
}

export default TodoList