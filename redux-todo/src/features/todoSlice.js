import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },

        remove: (state, action) => {
            state.splice(action.payload, 1);
        },

        update: (state, action) => {
            const {id, title, status} = action.payload;
            
            state.splice(id, 1, {title, status})
        }
    }
})

export default todoSlice.reducer;
export const { add, remove, update } = todoSlice.actions;