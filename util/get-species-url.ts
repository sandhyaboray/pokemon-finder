/**
 * Sends a GET request to V2 Pokemon API,
 * @param name number of pokemon
 * @returns species 'Url' when response is success, or 'null' when not
 */

export const getSpeciesUrl = async (name: string) => {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`;
  try {
    const responseSpecies = await fetch(endpoint);
    if (responseSpecies.ok) {
      const dataSpecies = await responseSpecies.json();
      const pokemonSpeciesUrl = dataSpecies?.species?.url ?? "";
      return pokemonSpeciesUrl as string;
    } else {
      throw new Error(`Fetching species details from poke api failed.`);
    }
  } catch (error) {
    return null;
  }
};
