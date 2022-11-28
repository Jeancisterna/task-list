
import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoList';
import { useState } from 'react';
import data from './data.json'
import {BrowserRouter, Routes, Route, Link, Form} from "react-router-dom"
import New from './components/New';
import {app} from './firebaseConfig';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'



function App() {

  const [user ,setUser] = useState();
  const [error,setError] = useState();
  

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
  
    const handleGoogleSignIn = () =>{
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      signInWithPopup(auth, provider).then((userCredentials) => {
        setUser({name: userCredentials.user.displayName,
        })
      }).catch((error)=>{
        setError(error.message)
      })
      
      
      }
      

  return (
    
    
    <div className="container">
      <Header/>
    <BrowserRouter>
        <Link to="/ListaTareas"> 
          <button className='Inicio' onClick={handleGoogleSignIn}> Iniciar sesion</button>
          {user && <New nombre= {user.name} tareas = {tareas}/>}
        </Link>
        <Link to="/"> 
        <button className='Inicio' >Volver</button>
        </Link>
      <Routes>
        <Route path='/ListaTareas' element={<TodoList tareas = {tareas} onComplete = {onComplete} onDeleteItem = {onDeleteItem} addTodo = {addTodo} /> } ></Route> 
         <Route path='/' ></Route>
        
      </Routes>
    </BrowserRouter>
   </div> 

   
  );
}

export default App;

