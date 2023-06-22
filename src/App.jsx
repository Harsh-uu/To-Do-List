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
    <div className='min-h-screen grid place-items-center'>
      <div className=" ring-2 ring-white ring-opacity-20 rounded-lg min-w-[80%] max-w-[80%] bg-[#d4cfc4] shadow-lg shadow-amber-900/20">
        <h1 className='font-caveat font-black text-6xl mt-8 mb-8 text-center bg-white rounded-sm'>-ToDoList-</h1>
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
