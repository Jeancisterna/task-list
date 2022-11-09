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
    <div style = {{margin: 20}}>Agregar datos
        <form onSubmit={handleSubmit}>
            <input type = "text" value={userInput} onChange = {HandleOnChange}/>
            <button> Agregar </button>
        </form>
    
    </div>
  )
}

export default TodoForm