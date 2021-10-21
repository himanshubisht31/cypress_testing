import React from 'react'

export default function TaskList({ todos, handleDelete }) {
  return (
    <div>
      {todos.map(e => (

        <div key={e.id}>

          <p>{e.task}</p>
          <button onClick={() => handleDelete(e.id)} >Delete</button>
         


        </div>



      ))}

    </div>
  )
}
