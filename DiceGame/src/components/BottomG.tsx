import React, { useState } from 'react'
import styled from 'styled-components';
import Button2 from './Button2';

const BottomG = () => {
    const [score,setScorezero]=useState(0);
    const changeScore=()=>{
        setScorezero(0);
    }
  return (
    <Bottom>
        <img src='src/components/dice_1.png' />
        <Button2 buttonN="Reset Score " colr="white" textt="black" onClik={changeScore} />
        <Button2 buttonN="Show Rule " colr="black" textt="white" onClik={changeScore}/>
    </Bottom>
  )
}

export default BottomG;
const Bottom=styled.div`

`