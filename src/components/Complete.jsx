import React from 'react'
import { useContext } from "react";
import TodoContext from "../context/Todocontext";
import "../App.css";

export default function Complete() {
  const Todo = useContext(TodoContext);
  function update_task(Task) {
    const index=Todo.Todo.findIndex((ele)=> ele.Task===Task)
     Todo.Todo[index].status="Pending"
     Todo.Update()
  }
  return (
    <>
    <div className="task-list" id="list">
        {Todo.Todo.map((item, index) => (
          item.status=="Completed"&&<div className="task-list3" key={index}>
            <input type="checkbox" checked  onChange={()=>update_task(item.Task)} />
            <span>{item.Task}</span>
          </div>
        ))}
      </div>
    </>
  )
}
