import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { add, remove, update } from '../features/todoSlice'

function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo);
    const [newTodo, setNewTodo] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [id, setId] = useState(null);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-semibold my-8">Todo's</h1>

            <div className="w-[30rem] h-auto grid grid-cols-12 bg-gray-200 rounded-full">
                <input type="text" className="col-start-1 col-end-10 rounded-full outline-0 py-3 px-5" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button className="bg-orange-200 rounded-full col-start-10 col-end-13 p-3" onClick={() => {
                    dispatch(isUpdating ? update({id, title: newTodo, status: false}) : add({ title: newTodo, status: false }))
                    setNewTodo("");
                }}>add todo</button>
            </div>

            <ul className="w-[30rem] h-[20rem] border-2 border-orange-200 rounded-lg p-3">
                {todos.map((el, i) => {
                    return (
                        <li className='w-full text-lg flex items-center gap-2' key={i}>
                            <input type="checkbox" name="delete-checkbox" id={i} onChange={() => dispatch(remove(i))} />
                            <span>{el.title} - {el.status ? "completed" : "incomplete"}</span>
                            <button className="self-end py-1 px-3 rounded hover:bg-orange-200" onClick={() => {
                                setIsUpdating(true);
                                setId(i);
                                setNewTodo(el.title);
                            }}>edit</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo