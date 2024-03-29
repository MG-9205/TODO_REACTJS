import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSilice";
import "../App.css";
export default function Total() {
  const Todo = useSelector(state=>state.todos)// Selecting todos from the Redux store
  const dispatch=useDispatch()
   // Function to delete a task
  function delete_task(id){
   dispatch(removeTodo(id))// Dispatching removeTodo action with task ID
  }
  return (
    <>
      <div className="task-list" id="list">
        {/* Mapping through todos and rendering each task */}
        {
          Todo.map((item,index)=>(
            <div className="task-list1" key={`Task${index}`}>
            <span>{item.task}</span>
            <i className="fas fa-times" onClick={()=>delete_task(item.id)}></i>
          </div>
          ))
        }
      </div>
    </>
  );
}
