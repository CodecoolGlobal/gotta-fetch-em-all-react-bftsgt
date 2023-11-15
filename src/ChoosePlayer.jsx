import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const ChoosePlayer = ({ allPokemon, onPlayerClick }) => {
  // console.log(allPokemon)

  return (
    <div className="container">
      {allPokemon && allPokemon.map(pokemon => {
        return (
          <div key={pokemon.name}>
            <img src={pokemon.sprites.front_default} />
            <h3 onClick={(e) => {
                onPlayerClick()
            }}>{pokemon.name}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default ChoosePlayer;