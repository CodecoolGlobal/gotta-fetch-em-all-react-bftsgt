import { useState, useEffect } from 'react';

const Encounter = ({ encounter, battleClick }) => {
  const [encounteredPokemon, setEncounteredPokemon] = useState(null);
  useEffect(() => {
    const fetchEncounteredPokemon = async () => {
      console.log(encounter)
      try {
        if (encounter) {
          const response = await fetch(`https://pokeapi.co/api/v2/location-area/${encounter}/`);
          const data = await response.json();
          const randomNumber = Math.floor(Math.random() * data.pokemon_encounters.length);
          const pokemonUrl = data.pokemon_encounters[randomNumber].pokemon.url;
          const pokemonResponse = await fetch(pokemonUrl);
          const pokemonData = await pokemonResponse.json();

          setEncounteredPokemon(pokemonData);
        }
      } catch (error) {
        console.error('fetch error', error);
      }
    };

    fetchEncounteredPokemon();
  }, [encounter]);

 return (
  <div className='encounter-container'>
    <h2>Encounter!</h2>
    {encounteredPokemon && (
      <div className='poke-card'>
        {console.log(encounter)}
        <img className='poke-image' src={encounteredPokemon.sprites.front_default} alt={encounteredPokemon.name} onClick={() => battleClick(encounteredPokemon)} />
        <div className='poke-name' onClick={() => battleClick(encounteredPokemon)}>{encounteredPokemon.name.toUpperCase()}</div>
      </div>
    )}
  </div>
);

};

export default Encounter;
