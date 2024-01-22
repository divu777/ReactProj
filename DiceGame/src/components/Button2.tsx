import React from 'react'
import "./Button.css"
interface prop{
    buttonN:string
    colr:string;
    textt:string;
    onClik:()=>void;
}
const Button2 = ({buttonN,colr,textt ,onClik}:prop) => {
    const buttonS={
        backgroundColor:colr,
        color:textt
      }
  return (
    <button style={buttonS} onClick={onClik}>
        {buttonN}
    </button>
  )
}

export default Button2