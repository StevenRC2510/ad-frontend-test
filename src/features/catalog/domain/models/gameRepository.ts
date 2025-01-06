import { Game, GameFilters } from "@catalog/domain/models/game";

export type GameRepository = {
  getAll({ genre, page }: GameFilters): Promise<Game[]>;
  getById(id: Game["id"]): Promise<Game | null>;
};
