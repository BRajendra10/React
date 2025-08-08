import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { add, remove, update } from '../features/todoSlice'
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { useLocalStorage } from '../features/customHook';

function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo);
    const [title, setTile] = useState("");
    const [id, setId] = useState(null);
    const [status, setStatus] = useState(false);
    const [data, setData] = useLocalStorage(todos);

    function handleEdit(index, title, status) {
        setId(index);
        setTile(title);
        setStatus(status);
    }

    useEffect(() => {
        setData(todos);
    }, [todos])

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-semibold uppercase my-8">Todo app</h1>

            <div className="w-[30rem] h-auto grid grid-cols-12 bg-gray-200 rounded-full">
                <input type="text" className="col-start-1 col-end-10 rounded-full outline-0 py-3 px-5" value={title} onChange={(e) => setTile(e.target.value)} />
                <button className="bg-orange-200 rounded-full col-start-10 col-end-13 p-3" onClick={() => {
                    dispatch(id || id == 0 ? update({ id, title, status }) : add({ title, status }))
                    setTile("");
                }}>add todo</button>
            </div>

            <ul className="w-[30rem] h-[20rem] border-2 border-orange-200 rounded-lg p-3">
                {data.map((el, i) => {
                    return (
                        <li className='w-full text-lg flex justify-between items-center' key={i}>
                            <span>{el.title} - {el.status ? "completed" : "incomplete"}</span>
                            <div className="flex gap-2">
                                <button className="text-stone-500 hover:text-stone-950 p-1 rounded-full" onClick={() => dispatch(update({id:i, title:el.title, status:true}))}><FaCheck /></button>
                                <button className="text-stone-500 hover:text-stone-950 p-1 rounded-full" onClick={() => dispatch(remove(i))}><MdDelete /></button>
                                <button className="text-stone-500 hover:text-stone-950 p-1 rounded-full" onClick={() => handleEdit(i, el.title, false)}><MdModeEditOutline /></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo