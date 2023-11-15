import { useEffect, useState } from "react";

const ChoosePlayer = () => {

  const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl"
  ]

  const [allPokemon, setAllPokemon] = useState(null);

  useEffect(() => {

    async function fetchData() {
      const pokemonsArray = []
      for (const pokemonlink of usersPokemon) {
        const response = await fetch(pokemonlink)
        const pokeData = await response.json()
        pokemonsArray.push(pokeData)
      }
      setAllPokemon(pokemonsArray);
    }
    fetchData();
    console.log('loop finished');
  }, []);

  console.log(allPokemon)

  return (
    <div className="container">
      {allPokemon && allPokemon.map(pokemon => {
        return (
          <div key={pokemon.name}>
            <img src={pokemon.sprites.front_default}/>
            <p>{pokemon.name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default ChoosePlayer;