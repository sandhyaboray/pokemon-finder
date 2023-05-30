import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonHome from "../../pages";


describe("PokemonHome page", () => {
  it("renders the heading", () => {
    render(<PokemonHome />);
    expect(
      screen.getByRole("heading", { name: /Find Pokemon Evolution Chain/i })
    ).toBeInTheDocument();
  });

  it("renders the form with the required elements", () => {
    render(<PokemonHome />);
    const formElement = screen.getByRole("form").getAttribute("name");
    const nameLabelElement = screen.getByLabelText("Pokemon Name:");
    const nameInput = screen.getByLabelText("Pokemon Name:");
    const submitButton = screen.getByRole("button", { name: "Search" });

    expect(formElement).toBe("pokemon-evolution-chain");
    expect(nameLabelElement).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toBeRequired();
    expect(submitButton).toBeInTheDocument();
  });
});
