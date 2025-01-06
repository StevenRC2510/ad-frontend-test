import { TGame } from "@catalog/domain/models/game";

export type TCartItem = TGame;

export type TCartState = {
  items: TCartItem[];
  addItem: (item: TCartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};
