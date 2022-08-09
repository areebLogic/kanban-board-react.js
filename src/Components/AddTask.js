import React, { useContext } from "react";
import Column from "./Column";



const AddTask =()=>{



    const inputHandler = (e) => {
        const item = {
            text: e.target.value
        }
    }

    return(
        <>
        <input></input>
        <button onInput={inputHandler}>Add Task</button>
        </>
    )
}

export default AddTask;