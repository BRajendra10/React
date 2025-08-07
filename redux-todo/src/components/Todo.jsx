import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { add, remove, update } from '../features/todoSlice'
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

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
                    dispatch(isUpdating ? update({ id, title: newTodo, status: false }) : add({ title: newTodo, status: false }))
                    setNewTodo("");
                }}>add todo</button>
            </div>

            <ul className="w-[30rem] h-[20rem] border-2 border-orange-200 rounded-lg p-3">
                {todos.map((el, i) => {
                    return (
                        <li className='w-full text-lg flex justify-between items-center gap-2' key={i}>
                            <span>{el.title} - {el.status ? "completed" : "incomplete"}</span>
                            <div className="flex gap-2">
                                <button className="text-xl hover:bg-stone-200 p-2 rounded-full" onClick={() => dispatch(remove(i))}><MdDelete /></button>
                                <button className="text-xl hover:bg-stone-200 p-2 rounded-full" onClick={() => {
                                    setIsUpdating(true);
                                    setId(i);
                                    setNewTodo(el.title);
                                }}><MdModeEditOutline />
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo