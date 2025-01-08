import { render, screen } from "@testing-library/react";

import Card from ".";

describe("Card Component", () => {
  it("Should render children correctly", () => {
    const content = "Card Content";
    render(<Card>{content}</Card>);

    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it("Should applies custom className", () => {
    const content = "Card Content";

    const { container } = render(
      <Card className="custom-class">{content}</Card>
    );

    const card = container.querySelector("div");

    expect(card).toHaveClass("custom-class");
  });
});
