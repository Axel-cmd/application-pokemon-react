import React from "react";

function Listpokemon({id, name, image, type}) {
    return (
        <div className="listpokemon">
            <div className="number">
                <small>#0{id}</small>
            </div>
            <img src={image} />
            <div className="detail-wrapper"></div>
            <h3>{name}</h3>
            <small>{type}</small>

        </div>
    );
}

export default Listpokemon