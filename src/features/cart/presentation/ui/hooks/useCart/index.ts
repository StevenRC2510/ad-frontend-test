import { useCallback } from "react";

import { cartFacade } from "@cart/infrastructure/storage/cartStorage";

import { CartItem } from "@cart/domain/models/cart";

export const useCart = () => {
  const getItems = useCallback(() => cartFacade.getCartItems(), []);
  const addItem = useCallback((item: CartItem) => cartFacade.addItem(item), []);
  const removeItem = useCallback((id: string) => cartFacade.removeItem(id), []);
  const clearCart = useCallback(() => cartFacade.clearCart(), []);

  return { getItems, addItem, removeItem, clearCart };
};
