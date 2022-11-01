import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoList';
import { useState } from 'react';
import data from './data.json'


function App() {

  useState();

  const [tareas , setTareas] = useState(data);

  return (
    <div className="container">
      <Header/>
      < TodoList tareas ={tareas} />
   
    </div>
  );
}

export default App;

