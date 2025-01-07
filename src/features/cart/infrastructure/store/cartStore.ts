import { create } from "zustand";
import { persist } from "zustand/middleware";

import { TCartItem } from "@cart/domain/models/cart";

type CartState = {
  items: TCartItem[];
  total: number;
  addItem: (item: TCartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
};

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item: TCartItem) =>
        set((state) => {
          const updatedItems = [...state.items, item];
          return {
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + item.price, 0),
          };
        }),
      removeItem: (id: string) =>
        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== id);
          return {
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + item.price, 0),
          };
        }),
      clearCart: () => set({ items: [], total: 0 }),
      isInCart: (id: string) =>
        get().items.some((cartItem) => cartItem.id === id),
    }),
    {
      name: "cart-storage",
    }
  )
);
