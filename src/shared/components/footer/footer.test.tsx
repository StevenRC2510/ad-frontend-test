import { render, screen } from "@testing-library/react";

import Footer from ".";

describe("Footer Component", () => {
  it("Should render the logo and navigates to home", () => {
    render(<Footer />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
