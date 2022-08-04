import React from "react";
import TransitionButton from "./TransitionButton";
import  "./Items.css";

const Items= ()=>{
    
    return(
        <div className="card-style">
        <TransitionButton text={'<'}></TransitionButton>
        <p>This will be the heading</p>
        <p>This will be the description</p>
        <TransitionButton text={'>'}></TransitionButton>
        </div>
    );
}

export default Items;