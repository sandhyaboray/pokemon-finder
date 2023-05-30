import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../../pages/search/[name]";

describe('Search component', () => {
  const mockEvolutionChain = {
    name: 'caterpie',
    variations: [
      {
        name: 'metapod',
        variations: [
          {
            name: 'butterfree',
            variations: [],
          },
        ],
      },
    ],
  };

  it('renders the evolution chain when evolutionChain prop is provided', () => {
    const name = 'caterpie';
    render(<Search name={name} evolutionChain={mockEvolutionChain} />);

    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent(`Evolution Chain for ${name} is :`);

    const evolutionChainElement = screen.getByTestId('evolution-chain');
    const receivedEvolutionChain = JSON.parse(evolutionChainElement.textContent || '');

    expect(receivedEvolutionChain.name).toBe(mockEvolutionChain.name);
    expect(receivedEvolutionChain.variations.length).toBe(mockEvolutionChain.variations.length);
    expect(receivedEvolutionChain.variations[0].name).toBe(mockEvolutionChain.variations[0].name);
    expect(receivedEvolutionChain.variations[0].variations.length).toBe(
      mockEvolutionChain.variations[0].variations.length
    );
    expect(receivedEvolutionChain.variations[0].variations[0].name).toBe(
      mockEvolutionChain.variations[0].variations[0].name
    );
    expect(receivedEvolutionChain.variations[0].variations[0].variations.length).toBe(
      mockEvolutionChain.variations[0].variations[0].variations.length
    );
  });

  it('renders a message when evolutionChain prop is not provided', () => {
    const name = 'pikachu';
    render(<Search name={name} evolutionChain={null} />);

    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent(`There is no Evolution Chain for ${name}`);
  });
});
