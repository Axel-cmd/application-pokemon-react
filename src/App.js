import './App.css';
// import { Select } from '@material-ui/core'
import { useState, useEffect } from 'react';
import Listpokemon from './listpokemon';

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
    setAllPokemons(pokemonBatch);}

    useEffect(() => {getAllPokemons()
  }, [])

  return (
    <div className="App">
      <div className="all-container">
        {console.log(allPokemon)}
        {allPokemon.map((pokemon, index) =>
        <Listpokemon
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.other.dream_world.front_default}
        key={index} /> 
        )} 
      </div>
    </div>
  )};

export default App;
