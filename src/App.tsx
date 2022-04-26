import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './App.css';
import Troussardle from './components/Troussardle';
import { Player } from './Interface/IPlayer';
import { Team } from './Interface/ITeam';
import { getRandomPlayer } from './Logic/football';

function App() {
  const [club, setClub] = useState<Team>();
  const [player, setPlayer] = useState<Player>();
  const [solution, SetSolution] = useState<Array<string>>([]);
  
  useEffect(() => {
    const fetchInfo = async () => {
      const info = await getRandomPlayer();
      setClub(info.randomTeam); 
      setPlayer(info.randomPlayer); 
      SetSolution(info.randomPlayer.name.split(' '))
    }

    fetchInfo();
  }, []);

  if(!solution){
    return (
      <div>
        <h1>Error! Nah nuh solution fi yuh mi boss</h1>
      </div>
    );
  }
  

    return (
      <div className="">
        <div className="">
          <h1>Troussardle</h1>
          {/* { solution && <Troussardle solution={solution}/> } */}
          <h3>{club?.name}</h3>
          <h3>{player?.name}</h3>
          <h3>{solution && solution[1] ? <Troussardle solution={solution[1]}/>: <Troussardle solution={solution[0]}/>}</h3>
          {/* <h3>{player?.name}</h3> */}
          {/* <img src={club?.crestUrl} className="App-logo" alt="logo" /> */}
        </div>
      </div>
    );
  
  
}

export default App;


