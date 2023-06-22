import React from 'react'
import { RxCross2 } from "react-icons/rx";

function TodoList(props) {
  return (
    <nav className='grid grid-cols-3 border-2 border-slate-900 rounded-lg max-w-[80%] mx-auto my-4 last:mb-8 hover:bg-[#f4f4f0] hover:-translate-y-1.5 hover:-translate-x-1.5 hover:border-b-4 hover:border-r-4'>
    <li className="list-none my-2 ml-4 break-words col-span-2 font-mono ">
        {props.item}
    </li>
    <div className=' border-2 border-slate-900 rounded-full grid place-items-center my-auto mr-5 ml-5 mx-auto w-6 h-6 col-span-1 grid-flow-col-dense bg-[#d4cfc4]'>
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