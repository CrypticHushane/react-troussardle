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
import { isMobile } from 'react-device-detect';

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
  const searchInput = useRef<any>(null)

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
    if(isMobile){
      searchInput?.current?.focus()
    }
  },[])

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
          <div className="row">
            <Button  variant="contained" color="secondary" onClick={handleOpenClubHint}>Reveal Club</Button>
            <Button  className="ml" variant="contained" color="secondary" onClick={handleOpenPositionHint}>Reveal Position</Button>
          </div>
          <input hidden ref={searchInput} />
          <h3>{solution && solution[1] ? <Troussardle solution={solution[1]}/>: <Troussardle solution={solution[0]}/>}</h3>
          <div className="clubHint">
            <Modal
              open={openClubHint}
              onClose={handleCloseClubHint}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              disableAutoFocus
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  The Club This Player plays for is...
                </Typography>
                <img src={club?.crestUrl} className="photo" alt="logo" />
              </Box>
            </Modal>
          </div>
          <div className="positionHint">
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
                  {player?.position} 
                </Typography>
              </Box>
            </Modal>
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


