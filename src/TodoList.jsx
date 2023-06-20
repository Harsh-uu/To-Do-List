import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoList(props) {
  return (
    <li className="list-item">
        {props.item}
        <span>
            <RiDeleteBin6Line
            onClick={e=>{
            props.deleteItem(props.index)
            }}
            />
        </span>
    </li>
  )
}

export default TodoList