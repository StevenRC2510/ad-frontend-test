import { useCallback } from "react";
import { useCartStore } from "@cart/infrastructure/store/cartStore";

const useCart = () => {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = parseFloat(
    items.reduce((sum, item) => sum + item.price, 0).toFixed(2)
  );
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
