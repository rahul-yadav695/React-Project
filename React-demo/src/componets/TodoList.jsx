import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  return (
    <div>
      {props.task.map((takas) => {
        return <TodoItem key={takas.id} title = {takas.title} />
      })}
    </div>
  )
}

export default TodoList