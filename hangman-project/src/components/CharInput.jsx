import { useState } from 'react'

function CharInput(props) {

    const getWord = () => {
        props.getGuess(document.getElementById('guessInput').value)
    }

    return(
        <div>
            <input
                type="text"
                id="guessInput"
            />
            <br></br>
            <button onClick={getWord}>Submit Letter</button>
        </div>
    )
}

export default CharInput