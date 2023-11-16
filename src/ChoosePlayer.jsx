import '/src/styles.css';

const ChoosePlayer = ({ allPokemon, onPlayerClick }) => {

  return (
    <div className="choosePlayerContainer">
      <h2>Choose your Pokémon!</h2>
      {allPokemon && allPokemon.map(pokemon => {
        return (
          <div key={pokemon.name}>
            <h3 onClick={() => {
                onPlayerClick(pokemon)
            }}>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} />
          </div>
        )
      })}
    </div>
  );
}

export default ChoosePlayer;