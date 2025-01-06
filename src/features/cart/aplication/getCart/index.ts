import { CartRepository } from "@cart/domain/models/cartRepository";

export const getCart = (repository: CartRepository) =>
  repository.getCartItems();
