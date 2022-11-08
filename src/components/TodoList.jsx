import React from 'react'
import TodoItem from './TodoItem'

 function TodoList({tareas, onComplete, onDeleteItem}) {
  return (
    <div>TodoList
        {
            tareas.map((todo, index)=> (
                <TodoItem key ={`todo-${index}`} todo = {todo} onComplete = {onComplete} onDeleteItem = {onDeleteItem}/>
            ))
        }
    </div>
  )
}
export default TodoList