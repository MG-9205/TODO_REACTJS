import React, { useRef } from "react";
import { useContext } from "react";
import TodoContext from "../context/Todocontext";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route
} from "react-router-dom";
import "../App.css";
import Complete from "./Complete";
import Pending from "./Pending";
import Total from "./Total";

export default function MainComponent() {
  const Todo = useContext(TodoContext);
  const Input_ref = useRef(null);
  const Add_task = () => {
    const input = Input_ref.current.value;
    if (input == false) {
      alert("please enter a value");
    } else {
      const Task = {
        Task: input,
        status: "Pending",
      };
      Todo.Todo.push(Task)
      Todo.Update()
      Input_ref.current.value = ""

    }
  };

  return (
    <>
      <Router>
        <div>
          {" "}
          <div className="container1">
            <div className="heading">
              <h1>To-Do List</h1>
            </div>
            <div className="input">
              <span>
                <input
                  type="text"
                  id="input"
                  placeholder="Add New Task"
                  ref={Input_ref}
                />
                <button id="add-task" onClick={Add_task}>
                  ADD
                </button>
              </span>
            </div>
            <div className="status-btn">
              <button className="all" id="task">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `Link ${isActive ? "active" : ""}`
                  }
                >
                  All  ({Todo.Counter.total})
                </NavLink>
              </button>
              <button id="pending">
                <NavLink
                  to="/Pending"
                  className={({ isActive }) =>
                  `Link ${isActive ? "active" : ""}`
                }
                >
                  Pending  ({Todo.Counter.Pending})
                </NavLink>
              </button>
              <button id="completed">
                <NavLink
                  to="/Completed"
                  className={({ isActive }) =>
                    `Link ${isActive ? "active" : ""}`
                  }
                >
                  Completed  ({Todo.Counter.completed})
                </NavLink>
              </button>
            </div>
            <Routes>
              <Route exact path="/" element={<Total />}></Route>
              <Route exact path="/Pending" element={<Pending />}></Route>
              <Route exact path="/Completed" element={<Complete />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
