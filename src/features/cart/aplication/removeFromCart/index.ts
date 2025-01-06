import { CartRepository } from "@cart/domain/models/cartRepository";

export const removeFromCart = (repository: CartRepository, id: string) =>
  repository.removeItem(id);
