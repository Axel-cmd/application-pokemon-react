import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ListPokemon from './listPokemon';
import PokemonDetail from './pokemonDetail/pokemonDetail'
import Header from './Header/Header'
function App() {


  return (
    <>
    <Header/>
  

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
