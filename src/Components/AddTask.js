import React, { useContext, useState } from "react";
import Column from "./Column";




const AddTask =(props)=>{

    const [enteredTask, setEnteredTask] = useState('');

    const enteredTaskHandler=(e)=>{
        setEnteredTask(e.target.value);
    }



    const submitItemHandler= (e)=>{
        e.preventDefault();
        const newItems= {
            id: 1,
            title: enteredTask
        }

        props.onAddItem(newItems);

    }

    return(
        <form onSubmit={submitItemHandler}>
        
        <input onChange={enteredTaskHandler}></input>
        <button type="submit">Add Task</button>
        
        </form>
    )
}

export default AddTask;