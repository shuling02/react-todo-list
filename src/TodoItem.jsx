export function TodoItem({completed, id, title, toggleTodo, deleteTodo})
{
   return(
    <li>
        <label>
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            
            {title}
        </label>
        <button 
            onClick = {() => deleteTodo(id)} //pass a function () => instead of returning a result
            className="btn btn-danger"
        >
            Delete
        </button>
    </li>
   ) 
}