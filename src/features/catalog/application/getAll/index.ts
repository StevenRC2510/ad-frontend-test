import { GameFilters } from "@catalog/domain/models/game";
import { TGameRepository } from "@catalog/domain/models/TGameRepository";

export const getAllGames = async (
  repository: TGameRepository,
  filters: GameFilters
) => await repository.getAll(filters);
