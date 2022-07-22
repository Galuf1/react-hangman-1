function HangSnake({hangSnake}) {
    
    const createHangSnake = () => {
        let board = []
        for(let i = 0; i < hangSnake.length; i++) {
            if(hangSnake[i] !== 0){
                board.push(<span key={`${i}`}> {hangSnake[i]} </span>)
            }
        }
        return board
    }
        return(
            <div>
                {createHangSnake()}
            </div>
        )
    }
    
export default HangSnake