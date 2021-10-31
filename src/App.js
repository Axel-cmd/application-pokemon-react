import './App.css';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import  {useEffect } from 'react';
import ListPokemon from './listPokemon';
import PokemonDetail from './pokemonDetail/pokemonDetail'

function App() {

  useEffect(() => {
    <Link to="/home" />
  }, [])
  
  return (
  <div className="app-contaner">
    <h1>Pokemon Evolution</h1>

    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => {
          return(
            <Redirect to="/home" />
          )
        }} />
        <Route path="/home" component={ListPokemon} />
        <Route path="/pokemon/:id" component={PokemonDetail}/>
      </Switch>
    </BrowserRouter>
  </div>
);
}

export default App;
