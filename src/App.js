import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoList';
import { useState } from 'react';
import data from './data.json'


function App() {

  useState();

  const [tareas , setTareas] = useState(data);
  const onComplete = (id) => {
    console.log('task', id);

    setTareas(tareas.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
    }))

    /*tareas.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: true} : {...todo};
    })*/


  }

  return (
    <div className="container">
      <Header/>
      <TodoList tareas ={tareas} onComplete = {onComplete}/>
   
    </div>
  );
}

export default App;

