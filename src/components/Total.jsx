import React from "react";
import { useContext } from "react";
import TodoContext from "../context/Todocontext";
import "../App.css";
export default function Total() {
  const Todo = useContext(TodoContext);
  function delete_task(Task){
    const index=Todo.Todo.findIndex((ele)=> ele.Task===Task)
   Todo.Todo.splice(index,1)
   Todo.Update()
   console.log(Todo.Todo)
  }
  return (
    <>
      <div className="task-list" id="list">
        {
          Todo.Todo.map((item,index)=>(
            <div className="task-list1" key={`Task${index}`}>
            <span>{item.Task}</span>
            <i className="fas fa-times" onClick={()=>delete_task(item.Task)}></i>
          </div>
          ))
        }
      </div>
    </>
  );
}
