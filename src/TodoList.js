import React from 'react'
import Todo from './Todo'

function TodoList({ todos, toggleTodo, removeTodo }) {
    return (
        <div>
            {todos.map( todo => {
                return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
            })}
        </div>
    )
}

export default TodoList

