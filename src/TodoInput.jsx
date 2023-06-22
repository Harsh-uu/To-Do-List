import React from 'react'
import { useState } from 'react'
import { RiAddFill, RiCheckLine } from "react-icons/ri";
function ToDoInput(props) {
    const [InputText, setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(InputText)
            setInputText("")
        }
    }
    return (
    <div className="max-w-xl w-[80%] mx-auto my-8 relative flex justify-center  overflow-hidden rounder-full pl-6 pr-6 sm:h-16 sm:w-screen md:h-20">
        <input 
        type="text" 
        className='w-[60%] h-12 bg-[#d4cfc4]
        rounded-l-lg placeholder:text-slate-100 placeholder:text-lg px-6 min-w-fit text-slate-900 text-lg focus:outline-none focus:placeholder:text-slate-700 border-l-2 border-b-2 border-t-2 border-slate-900 sm:h-16 sm:w-[80%] sm:border-slate-100 sm:placeholder:text-slate-700 sm:focus:placeholder:text-slate-200 md:h-20 md:placeholder:text-xl md:text-xl md:w-[90%]' placeholder='Enter your todo'
        value={InputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
        />
        <button className=' bg-[#d4cfc4]
        rounded-r-lg border-2 border-slate-900 text-slate-900 text-xl pr-2 sm:border-slate-100 sm:pl-3 sm:pr-5'
        onClick={()=>{
        props.addList(InputText)
        setInputText("")
      }}>{InputText==('')?<RiAddFill className='text-3xl ml-3 hover:animate-spin'/>:<RiCheckLine className='text-3xl ml-3 hover:text-green-500'/>}</button>      
      
    </div>
  );
}

export default ToDoInput