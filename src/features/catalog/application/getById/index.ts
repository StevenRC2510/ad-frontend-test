import { TGameRepository } from "@catalog/domain/models/TGameRepository";

export const getGameById = async (repository: TGameRepository, id: string) =>
  await repository.getById(id);
