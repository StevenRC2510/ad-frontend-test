import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import GameCard from ".";

const createMockGame = () => ({
  id: faker.string.uuid(),
  image: faker.image.url(),
  name: faker.commerce.productName(),
  genre: faker.commerce.department(),
  description: faker.commerce.productDescription(),
  price: parseFloat(faker.commerce.price()),
  isNew: faker.datatype.boolean(),
});

describe("GameCard", () => {
  const mockGame = createMockGame();
  const mockOnAddToCart = jest.fn();
  const mockOnRemoveFromCart = jest.fn();

  it("Should render game details", () => {
    render(
      <GameCard
        game={mockGame}
        isInCart={false}
        onAddToCart={mockOnAddToCart}
        onRemoveFromCart={mockOnRemoveFromCart}
      />
    );

    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(screen.getByText(mockGame.genre)).toBeInTheDocument();
    expect(screen.getByText(`$${mockGame.price}`)).toBeInTheDocument();
  });

  it("Should calls `onAddToCart` when 'Add to cart' button is clicked", () => {
    render(
      <GameCard
        game={mockGame}
        isInCart={false}
        onAddToCart={mockOnAddToCart}
        onRemoveFromCart={mockOnRemoveFromCart}
      />
    );

    fireEvent.click(screen.getByText(/add to cart/i));
    expect(mockOnAddToCart).toHaveBeenCalledWith(mockGame);
  });

  it("Should calls `onRemoveFromCart` when 'Remove' button is clicked", () => {
    render(
      <GameCard
        game={mockGame}
        isInCart={true}
        onAddToCart={mockOnAddToCart}
        onRemoveFromCart={mockOnRemoveFromCart}
      />
    );

    fireEvent.click(screen.getByText(/remove/i));
    expect(mockOnRemoveFromCart).toHaveBeenCalledWith(mockGame.id);
  });

  it("Should displays 'New' badge when `isNew` is true", () => {
    render(
      <GameCard
        game={{ ...mockGame, isNew: true }}
        isInCart={false}
        onAddToCart={mockOnAddToCart}
        onRemoveFromCart={mockOnRemoveFromCart}
      />
    );

    expect(screen.getByText(/new/i)).toBeInTheDocument();
  });
});
