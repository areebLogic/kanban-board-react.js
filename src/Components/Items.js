import React from "react";
import TransitionButton from "./TransitionButton";
import  "./Items.css";

const Items= (props)=>{

    let columnIndex = props.columnIndex; 

    const onRightButtonClickHandler = () => {
        columnIndex+= 1;
    }
    const onLeftButtonClickHandler = () => {
        columnIndex-= 1;
    }
    

    return(
        <div className="card-style">
        <TransitionButton onClick={onRightButtonClickHandler} text={'<'}></TransitionButton>
        <p>{props.title}</p>
        
        <TransitionButton onClick={onLeftButtonClickHandler} text={'>'}></TransitionButton>
        </div>
    );
}

export default Items;