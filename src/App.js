import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])

  const todoNameRef = useRef()

  const LOCAL_STORAGE_KEY = 'todos-key'


  // Render stored todos after refresh web page
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) {setTodos(storedTodos)}
  }, [])



  // Store data to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])



  // Add todo
  const handleAddTodo = e => {
    const name = todoNameRef.current.value
    if (name === '') return

    setTodos(previousTodo => {
      return [...previousTodo, {
        id: uuidv4(),
        name: name,
        completeStatus: false
      }]
    })
    todoNameRef.current.value = null
  }

  
  // Remove todo
  function removeTodo(id) {
    const newTodos = [...todos]
    const removeArr = newTodos.filter(todo => todo.id !== id)
    setTodos(removeArr)
  }


  // Toggle completed todo
  function toggleTodo (id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completeStatus = !todo.completeStatus
    setTodos(newTodos)
  }


  // Filter incomplete todos
  function handleCompletedTodo() {
    const newTodos = todos.filter(todo => !todo.completeStatus)
    setTodos(newTodos)
  }


  return (
    <div>
      <div className="app">
      <p className="todo-text title">My Tasks for Today</p>
        <div className="container">
          <input ref={todoNameRef} type="text" className="input" placeholder="Type here"/>
          <button onClick={handleAddTodo} className="btn">Add Task</button>
          <button onClick={handleCompletedTodo} className="btn btn-clear">Clear Completed</button>
        </div>
        <div className="todo-text">{todos.filter(todo => !todo.completeStatus).length} left to do</div>
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
      </div>
    </div>
  );
}

export default App
