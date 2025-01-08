import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import CartItem from ".";

const createMockCartItem = () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  genre: faker.commerce.department(),
  description: faker.commerce.productDescription(),
  image: faker.image.url(),
  price: parseFloat(faker.commerce.price()),
  isNew: false,
});

describe("CartItem Component", () => {
  const mockItem = createMockCartItem();
  const mockOnRemove = jest.fn();

  it("Should render item details correctly", () => {
    render(<CartItem item={mockItem} onRemove={mockOnRemove} />);

    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(screen.getByText(mockItem.genre)).toBeInTheDocument();
    expect(screen.getByText(mockItem.description)).toBeInTheDocument();
    expect(screen.getByText(`$${mockItem.price}`)).toBeInTheDocument();
  });

  it("Should calls `onRemove` when remove button is clicked", () => {
    render(<CartItem item={mockItem} onRemove={mockOnRemove} />);

    const removeButton = screen.getAllByRole("button")[0];
    fireEvent.click(removeButton);

    expect(mockOnRemove).toHaveBeenCalledWith(mockItem.id);
  });
});
