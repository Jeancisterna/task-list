import React from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'


 function TodoList({tareas, onComplete, onDeleteItem,addTodo}) {
  return (
    <div>
      <TodoForm addTodo ={addTodo} />
        {
            tareas.map((todo, index)=> (
                <TodoItem key ={`todo-${index}`} todo = {todo} onComplete = {onComplete} onDeleteItem = {onDeleteItem}/>
            ))
            
        }
        
    </div>
  )
}
export default TodoList