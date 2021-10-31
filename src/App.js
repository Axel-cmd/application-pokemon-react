import './App.css';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import  {useEffect } from 'react';
import ListPokemon from './listPokemon';
import PokemonDetail from './pokemonDetail/pokemonDetail'
import Header from './Header/Header'
function App() {

  useEffect(() => {
    <Link to="/home" />
  }, [])

  return (
    <>
    <Header/>
  <div className="app-contaner">

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
  </>
);
}

export default App;
