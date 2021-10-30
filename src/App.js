import './App.css';
// import { Button } from '@material-ui/core'
import { useState, useEffect } from 'react';
import Listpokemon from './listpokemon';
// import Accueil from './Accueil';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pagination from './pagination/Pagination'

function App() {

  const [previousPage, setPrevious] = useState('');
  const [nextPage, setNext] = useState('');

  const [allPokemon, setAllPokemons] = useState([]);
  const [loadPokemon, setLoadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async (url) => {
    // console.log(loadPokemon)
    const res = await fetch(url);
    const { results: pokemons, next, previous } = await res.json();


    const pokemonBatch = await Promise.all(pokemons.map(async ({ url }) => {
      const res = await fetch(url);
      return res.json();
    }));
    setAllPokemons(pokemonBatch);
    // console.log(allPokemon)
    setPrevious(previous);
    setNext(next);
  }


  useEffect(() => {
    getAllPokemons(loadPokemon);
  
  }, [])


  const setPreviousPage = async () =>
  {
    
    if(previousPage != null)
    {
      getAllPokemons(previousPage);
    }
  }

  const setNextPage = async () => {
    if(nextPage != null)
    {
      getAllPokemons(nextPage);
    }
  }
  
  return (
    <div className="app-contaner">
    <h1>Pokemon Evolution</h1>
    <div className="pokemon-container">
      <div className="all-container">
        {/* {console.log(allPokemon)} */}
        {allPokemon.map((pokemon, index) =>
        <Listpokemon
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.other.dream_world.front_default}
        key={index} /> 
        )} 
      </div>
      

      {/* <Pagination onChangePage={(value) => {
        if(value == "next")
        {
          setNextPage()
        }else 
        {
          setPreviousPage()
        }
      }}/> */}
      
      <Pagination onChangePage={setPreviousPage} type="Précédent"/>
      <Pagination onChangePage={setNextPage} type="Suivant"/>

    </div>
  </div>
);
}

export default App;
