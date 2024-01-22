import React from 'react'
import styled from 'styled-components'
import "./ShowR.css"
const ShowR = () => {
  return (
    <div className='descr'>
        <div className='head'>
            How to play game
        </div>
        <div className="points">
            <div>
                Select any number
            </div>
            <div className="">
                click on the dice Image
            </div>
            <div>
            after click on  dice  if selected number is equal to dice number you will get same point as dice 
            </div>
            <div>
            if you get wrong guess then  2 point will be dedcuted 
            </div>
        </div>
    </div>
  )
}

export default ShowR;

