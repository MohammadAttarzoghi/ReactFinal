import React, { useState } from 'react'

const SimpleCalculator = ({defaultValue}) => {
    const [calcValue,setCalcValue] = useState(defaultValue);
    const calc = (a)=> {
        setCalcValue(calcValue+a);
    }
  return (
    <div>SimpleCalculator</div>
  )
}

export default SimpleCalculator