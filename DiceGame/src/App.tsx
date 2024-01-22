import { useState } from "react";
import "./App.css"
import GamePage from "./components/GamePage"
import StartGame from "./components/StartGame";


const App = () => {
  const [statGame, setStatGame]=useState(false);
  const Changestate=()=>{
    setStatGame(true);
  }
  return (
    
    <>
    {statGame ? < StartGame /> : <GamePage
      chnage = {Changestate}
     />}
    </>
  )
}

export default App