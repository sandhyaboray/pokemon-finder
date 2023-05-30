/**
 * Sends a GET request to V2 Pokemon API,
 * @param endpoint url
 * @returns evolution chain 'Url' when response is success, or 'null' when not
 */

export const getEvolutionChainUrl = async (endpoint: string) => {
  try {
    const responseEvolutionChain = await fetch(endpoint);
    if (responseEvolutionChain.ok) {
      const dataEvolutionChain = await responseEvolutionChain.json();
      const pokemonEvolutionChainUrl =
        dataEvolutionChain?.evolution_chain?.url ?? "";
      return pokemonEvolutionChainUrl as string;
    } else {
      throw new Error(`Fetching Evolution Chain details from poke api failed.`);
    }
  } catch (error) {
    return null;
  }
};
