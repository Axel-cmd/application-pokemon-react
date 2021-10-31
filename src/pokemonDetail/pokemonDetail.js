import React, {useEffect} from 'react'
import {
    useParams,
    Link
  } from "react-router-dom"
import { Button } from '@material-ui/core';


export default function PokemonDetail ()
{
    //récupérer le paramètre id passé dans l'url
    const { id } = useParams();
    
    
    const getPokemon = async () =>
    {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result = await res.json();

        console.log(result);
    }

    useEffect(() => {
        getPokemon();
    }, [])


    return(
        <>
            <Link className="linkStyle" to="/home"><Button>Back</Button></Link>
            <p> autre page {id} </p>
        </>
    )
}