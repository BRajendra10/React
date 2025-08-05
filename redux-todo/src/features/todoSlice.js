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
        }
    }
})

export default todoSlice.reducer;
export const { add } = todoSlice.actions;