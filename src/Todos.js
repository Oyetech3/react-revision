import React, { memo } from 'react'


function Todos({todos}) {
    console.log("Rendering")
  return (
    <div>
        <h2>My Todos</h2>
        {
          todos.map(todo => <p>{todo}</p>)
        }
    </div>
  )
}

export default memo(Todos)