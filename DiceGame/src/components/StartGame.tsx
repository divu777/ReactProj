// StartGame.jsx
import React, { useState } from 'react';
import Button2 from './Button2';
import './StG.css';
import ShowR from './ShowR';
import Box from './Box';

const StartGame = () => {
  const [showRule, setShowRule] = useState(false);
  const [showScore, setShowScore] = useState(0);
  const [randomNumber, setRandomNumber] = useState(1);
  const [clickedBox, setClickedBox] = useState('');

  const clik = () => {
    setShowRule(!showRule);
  };

  const scoree = () => {
    setShowScore(0);
    setClickedBox('');
  };

  const getRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(newRandomNumber);

    // Check if the clicked box value matches the random number
    if (parseInt(clickedBox) === newRandomNumber) {
      // If they match, update the score
      setShowScore(showScore + newRandomNumber);
    }
    else{
      setShowScore(showScore - 2);
    }
  };

  const handleBoxClick = (numb) => {
    setClickedBox(numb);
  };

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <div>{showScore}</div>
          <div>Total Score</div>
        </div>
        <div className="right">
          <Box numb="1" onClick={handleBoxClick} isClicked={clickedBox === '1'} />
          <Box numb="2" onClick={handleBoxClick} isClicked={clickedBox === '2'} />
          <Box numb="3" onClick={handleBoxClick} isClicked={clickedBox === '3'} />
          <Box numb="4" onClick={handleBoxClick} isClicked={clickedBox === '4'} />
          <Box numb="5" onClick={handleBoxClick} isClicked={clickedBox === '5'} />
          <Box numb="6" onClick={handleBoxClick} isClicked={clickedBox === '6'} />
        </div>
      </div>
      <div className="bottom">
        <img src={`src/components/dice_${randomNumber}.png`} onClick={getRandomNumber} alt="Dice" />
        <div>Click on Dice to Roll</div>
        <Button2 buttonN="Reset Score" colr="white" textt="black" onClik={scoree} />
        <Button2 buttonN="Show Rule" colr="black" textt="white" onClik={clik} />
        {showRule ? <ShowR /> : <div />}
      </div>
    </div>
  );
};

export default StartGame;

