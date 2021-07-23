import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import './App.css'

function Todo({ todo, toggleTodo, removeTodo }) {

    // Toggle todo
    function handleClicked() {
        toggleTodo(todo.id)
    }

    // Remove todo
    function handleRemove(){
        removeTodo(todo.id)
    }


    return (
        <div className="container todo-row">
            <input type="checkbox" checked={todo.completeStatus} onChange={handleClicked} className="todo-check"/>
            <p className="todo">{todo.name}</p>
    
            <RiCloseCircleLine onClick={handleRemove} className="todo-close"/>
        </div>
    )
}

export default Todo
