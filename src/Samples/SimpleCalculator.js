import React, { useState } from 'react'

const SimpleCalculator = ({defaultValue, bgColor,code}) => {
    const [calcValue,setCalcValue] = useState(defaultValue);
    const calc = (a)=> {
        setCalcValue(calcValue+a);
    } 
  return (
    <>
    <h1 style={{backgroundColor:bgColor}}>This {code} is a Simple Calculator</h1>
    <div>
        <label>Value=</label>
        <input id="txtValue" value={calcValue}/>
    </div>
    <div>
        <button onClick={()=> calc(1)}>+1</button>
        <button onClick={()=> calc(5)}>+5</button>
        <button onClick={()=> calc(-1)}>-1</button>
        <button onClick={()=> calc(-5)}>-5</button>
    </div>
    
    <div>SimpleCalculator</div>
    </>
  )
}

export default SimpleCalculator