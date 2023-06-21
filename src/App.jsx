import React from 'react'
import { useState } from 'react'
import TodoInput from './TodoInput.jsx'
import TodoList from './TodoList.jsx'



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
    <div className=' min-h-screen  relative '>
      <div className="">
        <h1 className='font-black text-6xl text-center text-white mt-5 font-bebas tracking-tight bg-slate-800 pb-1'>TO-DO LIST</h1>
        <TodoInput addList={addList}/>
        {listTodo.map((listItem, i) => {
          return(
            <TodoList index={i} item={listItem} key={i} deleteItem={deleteListItem}/>
          )
        })
        }
      </div>
    </div>
  )
}


export default App
