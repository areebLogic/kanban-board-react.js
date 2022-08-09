import React from "react";
import TransitionButton from "./TransitionButton";
import  "./Items.css";

const Items= (props)=>{

    let columnIndex = 0; 

    const onRightButtonClickHandler = () => {
        columnIndex+= 1;
    }
    const onLeftButtonClickHandler = () => {
        columnIndex-= 1;
    }
    

    return(
        <div className="card-style">
        <TransitionButton onClick={onRightButtonClickHandler} text={'<'}></TransitionButton>
        <p>This will be the heading</p>
        <p>This will be the description</p>
        <TransitionButton onClick={onLeftButtonClickHandler} text={'>'}></TransitionButton>
        </div>
    );
}

export default Items;