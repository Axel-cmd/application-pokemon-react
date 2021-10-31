import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import ListPokemon from './listPokemon'

function App() {

  
  return (
  <div className="app-contaner">
    <h1>Pokemon Evolution</h1>

    <BrowserRouter>

      <ListPokemon/>

    </BrowserRouter>
  </div>
);
}

export default App;
