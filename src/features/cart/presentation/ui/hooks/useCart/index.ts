"use client";
import { useState, useMemo, useCallback } from "react";

import { TCartItem } from "@cart/domain/models/cart";
import { cartFacade } from "@cart/infrastructure/store/cartStore";

const useCart = () => {
  const [items, setItems] = useState(cartFacade.getCartItems());

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items]
  );

  const addItem = (item: TCartItem) => {
    cartFacade.addItem(item);
    setItems(cartFacade.getCartItems());
  };

  const removeItem = (id: string) => {
    cartFacade.removeItem(id);
    setItems(cartFacade.getCartItems());
  };

  const clearCart = () => {
    cartFacade.clearCart();
    setItems(cartFacade.getCartItems());
  };

  const isInCart = useCallback(
    (id: string) => items.some((cartItem) => cartItem.id === id),
    [items]
  );

  return {
    items,
    total,
    addItem,
    removeItem,
    clearCart,
    isInCart,
  };
};

export default useCart;
