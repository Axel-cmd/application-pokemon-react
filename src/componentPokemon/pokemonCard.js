import './pokemonCard.css'
import React from "react";
import { Link } from "react-router-dom"

function PokemonCard({id, name, image, type}) {
    const style = `avatar-background thumb-container ${type}`;
    const typeImg = `${process.env.PUBLIC_URL}/type-icons/${type}.png`
    
    return (
        <Link to={`/pokemon/${id}`} >
            <div className={style}>
                <div className="number"><small>#0{id}</small></div>
                <img src={image} alt={name} />
                <div className="detail-wrapper">
                    <small>
                        <img alt={type} className="logo" src={typeImg}/>  
                    </small>
                    <h3>{name}</h3>
                </div>
            </div>
        </Link>
    )
}
export default PokemonCard