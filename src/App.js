import './App.css';
// import { Select } from '@material-ui/core'
import { useState, useEffect } from 'react';

function App() {

  const [allPokemon, setAllPokemons] = useState([])
  const [loadPokemon, setLoadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const res = await fetch(loadPokemon)
    const data = await res.json()

    setLoadPokemon(data.next)
    // console.log(data)

    function createPokemonObject(result)
    {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      
      });
    }
    
    createPokemonObject(data.results)
    await console.log(allPokemon);
  }

  
  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="App">
      {/* {console.log(allPokemon)} */}
    </div>
  );
}

export default App;
