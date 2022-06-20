import React from "react";

import './Step.css';

function Step(props) {
    

    return (
    <div className="step-counter"> 
        <span>Krok:</span>
        <input onChange={(event) => props.stepMethod(event.target.value)} type="number"/>
    </div>
    )
    
  
}

export default Step;