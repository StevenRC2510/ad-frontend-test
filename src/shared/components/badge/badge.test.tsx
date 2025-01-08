import React from "react";
import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";

import Badge from ".";

describe("Badge Component", () => {
  it("renders the text correctly", () => {
    const text = faker.string.sample();

    render(<Badge text={text} />);

    const badgeElement = screen.getByText(text);

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(
      "px-3 py-2 text-base font-normal text-grey-500 bg-grey-150 rounded"
    );
  });

  it("Should merge the default and additional classNames", () => {
    render(<Badge text="Merged Styles" className="custom-class" />);
    const badgeElement = screen.getByText("Merged Styles");

    expect(badgeElement).toHaveClass(
      "px-3 py-2 text-base font-normal text-grey-500 bg-grey-150 rounded custom-class"
    );
  });
});
