import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState({});

  
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


  console.log(pokemon[0].url)
  return (
    <>
    <h1>Pokemon Pick Two</h1>

    </>
  )
}

export default App
