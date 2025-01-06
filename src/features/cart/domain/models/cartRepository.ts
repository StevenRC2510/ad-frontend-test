import { CartItem } from "@cart/domain/models/cart";

export type CartRepository = {
  getCartItems(): CartItem[];
  addItem(item: CartItem): void;
  removeItem(id: string): void;
  clearCart(): void;
};
