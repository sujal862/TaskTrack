import React from 'react'
import { useTodo } from '../contexts'; //entrypoint of contexts folder is index.js 
import { useState } from 'react'

function TodoForm() {
    const [todo, setTodo] = useState("");  //todo is todo msg
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault();

        if(!todo) return;  //i.e todo msg is empty

        addTodo( {todo:todo, completed: false} )
        setTodo("");
    }

    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo}
                onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

