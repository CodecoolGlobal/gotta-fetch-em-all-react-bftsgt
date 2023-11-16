import React from 'react';
import ChoosePlayer from './ChoosePlayer';
import LocationsList from './LocationsList';
import Encounter from './Encounter';
import Battlefield from './Battlefield';
import { useState, useEffect } from 'react';

function App() {

  const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl"
  ]
  const [currentPage, setCurrentPage] = useState('Chooseplayer');
  const [allPokemon, setAllPokemon] = useState(null);
  const [encounterLocation, setEncounterLocation] = useState(null);


  function onPlayerClick(pokemon) {
    setCurrentPage('LocationsList')
    localStorage.setItem('PlayerPoke', JSON.stringify(pokemon))
  }
  function onLocationsClick(index, locations) {
     setCurrentPage('Encounter');
     setEncounterLocation(index);
     console.log(locations[index])
   }
   function battleClick(encounteredPokemon){
    setCurrentPage('Battlefield')
    localStorage.setItem('Opponent', JSON.stringify(encounteredPokemon))
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
  }, []);


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
  } else if (currentPage === 'Encounter'){
    return (
      <div>
        <Encounter encounter={encounterLocation} battleClick={battleClick}/>
      </div>
    );
  } else if (currentPage === 'Battlefield'){
    return (
      <div>
        <Battlefield />
      </div>
    );
  }
}

export default App;