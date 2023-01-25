import React from 'react'

export default function Todo({todo, toggleComplete, removeTodo}) {
  function handleCheckboxClick() {
    toggleComplete(todo.id)
  }

  function handleRemoveClick() {
    removeTodo(todo.id)
  }
  return (
    <div style={{display: "flex"}}>
    <input type="checkbox" onClick={handleCheckboxClick} />&nbsp;
    <li style={{listStyleType: "none", color: "white", textDecoration: todo.completed ? "line-through":null}}>{todo.task}&nbsp;</li>
    <button onClick={handleRemoveClick}>X</button>
    </div>
  )
}
