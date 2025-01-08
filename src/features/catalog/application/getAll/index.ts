import { TGameFilters } from "@catalog/domain/models/game";
import { TGameRepository } from "@catalog/domain/models/gameRepository";

export const getAllGames = async (
  repository: TGameRepository,
  filters: TGameFilters
) => await repository.getAll(filters);
