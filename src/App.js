import './App.css';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import ListPokemon from './listPokemon';
import PokemonDetail from './pokemonDetail/pokemonDetail'
import Header from './Header/Header'
function App() {


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
