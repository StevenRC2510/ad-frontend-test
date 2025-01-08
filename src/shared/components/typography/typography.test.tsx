import React from "react";
import { render, screen } from "@testing-library/react";

import Typography from ".";

describe("Typography Component", () => {
  it("Should render with default variant (paragraph)", () => {
    render(<Typography>Test Text</Typography>);
    const textElement = screen.getByText("Test Text");
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe("P");
  });

  it("Should render with the 'h1' variant", () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    const headingElement = screen.getByText("Heading 1");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe("H1");
  });

  it("Should applies custom className", () => {
    render(<Typography className="custom-class">Custom Class Test</Typography>);
    const textElement = screen.getByText("Custom Class Test");
    expect(textElement).toHaveClass("custom-class");
  });
});
