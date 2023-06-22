import React from 'react'
import { RxCross2 } from "react-icons/rx";

function TodoList(props) {
  return (
    <nav className='grid grid-cols-2 border-2 border-slate-900 rounded-lg max-w-[80%] mx-auto my-4 last:mb-8 hover:bg-[#f4f4f0] hover:-translate-y-1.5 hover:-translate-x-1.5 hover:border-b-4 hover:border-r-4 relative group'>
    <li className="list-none my-2 ml-4  break-words col-span-2 font-mono max-w-[75%]">
        {props.item}
    </li>
    <div className=' border-2 border-slate-900 rounded-full grid place-items-center my-auto mr-2 mx-auto w-6 h-6 col-span-1 grid-flow-col-dense bg-[#d4cfc4] absolute right-0 bottom-2 invisible group-hover:visible'>
            <RxCross2
            onClick={e=>{
            props.deleteItem(props.index)
            }}
            className="hover:animate-wiggle hover:text-red-600 text-sm font-black"
            />
    </div>
    
    </nav>
  )
}

export default TodoList