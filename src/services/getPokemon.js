export const getPokemon = async (res) => {
  const pokemonData = [];
  for (let k in res) {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${res[k].name}`
    );
    const dat = await result.json();
    pokemonData.push(dat);
  }
return pokemonData;

};