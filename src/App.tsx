import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Troussardle from './components/Troussardle';
import { Player } from './Interface/IPlayer';
import { Team } from './Interface/ITeam';
import { getRandomPlayer } from './Logic/football';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function App() {
  const [club, setClub] = useState<Team>();
  const [player, setPlayer] = useState<Player>();
  const [solution, SetSolution] = useState<Array<string>>([]);

  // Handles button and modal to show hint for club

  const [openClubHint, setOpenClubHint] = React.useState(false);
  const handleOpenClubHint = () => setOpenClubHint(true);
  const handleCloseClubHint = () => setOpenClubHint(false);

  // Handles button and modal to show hint for position
  const [openPositionHint, setOpenPositionHint] = React.useState(false);
  const handleOpenPositionHint = () => setOpenPositionHint(true);
  const handleClosePositionHint = () => setOpenPositionHint(false);

  //Test
  const focusDiv = useRef<any>();

  useEffect(() => {
    const fetchInfo = async () => {
      const info = await getRandomPlayer();
      setClub(info.randomTeam); 
      setPlayer(info.randomPlayer); 
      SetSolution(info.randomPlayer.name.split(' '))
    }

    fetchInfo();
  }, []);

  useEffect(() => {
    document.getElementById("troussardle")?.focus();
    if(focusDiv.current) focusDiv.current.focus();
  },[focusDiv])

  if(!solution){
    return (
      <div>
        <h1>Error! Nah nuh solution fi yuh mi boss</h1>
      </div>
    );
  }

  function ClubGuess() {
    return (
      <Modal
        open={openClubHint}
        onClose={handleCloseClubHint}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            The Club This Player plays for is { club?.name }
          </Typography>
          <img src={ club?.crestUrl } className="photo pt" alt="logo" />
        </Box>
      </Modal>
    )
  }

  function PositionGuess(){
    return (
      <Modal
        open={openPositionHint}
        onClose={handleClosePositionHint}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            The Player's position is...
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {player?.position ? player?.position : 'GoalKeeper'} 
          </Typography>
        </Box>
      </Modal>
    )
  }
  

    return (
      <div className="App" id="troussardle" ref={focusDiv}>
        <div className="App">
          <div className="row">
            <p className="h1">Troussardle</p>
              <IconButton color="secondary" aria-label="add an alarm" className="space">
                <HelpOutlineIcon fontSize="large"/>
              </IconButton>
          </div>
          <div className="row">
            <Button  variant="contained" color="secondary" onClick={handleOpenClubHint}>Reveal Club</Button>
            <Button  className="ml" variant="contained" color="secondary" onClick={handleOpenPositionHint}>Reveal Position</Button>
          </div>
          {solution && solution[1] ? <Troussardle solution={solution[1]}/>: <Troussardle solution={solution[0]}/>}
          <div className="clubHint">
            <ClubGuess />
          </div>
          <div className="positionHint">
            <PositionGuess />
          </div>
        </div>
      </div>
    );
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '15px'
};

export default App;


