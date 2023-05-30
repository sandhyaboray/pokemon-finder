import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ServiceUnavailable from "../../pages/500";


describe("500 page", () => {
  it("renders the heading", () => {
    render(<ServiceUnavailable />);
    expect(
      screen.getByRole("heading", {
        name: /No Evolution Chain for Pokemon name. Service Unavailable/i,
      })
    ).toBeInTheDocument();
  });
});
