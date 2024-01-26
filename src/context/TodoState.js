import React, { useState } from "react";
import TodoContext from "./Todocontext";
const TodoState=(props)=>{
    const [Todo,setTodo]=useState([])
    const [Counter,setcounter]=useState({
        "total":0,
        "Pending":0,
        "completed":0
    })
    const Update=()=>{
        //Todo.push(Task)

       setTodo([...Todo])
       const Pending=Todo.filter((ele)=>ele.status==="Pending")
       const Complete=Todo.filter((ele)=>ele.status==="Completed")
       Counter.Pending=Pending.length
       Counter.completed=Complete.length
       Counter.total=Todo.length
       setcounter({...Counter})
    }
    return(
        <>
        <TodoContext.Provider value={{Todo,Update,Counter,setcounter}}>
            {props.children}
        </TodoContext.Provider>
        </>
    )

}
export default TodoState;