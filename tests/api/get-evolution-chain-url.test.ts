import "@testing-library/jest-dom";
import { getEvolutionChainUrl } from "../../util/get-evolution-chain-url";

describe("getEvolutionChainUrl", () => {
  it("should return the evolution chain URL when the response is successful", async () => {
    const endpoint = "https://pokeapi.co/api/v2/pokemon-species/1/";
    const expectedUrl = "https://pokeapi.co/api/v2/evolution-chain/1/";

    // Mock the fetch function and the response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        evolution_chain: {
          url: expectedUrl,
        },
      }),
    });

    const result = await getEvolutionChainUrl(endpoint);

    expect(result).toBe(expectedUrl);
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it("should return null when the response is not successful", async () => {
    const endpoint = "https://pokeapi.co/api/v2/pokemon-species/1/";

    // Mock the fetch function and simulate a non-ok response
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const result = await getEvolutionChainUrl(endpoint);

    expect(result).toBeNull();
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
});
