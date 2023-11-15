import { useEffect, useState } from "react";

const ChoosePlayer = () => {

  const usersPokemon = [];

  fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then(res => {
      return res.json()
    })
    .then(pokemon => {
      usersPokemon.push(pokemon)
    });
  fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(res => {
      return res.json()
    })
    .then(pokemon => {
      usersPokemon.push(pokemon)
    })
  fetch("https://pokeapi.co/api/v2/pokemon/poliwhirl")
    .then(res => {
      return res.json()
    })
    .then(pokemon => {
      usersPokemon.push(pokemon)
    })

  console.log(usersPokemon)

  return (
    <div className="container">
        {usersPokemon.map((pokemon) => {
          console.log(pokemon);
          return (
            <div key={pokemon.name}>
              <p>{pokemon.name}</p>
            </div>
          )
        })}
    </div>
  );
}

export default ChoosePlayer;