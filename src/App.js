import './App.css';
// import { Select } from '@material-ui/core'
import { useState, useEffect } from 'react';
import Pagination from './pagination/Pagination'

function App() {

  const [allPokemon, setAllPokemons] = useState([])
  const [loadPokemon, setLoadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    //requête pour récupérer les 20 premiers pokémons
    const res = await fetch(loadPokemon)
    const { results: pokemons, next, previous } = await res.json()
    // console.log(next)
    setLoadPokemon(next);

    //fait une requete pour chaque pokémon
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

      {allPokemon.map((pokemon, key)=>(<li key={key}>{pokemon.name}</li>))}
      </ul>


      <Pagination items={allPokemon}/>
      <button onClick={() => getAllPokemons()}>next page</button>
    </div>
  );
}

export default App;
