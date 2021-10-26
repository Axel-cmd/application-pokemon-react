import './App.css';
// import { Select } from '@material-ui/core'
import { useState, useEffect } from 'react';

function App() {

  const [allPokemon, setAllPokemons] = useState([])
  const [loadPokemon, setLoadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const res = await fetch(loadPokemon)
    const { results: pokemons } = await res.json()

    const pokemonBatch = await Promise.all(pokemons.map(async ({ url }) => {
      const res = await fetch(url)
      return res.json()
    }));
    setAllPokemons(pokemonBatch);
  }


  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="App">
      <ul>

      {allPokemon.map((pokemon)=>(<li>{pokemon.name}</li>))}
      </ul>
    </div>
  );
}

export default App;
