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
    <div className="flex justify-evenly pl-3 pr-3 mb-9">
        <input 
        type="text" 
        className='border-b-2 border-slate-900 bg-[#d4cfc4] placeholder:text-white placeholder:text-lg text-center max-w-[65%] focus:outline-none text-comfort placeholder:font-black focus:placeholder:text-[#d4cfc4] text-lg font-black focus:border-white' placeholder='Type Here!'
        value={InputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
        />
        <div className='bg-slate-900 rounded-full grid place-items-center w-7 hover:bg-white group'>
        <button className=' '
        onClick={()=>{
        props.addList(InputText)
        setInputText("")
      }}>{InputText==('')?<RiAddFill className='text-xl text-white hover:animate-spin group-hover:text-slate-900'/>:<RiCheckLine className=' text-xl group-hover:text-green-500 text-white  '/>}</button>      
      
        </div>
    </div>
  );
}

export default ToDoInput