export async function pokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
  const datas = await response.json();

  return datas;
}
