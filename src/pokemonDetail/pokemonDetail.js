import React from 'react'
import {
    useParams
  } from "react-router-dom"
export default function PokemonDetail ()
{
    //récupérer le paramètre id passé dans l'url
    const { id } = useParams();

    return(

        <p> autre page {id} </p>

    )
}