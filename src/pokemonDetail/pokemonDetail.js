import React, {useEffect, useState} from 'react'
import {
    useParams,
    Link
  } from "react-router-dom"
import { Button } from '@material-ui/core';
import PokemonCard from '../componentPokemon/pokemonCard'


export default function PokemonDetail ()
{
    //récupérer le paramètre id passé dans l'url
    const { id } = useParams();
    
    const [pokemon, setPokemon] =  useState();
    
    const getPokemon = async () =>
    {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result = await res.json();

        setPokemon(result)
        // console.log(result);
    }

    useEffect(() => {
        getPokemon();
    }, [])


    return(
        <>
            {pokemon != null &&
            <PokemonCard
            className="pokemonCardStyle"
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            /> }
            
            
            
            
            <Link className="linkStyle" to="/home"><Button>Back</Button></Link>
        </>
    )
}