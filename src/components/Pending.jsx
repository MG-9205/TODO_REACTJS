import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatetodo } from "../features/todoSilice";
import "../App.css";
export default function Pending() {
  const Todo = useSelector((state) => state.todos);// Selecting todos from the Redux store
  const dispatch = useDispatch();
    // Function to update the status of a task to "Pending"
  function update_task(id) {
    dispatch(updatetodo({ id: id, status: "Pending" }));
  }
  return (
    <>
      <div className="task-list" id="list">
         {/* Mapping through todos and rendering pending tasks */}
        {Todo.map(
          (item, index) =>
            item.status == "Pending" && (
              <div className="task-list2" key={index}>
                <input type="checkbox" onChange={() => update_task(item.id)} />
                <span>{item.task}</span>
              </div>
            )
        )}
      </div>
    </>
  );
}
