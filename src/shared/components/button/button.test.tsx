import { render, screen, fireEvent } from "@testing-library/react";

import Button from ".";

describe("Button Component", () => {
  it("Should render the button with the correct text", () => {
    const label = "Click Me";
    render(<Button>{label}</Button>);

    const button = screen.getByRole("button", { name: label });
    expect(button).toBeInTheDocument();
  });

  it("Should applies the correct styles based on variant prop", () => {
    render(<Button variant="ghost">Ghost Button</Button>);

    const button = screen.getByRole("button", { name: "Ghost Button" });
    expect(button).toHaveClass("border border-grey-500 text-grey-500 bg-white");
  });

  it("Should calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
