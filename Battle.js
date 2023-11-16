//Picking random Pokémon

function getRandomPokemon() {
  const randomPokemonId = Math.floor(Math.random() * 1017) + 1;
  return randomPokemonId;
}

//Fetching Pokémon

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
    console.error('Error fetching Pokémon details:', error);
  }
}

//Battle

const playerPokemons = [];

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
    ((((2 / 5 + 2) * attacker.attack * 60) / defender.defense) / 50 + 2) * (Z / 255);
  return Math.floor(damage);
}

async function encounter() {
  // Wait for both player and opponent details to be fetched
  const playerPokemonDetails = await getPokemonDetails(getRandomPokemon());
  const opponentPokemonDetails = await getPokemonDetails(getRandomPokemon());

  // Create Pokemon objects
  const playerPokemon = Pokemon(playerPokemonDetails.name, playerPokemonDetails.hp, playerPokemonDetails.attack, playerPokemonDetails.defense);
  const opponentPokemon = Pokemon(opponentPokemonDetails.name, opponentPokemonDetails.hp, opponentPokemonDetails.attack, opponentPokemonDetails.defense);

  while (playerPokemon.hp > 0 && opponentPokemon.hp > 0) {
    // Player attacks
    const damageToOpponent = calculateDamage(playerPokemon, opponentPokemon);
    opponentPokemon.hp -= damageToOpponent;
    console.log(`${playerPokemon.name} dealt ${damageToOpponent} damage to ${opponentPokemon.name}.`);

    // Check if opponent's Pokémon's HP is zero
    if (opponentPokemon.hp <= 0) {
      console.log(`${opponentPokemon.name} fainted! You captured it.`);
      // Add opponentPokémon to the player's list of Pokémon
      playerPokemons.push(opponentPokemon);
    }

    // Opponent attacks
    const damageToPlayer = calculateDamage(opponentPokemon, playerPokemon);
    playerPokemon.hp -= damageToPlayer;
    console.log(`${opponentPokemon.name} dealt ${damageToPlayer} damage to ${playerPokemon.name}.`);

    // Check if player's Pokémon's HP is zero
    if (playerPokemon.hp <= 0) {
      console.log(`${playerPokemon.name} fainted! The encounter ends.`);
      break;
    }
  }

  // After the encounter, show available locations for the player to go next
  console.log("Encounter ended. Available locations: ...");
}

encounter();