import {
  TGame,
  TGameFilters,
  TGamesResponse,
} from "@catalog/domain/models/game";

export type TGameRepository = {
  getAll({ genre, page }: TGameFilters): Promise<TGamesResponse>;
  getById(id: TGame["id"]): Promise<TGame | null>;
};
