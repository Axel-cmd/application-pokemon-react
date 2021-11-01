import React, {useState} from 'react'
// import { AppBar, Toolbar, Box, IconButton, Typography} from '@material-ui/core'
import './Header.css'

export default function Header(){


  const[searchTerm ,setSearchTerm] = useState("");
  console.log(searchTerm)
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

// export default Search;
