import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ListPokemon from './listPokemon';
import PokemonDetail from './pokemonDetail/pokemonDetail'
import Header from './Header/Header'
import Dark from './Header/dark'
import Search from './Header/Search'

function App() {


  return (
    <>
    <Header/>
    <Dark/>
    <Search/>


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

  </>
);
}

export default App;
