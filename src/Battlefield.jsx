import ChoosePlayer from "./ChoosePlayer";
import Encounter from "./Encounter";

const Battlefield = ({ endClick, playerPoke, opponentPoke, setUsersPokemon, usersPokemon }) => {
  const pokemon = playerPoke
  const opponent = opponentPoke
  const playerPokemonName = pokemon.name;
  const opponentPokemonName = opponent.name;
  console.log(pokemon);
  console.log(opponent.species.url);

  async function getPokemonDetails(pokemonName) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

      const response = await fetch(url);
      const data = await response.json();

      const name = data.name;
      const hp = data.stats[0].base_stat;
      const attack = data.stats[1].base_stat;
      const defense = data.stats[2].base_stat;

      return { name, hp, attack, defense };
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  }

  //Battle

  /*   const playerPokemons = []; */

  function Pokemon(name, hp, attack, defense) {
    return {
      name: name,
      hp: hp,
      attack: attack,
      defense: defense,
    };
  }

  function calculateDamage(attacker, defender) {
    const Z = Math.floor(Math.random() * (255 - 217 + 1)) + 217;
    const damage =
      (((2 / 5 + 2) * attacker.attack * 60) / defender.defense / 50 + 2) *
      (Z / 255);
    return Math.floor(damage);
  }

  async function encounter(pokemonName) {
    // Wait for both player and opponent details to be fetched
    const playerPokemonDetails = await getPokemonDetails(playerPokemonName);
    const opponentPokemonDetails = await getPokemonDetails(opponentPokemonName);

    // Create Pokemon objects
    const playerPokemon = Pokemon(
      playerPokemonDetails.name,
      playerPokemonDetails.hp,
      playerPokemonDetails.attack,
      playerPokemonDetails.defense
    );
    const opponentPokemon = Pokemon(
      opponentPokemonDetails.name,
      opponentPokemonDetails.hp,
      opponentPokemonDetails.attack,
      opponentPokemonDetails.defense
    );

    let counter = 0;
    let encounterResult = null; // Flag to track encounter result

    while (playerPokemon.hp > 0 && opponentPokemon.hp > 0) {
      console.log(playerPokemon.hp)
      // Player attacks
      const damageToOpponent = calculateDamage(playerPokemon, opponentPokemon);
      opponentPokemon.hp -= damageToOpponent;
      setTimeout(() => {
        console.log(
          `${playerPokemon.name} dealt ${damageToOpponent} damage to ${opponentPokemon.name}.`
        );
      }, (counter += 300));

      // Check if opponent's Pokémon's HP is zero
      if (opponentPokemon.hp <= 0) {
        setTimeout(() => {
          console.log(`${opponentPokemon.name} fainted! You captured it.`);
          encounterResult = "playerWins"; // Set the flag
          alert(`You captured: ${pokemonName}`)
        }, (counter += 300));
        setUsersPokemon([...usersPokemon, `https://pokeapi.co/api/v2/pokemon/${pokemonName}`])
        console.log(usersPokemon);
        break;
      }

      // Opponent attacks
      const damageToPlayer = calculateDamage(opponentPokemon, playerPokemon);
      playerPokemon.hp -= damageToPlayer;
      setTimeout(() => {
        console.log(
          `${opponentPokemon.name} dealt ${damageToPlayer} damage to ${playerPokemon.name}.`
        );
      }, (counter += 300));

      // Check if player's Pokémon's HP is zero
      if (playerPokemon.hp <= 0) {
        setTimeout(() => {
          console.log(`${playerPokemon.name} fainted! The encounter ends.`);
          encounterResult = "opponentWins"; // Set the flag
          setUsersPokemon([...usersPokemon.filter(pokemonUrl => pokemonUrl !== `https://pokeapi.co/api/v2/pokemon/${playerPokemon.name}`)]);
          alert(`You lost your pokemon: ${playerPokemon.name}`)
        }, (counter += 300));
        break;
      }
    }

    // After the encounter, show available locations for the player to go next
    setTimeout(() => {
      if (encounterResult === "playerWins") {
        console.log(
          "Encounter ended. You captured the opponent Pokémon. Available locations: ..."
        );
      } else if (encounterResult === "opponentWins") {
        console.log(
          "Encounter ended. Your Pokémon fainted. Available locations: ..."
        );
      } else {
        console.log("Encounter ended. Available locations: ...");
      }
    }, (counter += 100));
  }


  console.log('Encounter returned')

  return (
    <div className="battlefield-container">
        <button id="Fight" onClick={() => encounter(opponentPokemonName)}>Fight!</button>
      <div className="battlefield">
        <div className="poke-card">
          <div className="poke-name">{playerPokemonName.toUpperCase()}</div>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <img src="src/versus-icon.png" className="vs-icon" />
        <div className="poke-card">
          <img
            src={opponent.sprites.front_default}
            alt={opponent.name}
          />
          <div className="poke-name">{opponentPokemonName.toUpperCase()}</div>
        </div>
      </div>
        <button id="Back" onClick={() => endClick()}>Back To HomePage</button>
    </div>
  );
};

export default Battlefield;
