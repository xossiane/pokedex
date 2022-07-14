const fetchPokemon = async (name) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const response = await res.json();

  return response;
};

export default fetchPokemon;
