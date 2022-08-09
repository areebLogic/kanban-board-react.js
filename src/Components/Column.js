import React from "react";
import Items from './Items'
import AddTask from "./AddTask";
import './Column.css';
const Column = (props) => {

    const forItemColumId= ()=>{
        Items.columnIndex = props.onColumId;
    }

    const DUMMY_EXPENSES = [
        {
          columnId: 'e1',
          title: 'Toilet Paper',
          description: 'Awais',
          
        },
        { columnId: 'e1',
        title: 'Toilet Paper',
        description: 'Awais',
         },
        {
            columnId: 'e1',
            title: 'Toilet Paper',
            description: 'Awais',
            
        },
        {
            columnId: 'e1',
            title: 'Toilet Paper',
            description: 'Awais',
            
        },
      ];

    
    return(
       <div className="column">
        <h3>{props.text}</h3>
       {DUMMY_EXPENSES.map((items)=>{
        <Items
        columnIndex= {items.columnId}
        description= {props.description}/>

       })}
        <AddTask onSetColumId={forItemColumId}></AddTask>
       </div>
    );

}

export default Column;