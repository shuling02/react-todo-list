import {useState} from "react"

export function NewTodoForm({ onSubmit })
{   
    const [newItem, setNewItem] = useState("") //destructor newItem - value, setNewItem - set a function

    function handleSubmit(e)
    {
        e.preventDefault()
        if(newItem === "") return

        onSubmit(newItem)
        
        setNewItem("")

    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input 
                value={newItem} 
                onChange={e => setNewItem(e.target.value)} //update new value whenever there's an input
                type="text" 
                id="item" 
            />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}