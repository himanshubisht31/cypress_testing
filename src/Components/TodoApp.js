// import React, {Component} from 'react'
import { useState } from 'react';

import TaskForm from './TaskForm'
import TaskList from './TaskList'




const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title,setTitle]=useState('')

  const onChange = (e) => {
    setTitle(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos,
      {
        task: title,
        status: false,
        id:new Date()
    }

  ])
  }

  const handleDelete = (id) => {
    const updated=todos.filter(e=>e.id !==id)
    setTodos(updated)
  }

  return (
    
      <div >
        <header>
        <h1>Tasks</h1>
        <h1>Count : {todos.length}</h1>
        <TaskForm onChange={onChange} value={title} onSubmit={onSubmit} />
        </header>
        <section>
        <TaskList todos={todos} handleDelete={handleDelete}/>
        </section>
      </div>
  
  );
};


export default TodoApp