import { useState } from 'react'
import CharInput from './components/CharInput'
import UsedLetters from './components/UsedLetters'
import GuessWord from './components/GuessWord'
import HangSnake from './components/HangSnake'
import './App.css'

function App() {

  const words = [
    "marriageproof",
    "minionette",
    "unlichened",
    "electrocardiographic",
    "hippophagy",
    "polyphore",
    "debellate",
    "zyga",
    "antedonin",
    "hirudinean",
    "foremastman",
    "metapolitics",
    "bianisidine",
    "gros",
    "superindifferent",
    "collar",
    "maculose",
    "unphysically",
    "narrowish",
    "Bartonia",
    "inadherent",
    "arbitrary",
    "forefeelingly",
    "palame",
    "vina",
    "northwestward",
  ];
//gets random word from arr
  function randomWord(){
    let randomNum = Math.floor(Math.random() * words.length)
    return(words[randomNum])
  }

  let hangsnake = ['H','A','N','G','S','N','A','K','E']

  const [word, setWord] = useState(randomWord())
  const [guess, setGuess] = useState([])
  const [snake, setSnake] = useState(hangsnake)
  const [count, setCount] = useState(hangsnake.length -1)

  const updateCounter = () => {
    setCount(prevCount => prevCount - 1)
  }
  

  //gets user input guess and sets arr to 
  const getGuess = (addLetter) => {
    let guessArr = [...guess, addLetter]
    setGuess(guessArr)
    let letterGuess = document.getElementById('guessInput').value 
    checkGuess(letterGuess)
  }

  const checkGuess = (char) => {
    if (word.includes(char)){
      return true
    } else {
      updateCounter()
      removeLastLetter()
    }
  }

  const removeLastLetter = () => {
    let arr = [...hangsnake]
    let index = count
    if (index > 0) {
      arr.splice(count)
      setSnake(arr)
    } else {
      setSnake(0)
    }
  }

  return (
    <div className="App">
      <h1>Welcome To Hangman!</h1>
      <HangSnake hangSnake = {snake} />
      <h3>Please enter a letter below:</h3>
      <CharInput getGuess={getGuess} />
      <GuessWord word={word} guess={guess}/>
      <UsedLetters guess={guess}/>
    </div>
  )
}

export default App
