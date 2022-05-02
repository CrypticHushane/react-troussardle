import React, { useEffect, useState } from 'react'
import useTroussardle from '../Logic/game'
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';
import { isMobile } from 'react-device-detect';

export default function Troussardle({ solution }) {
    const { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup } = useTroussardle(solution?.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        document.getElementById("troussardle").focus();

        if(isCorrect) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }

        if(turn >= 6) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    return (
        <div>
            <div className="pt">
                <input id="troussardle"  className="fonty" type="text" placeholder="Type Guess Here" defaultValue={currentGuess} onChange={() => currentGuess}/>
            </div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} wordLength={solution?.length} solution={solution}/>
            <Keypad usedKeys={usedKeys}/>
            { 
                showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>
            }
        </div>
    )
}
