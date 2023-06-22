import React from 'react'
import { useState } from 'react'
import TodoInput from './TodoInput.jsx'
import TodoList from './TodoList.jsx'
// import { IconName } from "react-icons/hi";



function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (InputText) => {
    if(InputText!=="")
      setListTodo([...listTodo, InputText]);
  }
  const deleteListItem = (key) => {
    let newList = [...listTodo];
    newList.splice(key, 1);
    setListTodo([...newList])
  }
  return (
    <div className=' min-h-screen grid place-items-center'>
    <div className=' h-fit min-w-fit  relative rounded-lg bg-[#d4cfc4] max-w-3xl w-[70%] mx-auto grid place-items-center my-10 ring-2 ring-slate-900 ring-opacity-20 pb-7'>
      <div className="">
        <h1 className='font-black text-6xl sm:text-7xl md:text-8xl text-center text-slate-900 mt-5 font-bebas tracking-tight p-4 '>TO-DO LIST</h1>
        <TodoInput addList={addList}/>
        {listTodo.map((listItem, i) => {
          return(
            <TodoList index={i} item={listItem} key={i} deleteItem={deleteListItem}/>
          )
        })
        }
      </div>
    </div>
  </div>
  )
}


export default App
