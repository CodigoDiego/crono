import React, {useState} from "react";
import '../stylesheet/ToDoForm.css';
import {v4 as uuidv4} from 'uuid';

function ToDoForm(props){

    const [input, setInput] = useState('');

    const handleChange = e => {
      setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            text: input
        }
        props.onSubmit(newTask);
        setInput('');
    }

    return(
    
    <div className="form-container">
    <form className="to-do-form" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" placeholder=" What's the next task?" name="texto" id="input-form" onChange={handleChange} value={input}/>
        <button className="sub-button" type="submit">Add</button>
    </form>
    </div>
);
}
export default ToDoForm;