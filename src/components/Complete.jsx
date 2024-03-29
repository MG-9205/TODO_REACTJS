import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatetodo } from "../features/todoSilice";
import "../App.css";

export default function Complete() {
  const Todo = useSelector((state) => state.todos);  // Selecting todos from the Redux store
  const dispatch = useDispatch();
    // Function to update the status of a task to "Completed"
  function update_task(id) {
    dispatch(updatetodo({ id: id, status: "Completed" }));
  }
  return (
    <>
      <div className="task-list" id="list">
        {/* Mapping through todos and rendering completed tasks */}
        {Todo.map(
          (item, index) =>
            item.status == "Completed" && (
              <div className="task-list3" key={index}>
                <input
                  type="checkbox"
                  checked
                  onChange={() => update_task(item.id)}
                />
                <span>{item.task}</span>
              </div>
            )
        )}
      </div>
    </>
  );
}
