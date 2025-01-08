import React from "react";
import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import useCart from "@cart/presentation/ui/hooks/useCart";

import CartSummary from ".";

jest.mock("@cart/presentation/ui/hooks/useCart");

const generateCartItem = () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: parseFloat(faker.commerce.price()),
});

describe("CartSummary Component", () => {
  it("Should render order summary with correct total", () => {
    const cartItems = Array.from({ length: 3 }, generateCartItem);
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    (useCart as jest.Mock).mockReturnValue({
      items: cartItems,
      total,
    });

    render(<CartSummary />);

    expect(screen.getByText(/order summary/i)).toBeInTheDocument();
    expect(screen.getByText(`${cartItems.length} items`)).toBeInTheDocument();
  });

  it("Should render no items when cart is empty", () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [],
      total: 0,
    });

    render(<CartSummary />);

    expect(screen.getByText(/order summary/i)).toBeInTheDocument();
    expect(screen.getByText(/0 items/i)).toBeInTheDocument();
  });
});
