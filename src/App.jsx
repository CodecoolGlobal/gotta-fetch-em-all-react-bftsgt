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

  const [allPokemon, setAllPokemon] = useState(null);
  // const [pokeID, setPokeID] = useState('krumpli')
  let currentPage = 'Chooseplayer'

  function onPlayerClick() {
      setAllPokemon(null)
      console.log(currentPage)
      return (
        <div>
          <Encounter />
        </div>  
    );
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
        <ChoosePlayer allPokemon={allPokemon} onPlayerClick={onPlayerClick}/>
      </div>  
  );
} else if (currentPage === 'Encounter'){
  console.log('encounter?')
  return (
    <div>
      <Encounter />
    </div>  
);
}


}

export default App;

// return (
//   <Router>
//     <div>
//       <Routes>
//         <Route path="/" element={<ChoosePlayer allPokemon={allPokemon} pokeID={pokeID} pokename={pokename}/>} />
//         <Route path="/locations" element={<LocationsList />} />
//         <Route path="/encounter/:locationId" element={<Encounter />} />
//         <Route path='/battlefield' element={<Battlefield />} />
//       </Routes>
//     </div>
//   </Router>
// );