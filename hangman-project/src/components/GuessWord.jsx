
function GuessWord(props) {

    const createBoard = () => {
        let board = []
        for(let i = 0; i < props.word.length; i++) {
            //loops through guest list and checks each letter in the word
            if(props.guess.includes(props.word[i])){
                //if exists, pushes the actual letter in word to board
                board.push(<span key={`${i}`}> {props.word[i]} </span>)
            } else {
                //else, pushes _ to board
                board.push(<span key={`${i}`}> _ </span>)
            }
        }
        return board
    }
    return(
        <div>{createBoard()}</div>
    )
}

export default GuessWord