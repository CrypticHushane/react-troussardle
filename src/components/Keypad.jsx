import React, { useEffect, useState } from 'react'
import { keypadLetters } from '../essentials/keypadLetters';

export default function Keypad({ usedKeys }) {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
        setLetters([...keypadLetters])
    },[])

    return (
        <div className="keypad">
            {
                letters && letters.map((l) => {
                    const colour = usedKeys[l.key]
                    return (
                        <div key={l.key} className={colour}>
                            {l.key}
                        </div>
                    )
                })
            }
        </div>
    )
}
