import { FormControl } from '@chakra-ui/react';
import React, { useState } from 'react'



 function TodoForm({addTodo}) {
    const [userInput , setUserInput ] = useState();
    
    const HandleOnChange = (e) =>{
        setUserInput(e.currentTarget.value);
     }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim() !== ''){
            addTodo(userInput);
            setUserInput('');
        }
    }

    
  return (
    <div className='agregarlista' style = {{margin: 20}}>Agregar Lista
        <form className='formulario' onSubmit={handleSubmit}>
            <input type = "text" value={userInput} onChange = {HandleOnChange}/>
            <button className='Inicio' > Agregar </button>
        </form>

        
    
    </div>
  )
}

export default TodoForm