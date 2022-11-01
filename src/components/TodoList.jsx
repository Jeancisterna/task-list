import React from 'react'
import TodoItem from './TodoItem'

 function TodoList({tareas}) {
  return (
    <div>TodoList
        {
            tareas.map((todo, index)=> (
                <TodoItem key ={`todo-${index}`}todo = {todo}/>
            ))
        }
    </div>
  )
}
export default TodoList