import React from 'react'
import TodoItem from './TodoItem'

 function TodoList({tareas, onComplete}) {
  return (
    <div>TodoList
        {
            tareas.map((todo, index)=> (
                <TodoItem key ={`todo-${index}`}todo = {todo} onComplete = {onComplete}/>
            ))
        }
    </div>
  )
}
export default TodoList