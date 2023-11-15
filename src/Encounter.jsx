import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Encounter = () => {

  const {locationId} = useParams()
  const [encounteredPokemon, setEncounteredPokemon] = useState(null);

  useEffect(() => {
    const fetchEncounteredPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/location-area/${locationId}/`);
        const data = await response.json();

        const randomNumber = Math.floor(Math.random() * data.pokemon_encounters.length);
        const pokemonUrl = data.pokemon_encounters[randomNumber].pokemon.url;
        const pokemonResponse = await fetch(pokemonUrl);
        const pokemonData = await pokemonResponse.json();
        console.log(pokemonData)

        setEncounteredPokemon(pokemonData);
      } catch (error) {
        console.error('fetch error', error);
      }
    };

    fetchEncounteredPokemon();
  }, [locationId]);

  return (
    <div>
     {encounteredPokemon && <p>{encounteredPokemon.name}</p>}
     {encounteredPokemon && <img src={encounteredPokemon.sprites.front_default}/>}
    </div>
  );
};

export default Encounter;