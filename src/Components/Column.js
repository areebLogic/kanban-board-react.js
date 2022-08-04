import React from "react";
import Items from './Items'
import AddTask from "./AddTask";
import './Column.css';
const Column = () => {
    
    return(
       <div className="column">
        <h3>This is a column</h3>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <AddTask></AddTask>
       </div>
    );

}

export default Column;