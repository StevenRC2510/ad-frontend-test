import React from "react";
import { faker } from "@faker-js/faker";
import { render, screen, fireEvent } from "@testing-library/react";

import GameList from ".";

const createMockGame = () => ({
  id: faker.string.uuid(),
  image: faker.image.url(),
  name: faker.commerce.productName(),
  genre: faker.commerce.department(),
  description: faker.commerce.productDescription(),
  price: parseFloat(faker.commerce.price()),
  isNew: faker.datatype.boolean(),
});

describe("GameList", () => {
  const mockGames = Array.from({ length: 3 }).map(() => createMockGame());
  const mockOnAddToCart = jest.fn();
  const mockOnRemoveFromCart = jest.fn();
  const mockOnLoadMore = jest.fn();
  const mockIsInCart = jest.fn();

  it("Should render skeletons when `isLoadingCard` is true", () => {
    render(
      <GameList
        games={[]}
        isInCart={mockIsInCart}
        onAddToCart={mockOnAddToCart}
        onRemoveFromCart={mockOnRemoveFromCart}
        onLoadMore={mockOnLoadMore}
        hasMore={true}
        isLoadingButton={false}
        isLoadingCard={true}
      />
    );

    expect(screen.getAllByTestId("game-skeleton")).toHaveLength(12);
  });

  it("Should render game cards when `isLoadingCard` is false", () => {
    render(
      <GameList
        games={mockGames}
        isInCart={mockIsInCart}
        onAddToCart={mockOnAddToCart}
        onRemoveFromCart={mockOnRemoveFromCart}
        onLoadMore={mockOnLoadMore}
        hasMore={true}
        isLoadingButton={false}
        isLoadingCard={false}
      />
    );

    mockGames.forEach((game) => {
      expect(screen.getByText(game.name)).toBeInTheDocument();
    });
  });

  it("Should call `onLoadMore` when 'See More' button is clicked", () => {
    render(
      <GameList
        games={mockGames}
        isInCart={mockIsInCart}
        onAddToCart={mockOnAddToCart}
        onRemoveFromCart={mockOnRemoveFromCart}
        onLoadMore={mockOnLoadMore}
        hasMore={true}
        isLoadingButton={false}
        isLoadingCard={false}
      />
    );

    fireEvent.click(screen.getByText(/see more/i));
    expect(mockOnLoadMore).toHaveBeenCalledTimes(1);
  });
});
