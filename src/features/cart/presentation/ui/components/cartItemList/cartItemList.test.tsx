import React from "react";
import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import useCart from "@cart/presentation/ui/hooks/useCart";

import CartItemList from ".";

jest.mock("@cart/presentation/ui/hooks/useCart");

const generateCartItem = () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  genre: faker.lorem.word(),
  description: faker.lorem.sentence(),
  image: faker.image.url(),
  price: parseFloat(faker.commerce.price()),
});

describe("CartItemList Component", () => {
  it("Should render all cart items", () => {
    const cartItems = Array.from({ length: 3 }, generateCartItem);

    (useCart as jest.Mock).mockReturnValue({
      items: cartItems,
      removeItem: jest.fn(),
    });

    render(<CartItemList />);

    cartItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.genre)).toBeInTheDocument();
    });
  });

  it("Should render no items when cart is empty", () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [],
      removeItem: jest.fn(),
    });

    render(<CartItemList />);

    expect(screen.queryByText(/game/i)).not.toBeInTheDocument();
  });
});
