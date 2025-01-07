import { TGameRepository } from "@catalog/domain/models/gameRepository";

export const getGameById = async (repository: TGameRepository, id: string) =>
  await repository.getById(id);
