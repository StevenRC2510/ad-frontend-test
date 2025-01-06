import { CartItem } from "@cart/domain/models/cart";
import { CartRepository } from "@cart/domain/models/cartRepository";

export const addToCart = (repository: CartRepository, item: CartItem) =>
  repository.addItem(item);
