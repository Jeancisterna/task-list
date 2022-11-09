import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoList';
import { useState } from 'react';
import data from './data.json'
import TodoForm from './components/TodoForm';


function App() {

  useState();

  const [tareas , setTareas] = useState(data);


  const onComplete = (id) => {
    
    setTareas(tareas.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
    }))
  }
  const onDeleteItem = (id) => {
    setTareas([...tareas].filter(todo => todo.id !== id))
  }
  
    const addTodo = (newTodo) => {
      console.log('newTodo',newTodo)
      let newItem = {id : + new Date(), task: newTodo, completed: false};

      setTareas([...tareas, newItem]);
    }



  return (
    <div className="container">
      <TodoForm addTodo ={addTodo} />
      <Header/>
      <TodoList tareas = {tareas} onComplete = {onComplete} onDeleteItem = {onDeleteItem}/>
   
    </div>
  );
}

export default App;

