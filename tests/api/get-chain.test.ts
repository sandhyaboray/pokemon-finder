import "@testing-library/jest-dom";
import { getChain } from "../../util/get-chain";

describe("getChain", () => {
  it("should return the chain object when the response is successful", async () => {
    const endpoint = "https://pokeapi.co/api/v2/evolution-chain/1/";
    const expectedChain = {
      evolution_details: [],
      evolves_to: [
        {
          evolution_details: [
            {
              gender: null,
              held_item: null,
              item: null,
              known_move: null,
              known_move_type: null,
              location: null,
              min_affection: null,
              min_beauty: null,
              min_happiness: null,
              min_level: 16,
              needs_overworld_rain: false,
              party_species: null,
              party_type: null,
              relative_physical_stats: null,
              time_of_day: "",
              trade_species: null,
              trigger: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/evolution-trigger/1/",
              },
              turn_upside_down: false,
            },
          ],
          evolves_to: [
            {
              evolution_details: [
                {
                  gender: null,
                  held_item: null,
                  item: null,
                  known_move: null,
                  known_move_type: null,
                  location: null,
                  min_affection: null,
                  min_beauty: null,
                  min_happiness: null,
                  min_level: 32,
                  needs_overworld_rain: false,
                  party_species: null,
                  party_type: null,
                  relative_physical_stats: null,
                  time_of_day: "",
                  trade_species: null,
                  trigger: {
                    name: "level-up",
                    url: "https://pokeapi.co/api/v2/evolution-trigger/1/",
                  },
                  turn_upside_down: false,
                },
              ],
              evolves_to: [],
              is_baby: false,
              species: {
                name: "venusaur",
                url: "https://pokeapi.co/api/v2/pokemon-species/3/",
              },
            },
          ],
          is_baby: false,
          species: {
            name: "ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon-species/2/",
          },
        },
      ],
      is_baby: false,
      species: {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/1/",
      },
    };

    // Mock the fetch function and the response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        chain: {
          expectedChain,
        },
      }),
    });

    const result = await getChain(endpoint);
    expect(result).toEqual({ expectedChain });
    expect(fetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/evolution-chain/1/"
    );
  });

  it("should return null when the response is not successful", async () => {
    const endpoint = "https://pokeapi.co/api/v2/evolution-chain/1/";

    // Mock the fetch function and simulate a non-ok response
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const result = await getChain(endpoint);

    expect(result).toBeNull();
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
});
