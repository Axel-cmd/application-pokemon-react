import './App.css';
// import { Select } from '@material-ui/core'
import { useState, useEffect } from 'react';
import Listpokemon from './listpokemon';
import Accueil from './Accueil';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
    <div className="app-contaner">
    <h1>Pokemon Evolution</h1>
    <div className="pokemon-container">
      <div className="all-container">
        {allPokemon.map( (pokemon, index) => 
          <Listpokemon
            key={index}
            id={pokemon.id}
            image={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
          />)}
        
      </div>
    </div>
  </div>
);
}

export default App;
