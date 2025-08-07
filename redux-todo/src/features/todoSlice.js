import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    title: "create your portfolio",
    status: false
}]

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },

        remove: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

export default todoSlice.reducer;
export const { add, remove } = todoSlice.actions;