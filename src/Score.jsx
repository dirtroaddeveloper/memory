import { useState } from "react";
const Score = ({ used }) => {
    
    const [ score, setScore ] = useState(0);


    return(
        <>
        <h2>Score: {score}</h2>
        </>
    )
}

export default Score;