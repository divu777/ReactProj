import React from 'react'
import Button from './Button'
import "./Desc.css"
interface prop{
  toggle:() =>void;
}
const Desc = ({toggle}:prop) => {
  return (
    <div className='descc'>
    <div className='headinng'>DICE GAME</div>
    <Button onClick={toggle} colr="black" textt="white" />
    </div>
  )
}

export default Desc