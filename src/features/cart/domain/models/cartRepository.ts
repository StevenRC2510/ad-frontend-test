import { TCartItem } from "@cart/domain/models/cart";

export type CartRepository = {
  getCartItems(): TCartItem[];
  addItem(item: TCartItem): void;
  removeItem(id: string): void;
  clearCart(): void;
};
