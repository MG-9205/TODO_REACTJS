import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from "react-router-dom";
import "../App.css";
import Complete from "./Complete";
import Pending from "./Pending";
import Total from "./Total";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "../features/todoSilice";

export default function MainComponent() {
  // Selecting count from the Redux store
  const count = useSelector((state) => state.count);
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
    // Function to add a new task
  const Add_task = () => {
    if (input == false) {
      alert("please enter a value");// Alert if input is empty
    } else {
      dispatch(addtodo(input));// Dispatching addtodo action with input task
      setinput("");
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
                  value={input}
                  onChange={(e) => setinput(e.target.value)}
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
                  All ({count.total})
                </NavLink>
              </button>
              <button id="pending">
                <NavLink
                  to="/Pending"
                  className={({ isActive }) =>
                    `Link ${isActive ? "active" : ""}`
                  }
                >
                  Pending ({count.Pending})
                </NavLink>
              </button>
              <button id="completed">
                <NavLink
                  to="/Completed"
                  className={({ isActive }) =>
                    `Link ${isActive ? "active" : ""}`
                  }
                >
                  Completed ({count.completed})
                </NavLink>
              </button>
            </div>
             {/* Routing for different task lists */}
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
