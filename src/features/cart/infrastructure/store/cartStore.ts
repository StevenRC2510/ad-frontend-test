import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

import { TCartState } from "@cart/domain/models/cart";
import { CartRepository } from "@cart/domain/models/cartRepository";

const cartStateCreator: StateCreator<
  TCartState,
  [["zustand/persist", unknown]]
> = (set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ items: [] }),
});

const cartStore = create(
  persist<TCartState>(cartStateCreator, {
    name: "cart-storage",
  })
);

export const cartFacade: CartRepository = {
  getCartItems: () => cartStore.getState().items,
  addItem: (item) => cartStore.getState().addItem(item),
  removeItem: (id) => cartStore.getState().removeItem(id),
  clearCart: () => cartStore.getState().clearCart(),
};
