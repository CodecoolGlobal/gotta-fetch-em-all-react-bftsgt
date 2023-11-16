
const ChoosePlayer = ({ allPokemon, onPlayerClick }) => {

  return (
    <div className="container">
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