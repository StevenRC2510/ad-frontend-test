import { GameFilters } from "@catalog/domain/models/game";
import { GameRepository } from "@catalog/domain/models/gameRepository";

export const getAllGames = async (
  repository: GameRepository,
  filters: GameFilters
) => await repository.getAll(filters);
