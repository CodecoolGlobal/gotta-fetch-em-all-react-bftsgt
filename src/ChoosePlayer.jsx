import '/src/styles.css';

const ChoosePlayer = ({ allPokemon, onPlayerClick }) => {
console.log(allPokemon)
  return (
    <div className="choosePlayerContainer">
      <h2 className='choose-poke'>Choose your Pokémon!</h2>
      <div className="poke-3">{allPokemon && allPokemon.map(pokemon => {
        return (
          <div key={pokemon.name} className="poke-card">
            <img className="poke-image" src={pokemon.sprites.front_default} onClick={() => onPlayerClick(pokemon)}/>
            <h3 className='poke-name' onClick={() => onPlayerClick(pokemon)}>{pokemon.name.toUpperCase()}</h3>
          </div>
        )
      })}</div>
      
    </div>
  );
}

export default ChoosePlayer;