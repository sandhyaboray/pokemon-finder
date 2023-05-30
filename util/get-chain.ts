/**
 * Sends a GET request to V2 Pokemon API,
 * @param endpoint url
 * @returns 'chain' object when response is success, or 'null' when not
 */

import { Chain } from "./types";

export const getChain = async (endpoint: string) => {
  try {
    const responseChain = await fetch(endpoint);
    if (responseChain.ok) {
      const dataChain = await responseChain.json();
      const pokemonChain = dataChain?.chain ?? "";
      return pokemonChain as Chain;
    } else {
      throw new Error(`Fetching Chain details from poke api failed.`);
    }
  } catch (error) {
    return null;
  }
};
