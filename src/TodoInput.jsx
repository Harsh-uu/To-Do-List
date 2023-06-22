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
    <div className="max-w-xl w-[65%] mx-auto my-8 relative flex justify-center">
        <input 
        type="text" 
        className='w-full h-12 bg-slate-300
        rounded-l-full placeholder:text-slate-500 placeholder:text-lg px-6 min-w-fit text-slate-800 text-lg focus:outline-none focus:placeholder:text-slate-300' placeholder='Enter your todo'
        value={InputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
        />
        <button className=' bg-slate-300
        rounded-r-full text-slate-900 text-xl pr-2'
        onClick={()=>{
        props.addList(InputText)
        setInputText("")
      }}>{InputText==('')?<RiAddFill className='text-3xl ml-3 hover:text-white'/>:<RiCheckLine className='text-3xl ml-3 hover:text-green-500'/>}</button>      
      
    </div>
  );
}

export default ToDoInput