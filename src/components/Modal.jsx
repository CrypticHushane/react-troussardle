import React from 'react'
import Button from '@mui/material/Button';

export default function Modal({ isCorrect, turn, solution }) {
    function refreshPage() {
        window.location.reload(false);
    }

  return (
    <div className="modal">
        {isCorrect && (
            <div>
                <h1>You Guessed It!!</h1>
                <p className="solution">{solution}</p>
                <p>You got it in {turn} {turn === 1 ? 'guess' : 'guesses'}</p>
                <Button  variant="contained" color="secondary" onClick={refreshPage}>Play Again!</Button>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Jah, Ruff pon your side</h1>
                <p className="solution">Player: {solution}</p>
                <p>Try Again? </p>
                <Button  variant="contained" color="secondary" onClick={refreshPage}>Play Again!</Button>
            </div>
        )}
    </div>
  )
}
