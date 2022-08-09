import React, { useState } from "react";
import Items from './Items'
import AddTask from "./AddTask";
import './Column.css';

const DUMMY_EXPENSES = [
    {
      columnId: 0,
      title: 'should be 1st',
      description: 'Awais',
      
    },
    
    {
        columnId: 1,
        title: 'should be in 2nd',
        
        
    },
    {
        columnId: 2,
        title: 'should be in 3rd',
        
        
    },
  ];

  

const Column = (props) => {
    
    const[items, setItems] = useState(DUMMY_EXPENSES);
    const column_id = props.onColumnId;

    const addItemsHandler = (item) => {
        setItems((prevItems) => {
          return [item, ...prevItems];
        });
      };

   

    
    
    return(
       <div className="column">
        <h3>{props.text}</h3>
        {items.map((items)=>{
        if(items.columnId===column_id){
            return(<Items
                columnIndex= {items.columnId}
                title= {items.title}/>)
        }
        
       })}

        <AddTask onAddItem={addItemsHandler} onSetColumId={column_id}></AddTask>
       </div>
    );

}

export default Column;