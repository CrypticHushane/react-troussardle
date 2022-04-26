import React, { useEffect } from 'react'
import useTroussardle from '../Logic/game'
import Grid from './Grid';
import Keypad from './Keypad';

export default function Troussardle({ solution }) {
    const { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup } = useTroussardle(solution?.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    return (
        <div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} wordLength={solution?.length} solution={solution}/>
            <Keypad usedKeys={usedKeys}/>
        </div>
    )
}
