import React, { useEffect, useState } from 'react'
import { keypadLetters } from '../essentials/keypadLetters';

export default function Keypad() {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
        setLetters([...keypadLetters])
    },[])

    return (
        <div className="keypad">
            {
                letters && letters.map((l) => {
                    return (
                        <div key={l.key}>
                            {l.key}
                        </div>
                    )
                })
            }
        </div>
    )
}
