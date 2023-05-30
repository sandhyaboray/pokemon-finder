import type { NextApiRequest, NextApiResponse } from "next";
import { VariationLink } from "./types";
import { getSpeciesUrl } from "../../util/get-species-url";
import { getEvolutionChainUrl } from "../../util/get-evolution-chain-url";
import { getChain } from "../../util/get-chain";
import { Chain } from "../../util/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.body;
  const variationChain = JSON.stringify(retrieveEvolutionChain(name));

  // The value of the variationChain could be stored to a blob storage in cloud.
  // variationChain can then be retrieved on the server side props of any page to be rendered.

  if (variationChain != null) {
    res.redirect(307, `/search/${name}`);
  } else {
    res.redirect("/500");
    console.log("Evolution chain not found.");
  }
}

export async function retrieveEvolutionChain(
  name: string
): Promise<VariationLink | null> {
  let evolutionChain: VariationLink;

  //api call to get the url to the pokemon species
  const pokemonSpeciesUrl = await getSpeciesUrl(name);
  if (pokemonSpeciesUrl != null) {
    //api call to get the url to the pokemon evolution chain
    const pokemonEvolutionUrl = await getEvolutionChainUrl(pokemonSpeciesUrl);

    if (pokemonEvolutionUrl != null) {
      //api call to get pokemon evolution chain
      const chain = await getChain(pokemonEvolutionUrl);
      if (chain != null) {
        evolutionChain = generateEvolutionChain(chain);
      } else {
        console.log("Evolution Chain data unavailable");
        return null;
      }
    } else {
      console.log("Evolution Chain url unavailable");
      return null;
    }
  } else {
    console.log("Species url unavailable");
    return null;
  }

  return evolutionChain;
}

export function generateEvolutionChain(chain: Chain): VariationLink {
  const variationChain: VariationLink = {
    name: chain.species.name,
    variations: [],
  };

  if (chain.evolves_to.length > 0) {
    chain.evolves_to.forEach((evolution) => {
      variationChain.variations.push(generateEvolutionChain(evolution));
    });
  }
  return variationChain;
}
