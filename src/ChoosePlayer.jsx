import '/src/styles.css';

const ChoosePlayer = ({ allPokemon, onPlayerClick }) => {
console.log(allPokemon)
  return (
    <div className="choosePlayerContainer">
      <h2>Choose your Pokémon!</h2>
      {allPokemon && allPokemon.map(pokemon => {
        return (
          <div key={pokemon.name}>
            <img src={pokemon.sprites.front_default} />
            <h3 onClick={() => {
                onPlayerClick(pokemon)
            }}>{pokemon.name}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default ChoosePlayer;