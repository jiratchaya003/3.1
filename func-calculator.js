import React from "react"
import Button from "./func-event"

export default function Calculator(){
    const num1=20
    const num2=4
    const Calculator = (op) =>{
        let cal = `${num1} ${op} ${num2}`
        let result = eval(cal) 
        alert(`${cal} = ${result}`)
    }
    return(
        <div>
            <span>{num1}</span>
            <button onClick={() =>Calculator('+')}> + </button>
            <button onClick={() =>Calculator('-')}> - </button>
            <span>{num2}</span>
        </div>
    )
}