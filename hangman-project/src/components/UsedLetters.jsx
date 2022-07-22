function UsedLetters(props) {

    return(
        <div>
            <ul>
                {props.guess.map((x, index) => (
                    <li key={index}>{x}</li>
                ))}
            </ul>
        </div>
    )
}

export default UsedLetters