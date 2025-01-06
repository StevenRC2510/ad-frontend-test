import { CartRepository } from "@cart/domain/models/cartRepository";

export const clearCart = (repository: CartRepository) => repository.clearCart();
