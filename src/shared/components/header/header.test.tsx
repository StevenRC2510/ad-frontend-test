import { render, screen } from "@testing-library/react";

import Header from ".";

describe("Header Component", () => {
  it("Should render the header title and cart icon", () => {
    render(<Header />);

    expect(screen.getByText("GamerShop")).toBeInTheDocument();
    expect(screen.getAllByRole("link")[1]).toBeInTheDocument();
  });

  it("Should navigate correctly using links", () => {
    render(<Header />);

    const [homeLink, cartLink] = screen.getAllByRole("link");

    expect(homeLink).toHaveAttribute("href", "/");
    expect(cartLink).toHaveAttribute("href", "/cart");
  });
});
