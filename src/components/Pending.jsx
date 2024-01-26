import React from "react";
import { useContext } from "react";
import TodoContext from "../context/Todocontext";
import "../App.css";

export default function Pending() {
  const Todo = useContext(TodoContext);
  function update_task(Task) {
    const index=Todo.Todo.findIndex((ele)=> ele.Task===Task)
     Todo.Todo[index].status="Completed"
     Todo.Update()
  }
  return (
    <>
      <div className="task-list" id="list">
        {Todo.Todo.map((item, index) => (
          item.status=="Pending"&&<div className="task-list2" key={index}>
            <input type="checkbox" onChange={()=>update_task(item.Task)} />
            <span>{item.Task}</span>
          </div>
        ))}
      </div>
    </>
  );
}
