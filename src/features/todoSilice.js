import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [],// Array to store todo items
  count: {
    total: 0,
    Pending: 0,
    completed: 0,
  },//an object to keep the record of task according to their status
};
// Create todoSlice using createSlice from Redux Toolkit
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Reducer to add a new todo
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        task: action.payload,
        status: "Pending",
      };
      state.todos.push(todo);
        // Update counts after adding a new todo
      state.count.total = state.count.total + 1;
      state.count.Pending = state.count.Pending + 1;
    },
    // Reducer to remove a todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((task) => task.id != action.payload);
       // Update counts after removing a todo
      state.count.total = state.todos.length;
      state.count.Pending = state.todos.filter(
        (task) => task.status === "Pending"
      ).length;
      state.count.completed = state.todos.filter(
        (task) => task.status === "Completed"
      ).length;
    },
     // Reducer to update the status of a todo
    updatetodo: (state, action) => {
      const { id, status } = action.payload;
      // Toggle status of the todo based on action payload
      status == "Pending" &&
        state.todos.forEach((task) => {
          if (task.id == id) {
            task.status = "Completed";
          }
        });
      status == "Completed" &&
        state.todos.forEach((task) => {
          if (task.id == id) {
            task.status = "Pending";
          }
        });
  // Update counts after updating the todo status
      state.count.total = state.todos.length;
      state.count.Pending = state.todos.filter(
        (task) => task.status === "Pending"
      ).length;
      state.count.completed = state.todos.filter(
        (task) => task.status === "Completed"
      ).length;
    },
  },
});

export const { addtodo, removeTodo, updatetodo } = todoSlice.actions;

export default todoSlice.reducer;
