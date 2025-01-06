import { TCartItem } from "@cart/domain/models/cart";
import { CartRepository } from "@cart/domain/models/cartRepository";

export const addToCart = (repository: CartRepository, item: TCartItem) =>
  repository.addItem(item);
