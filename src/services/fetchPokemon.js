export async function fetchPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
  const response = await res.json();

  return response;
}
