import { useState } from "react";
import PokeCard from "./PokeCard";
import Score from "./Score";

const PokemonContainer = ({ pokemon }) => {
    const [usedPoke, setUsedPoke] = useState([]);

    const handleClick = (pokeName) => {   
        
        setUsedPoke((prevArr) => [...prevArr, pokeName]);
        
    }
    console.log(usedPoke)
    return(
        <>
        <h1>Hi</h1>
        <Score used={usedPoke} />
        {!pokemon ? <p>Loading.... </p> : (pokemon.map((poke) => <PokeCard handleClick={handleClick} poke={poke} />))}
        
        </>
        
    )

}


export default PokemonContainer;