import React from 'react'

export default function Row({ wordLength, guess, currentGuess }) {
  const rows = [...Array(wordLength)];

  if(guess){
    return (
      <div className="row past">
      {
        guess.map((l, i) => {
          return (
            <div key={i} className={l.color}>{l.key}</div>
          )
        })
      }
    </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">{letter}</div>
        ))}
        {[...Array(wordLength - letters.length)].map((_,i) => (
          <div key={i}></div>
        ))}
      </div>
    )
  }

  return (
    <div className="row">
      {
        rows.map((g, i) => {
          return (
            <div key={i}></div>
          )
        })
      }
    </div>
  )
}
