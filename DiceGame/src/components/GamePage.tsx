import React from 'react'
import wall from './dices 1 - Copy.png';
import Desc from './Desc';
import "./GamePage.component.css"
interface prop{
  chnage:() =>void;
}
const GamePage = ({chnage}:prop) => {
  return (
    <div className='containe'>
    <img className='diceImg' src={wall}></img>
    <Desc toggle={chnage} />
    </div>
  )
}

export default GamePage