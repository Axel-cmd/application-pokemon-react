import React from 'react'
import { AppBar, Toolbar, Box, IconButton, Typography} from '@material-ui/core'
import './Header.css'
import ListPokemon from './listPokemon';
export default function Header(){

function Search (){
  const[searchTerm ,setSearchTerm] = useState("");
  return(
<div className="container-header">
  <img className="img" src={`${process.env.PUBLIC_URL}/logo/pikacu.jpg`}alt=""/>
    <img className="img" src={`${process.env.PUBLIC_URL}/logo/pokemon.png`}alt=""/>
      <div className= "Search">
        <imput type="Text"
         placeholder="Search..."
         onChange={(event) => {
           setSearchTerm(event.target.value)
         }}
        />
      </div>
  </div>
);
}

export default Search;
