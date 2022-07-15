export async function fetchPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151"); //pega a lista do 151 pokemons 
  const response = await res.json(); //transforma em json o que veio no res

  return response;
}
