import React, { useState } from 'react'
import "./Button.css"
interface buttonProp{
  colr:string;
  textt:string;
  onClick:()=>void;
}
const Button = ({colr,textt,onClick}:buttonProp) => {
  
  const buttonS={
    backgroundColor:colr,
    color:textt
  }
  return (
    <button style={buttonS} onClick={onClick} > Play Now</button>
  )
}

export default Button