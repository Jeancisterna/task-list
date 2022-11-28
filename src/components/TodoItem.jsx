 
 function TodoItem({todo , onComplete, onDeleteItem}){
    
    const getStyle = () =>{
        return{
            textDecoration: todo.completed ? 'line-through' : 'none',
            margin:'20px',
            border: '1px solid #ffffff',
            backgroundColor: '#CCF7E3'
        }
    }
    return (
        <>
        <div className='lista' style ={getStyle()}>
            <input type="checkbox" checked = {todo.completed}
            onChange={() => onComplete(todo.id)}/>
            {todo.task}
            <button className="add-btn" onClick = {() => onDeleteItem(todo.id)}>Borrar</button>
        </div>
        </>
    );
};

export default TodoItem;