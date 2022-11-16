import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Card = ({todo,todoList,setTodoList}) => {

    const handleDelete=(e)=>{
        let newList=todoList.filter((item)=>item!==todo)
        localStorage.setItem("todos",JSON.stringify(newList))
        setTodoList(newList)
    }
  return (
    <div className='card  '>
    <h2 className='py-2 mx-2  border-bottom d-flex justify-content-between '>
      <span>{todo.todoTitle}</span>
      <button
      onClick={handleDelete}
       className='btn'>
      <FaTrashAlt color='red' size="2rem"/>

      </button>
    </h2>
    <p>{todo.todoText}</p>
    </div>
  )
}

export default Card