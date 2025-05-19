import React from 'react'

function TodoItem(props) {
  return (
    <div>
      <ol>
        <li>{props.id}</li>
        <li>{props.title}</li>
      </ol>
    </div>
  )
}

export default TodoItem