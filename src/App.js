import './App.css';
// import { Select } from '@material-ui/core'
import { useState, useEffect } from 'react';
import Listpokemon from './listpokemon';
<<<<<<< HEAD
import Pagination from './pagination/Pagination'
=======
>>>>>>> develop

function App() {

  const [page, setPage] = useState('')

  const [allPokemon, setAllPokemons] = useState([])
  const [loadPokemon, setLoadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const res = await fetch(loadPokemon)
    const { results: pokemons, next } = await res.json()

    // console.log('https://pokeapi.co/api/v2/pokemon?offset=40&limit=20')
    // setLoadPokemon(next);

    const pokemonBatch = await Promise.all(pokemons.map(async ({ url }) => {
      const res = await fetch(url)
      return res.json()
    }));
    setAllPokemons(pokemonBatch);
  
  }


  useEffect(() => {
    getAllPokemons()
  
  }, [])


  // const handleChangePage = async (currentPage) =>{
  //   let value = (currentPage+1)*2 

  //   console.log(value+'0');
  //   // let url = `https://pokeapi.co/api/v2/pokemon?offset=40&limit=20`;
  // }
  
  return (
    <div className="app-contaner">
    <h1>Pokemon Evolution</h1>
    <div className="pokemon-container">
      <div className="all-container">
<<<<<<< HEAD
        {/* {console.log(allPokemon)} */}
        {allPokemon.map((pokemon, index) =>
        <Listpokemon
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.other.dream_world.front_default}
        key={index} /> 
        )} 
=======
        {allPokemon.map( (pokemon, index) => 
          <Listpokemon
            key={index}
            id={pokemon.id}
            image={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
          />)}
        
>>>>>>> develop
      </div>
      <Pagination items={allPokemon} onChange={(e) =>{setPage(e.selected); console.log(page)}}/>
      {/* <button onClick={getAllPokemons}>test</button> */}
    </div>
  </div>
);
}

export default App;
