import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Encounter = () => {
  // const { locationId } = useParams()
  // const [encounteredPokemon, setEncounteredPokemon] = useState(null);
  // const [opponent, setOpponent] = useState(null)

  // let opponentPokemon;

  // useEffect(() => {
  //   const fetchEncounteredPokemon = async () => {
  //     try {
  //       const response = await fetch(`https://pokeapi.co/api/v2/location-area/${locationId}/`);
  //       const data = await response.json();

  //       const randomNumber = Math.floor(Math.random() * data.pokemon_encounters.length);
  //       const pokemonUrl = data.pokemon_encounters[randomNumber].pokemon.url;
  //       const pokemonResponse = await fetch(pokemonUrl);
  //       const pokemonData = await pokemonResponse.json();

  //       console.log(opponent);
  //       opponentPokemon = pokemonData;
  //       console.log(opponentPokemon);

  //       setEncounteredPokemon(pokemonData);
  //     } catch (error) {
  //       console.error('fetch error', error);
  //     }
  //   };

  //   fetchEncounteredPokemon();
  // }, [locationId]);

  return (
    <div>
      <h1>haha</h1>
    </div>
  );
};

export default Encounter;