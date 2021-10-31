import React, {useEffect, useState} from 'react'
import {
    useParams,
    Link
  } from "react-router-dom"
import { Button, Grid, Paper } from '@material-ui/core';
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
        
        console.log(result.types)

        setPokemon(result)
        // console.log(result);
    }

    useEffect(() => {
        getPokemon();
    }, [])


    return(
        
        
        
        <Paper style={{margin:10, marginTop:20}}>
        <Grid container spacing={2}>

            <Grid item container spacing={2} xs={12}>
                
                <Grid item md={6} xs={6} style={{paddingLeft:20}}>
                    test
                </Grid>
                <Grid item md={6} xs={6} style={{textAlign:'right'}}>
                    test
                </Grid>
            </Grid>
           
            

            <Grid item xs={12} container spacing={2}>
                <Grid item xs={2} >
                    <Paper>
                    {pokemon != null &&
                    <PokemonCard 
                    className="pokemonCardStyle"
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.sprites.other.dream_world.front_default}
                    types={pokemon.types}
                    /> }
                    </Paper>
                </Grid>
                    

                <Grid item container xs={10}>

                        <Grid item xs={6}>
                            BIO
                        </Grid>
                        <Grid item xs={6}>
                            Training
                        </Grid>
                        <Grid item xs={12}>
                        Evolution
                        </Grid>
                        <Grid item xs={12}>
                            Stats
                        </Grid>

                </Grid>

                    

                

            </Grid>


            <Grid item md={3} xs={12}>
                <Link className="linkStyle" to="/home"><Button>Back</Button></Link>
            </Grid>
        </Grid>
        </Paper>
        

    )
}