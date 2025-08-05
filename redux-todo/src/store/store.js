import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlice'

console.log(todoReducer);

const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

export default store;