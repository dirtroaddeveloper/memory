import { useState, useEffect } from "react";
import PokemonContainer from "./PokemonContainer";
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([]);

  
  useEffect(() => {

    const fetchPoke = async () => {

      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=16")

        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          const data = await response.json();
          setPokemon(data.results);
          
        }



      } catch(err) {
        console.log("Error " + err)
      }
      
    }

    fetchPoke();
    
    
  }, []);

  
  return (
    <>
    <h1>Pokemon Pick Two</h1>
    <PokemonContainer pokemon={pokemon} />
    
    </>
  )
}

export default App
