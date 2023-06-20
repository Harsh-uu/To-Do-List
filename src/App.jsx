import React from 'react'
import { useState } from 'react'
import TodoInput from './ToDoInput.jsx'
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
    <div className='main-container'>
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1>TODO</h1>
        <hr />
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