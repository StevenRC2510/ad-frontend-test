import { GameRepository } from "@catalog/domain/models/gameRepository";

export const getGameById = async (repository: GameRepository, id: string) =>
  await repository.getById(id);
