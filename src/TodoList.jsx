import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoList(props) {
  return (
    <nav className='flex justify-center min-w-fit text-slate-900 my-4 flex-wrap  border-2 border-black rounded-md font-bold font-mono hover:-translate-y-[0.300rem] hover:-translate-x-0.5 hover:bg-[#f4f4f0] hover:ease-in-out max-w-[90%] h-14 mx-auto sm:h-[4.6rem] md:h-[6rem] md:max-w-[100%] group hover:border-b-4 hover:border-r-4 hover:border-black'>
    <li className="list-none max-w-lg w-[70%] mx-0 my-auto text-xl break-words sm:text-2xl">
        {props.item}
    </li>
    <div className='mx-2 bg-[#d4cfc4] rounded-full border-2 border-black w-9 h-9 my-auto sm:w-11 sm:h-11 invisible group-hover:visible'>
            <RiDeleteBin6Line
            onClick={e=>{
            props.deleteItem(props.index)
            }}
            className="text-slate-900
            cursor-pointer hover:animate-wiggle hover:text-red-700 text-xl bg-[#d4cfc4] rounder-full sm:text-2xl mx-auto my-[0.39rem] sm:my-[0.47rem]"
            />
    </div>
    
    </nav>
  )
}

export default TodoList