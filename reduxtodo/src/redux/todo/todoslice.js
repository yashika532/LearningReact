import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos :[{
   id:1,
   text:"HELLO YASHIKA"
  }]
}

export const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers: {
    addTodo: (state,action) => {
      // state give the info current situation
      // action : data passed
      const todo ={
         id:nanoid(),
         text: action.payload,
      }
      state.todos.push(todo)
      },
      removeTodo: (state,action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
        }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer