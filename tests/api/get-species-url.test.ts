import "@testing-library/jest-dom";
import { getSpeciesUrl } from "../../util/get-species-url";


describe("getSpeciesUrl", () => {
  it("should return the species URL for a valid Pokemon name", async () => {
    const name = "bulbasaur";
    const expectedUrl = "https://pokeapi.co/api/v2/pokemon-species/1/";

    // Mock the fetch function and the response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        species: { name: "bulbasaur", url: expectedUrl },
      }),
    });

    const result = await getSpeciesUrl(name);

    expect(result).toBe(expectedUrl);
    expect(fetch).toHaveBeenCalledWith(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  });

  it("should return null for an invalid Pokemon name", async () => {
    const name = "invalidpokemon";

    // Mock the fetch function and simulate a non-ok response
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const result = await getSpeciesUrl(name);

    expect(result).toBeNull();
    expect(fetch).toHaveBeenCalledWith(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  });
});
