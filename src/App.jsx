import React from 'react';
import ChoosePlayer from './ChoosePlayer';
import LocationsList from './LocationsList';
import Encounter from './Encounter';
import Battlefield from './Battlefield';
import { useState, useEffect } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState('Chooseplayer');
  const [allPokemon, setAllPokemon] = useState(null);
  const [encounterLocation, setEncounterLocation] = useState(null);
  const [playerPoke, setPlayerPoke] = useState(null)
  const [opponentPoke, setOpponentPoke] = useState(null)
  const [usersPokemon, setUsersPokemon] = useState([
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl"
  ])

  function onPlayerClick(pokemon) {
    setCurrentPage('LocationsList')
    setPlayerPoke(pokemon)
  }
  function onLocationsClick(index) {
    setCurrentPage('Encounter');
    setEncounterLocation(index);
  }
  function battleClick(encounteredPokemon) {
    setCurrentPage('Battlefield')
    setOpponentPoke(encounteredPokemon)
  }
  function endClick() {
    setCurrentPage('Chooseplayer')
  }

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
  }, [usersPokemon]);


  if (currentPage === 'Chooseplayer') {
    return (
      <div>
        <ChoosePlayer allPokemon={allPokemon} onPlayerClick={onPlayerClick} />
      </div>
    );
  } else if (currentPage === 'LocationsList') {
    return (
      <div>
        <LocationsList onLocationsClick={onLocationsClick} />
      </div>
    );
  } else if (currentPage === 'Encounter') {
    return (
      <div>
        <Encounter encounter={encounterLocation} battleClick={battleClick} />
      </div>
    );
  } else if (currentPage === 'Battlefield') {
    return (
      <div>
        <Battlefield endClick={endClick} setOpponentPoke={setOpponentPoke} playerPoke={playerPoke} opponentPoke={opponentPoke} setUsersPokemon={setUsersPokemon} usersPokemon={usersPokemon} setPlayerPoke={setPlayerPoke} />
      </div>
    );
  }
}

export default App;