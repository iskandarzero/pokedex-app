export async function getPokemon(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
  const response = await fetch(url);
  const data = response.json();

  return data;
}