import React from 'react'
import Row from './Row'

export default function Grid({ turn, currentGuess, guesses, wordLength }) {
  return (
    <div>
      {
        guesses.map((g, i) => {
          if(turn === i){
            return <Row key={i} wordLength={wordLength} currentGuess={currentGuess}/>
          }
          return <Row key={i} wordLength={wordLength} guess={g}/>
        })
      }
    </div>
  )
}
