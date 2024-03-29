import { configureStore } from "@reduxjs/toolkit";
import todosreducer from "../features/todoSilice"
export const store=configureStore({
    reducer:todosreducer
})