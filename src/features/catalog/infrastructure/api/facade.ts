import environment from "@/config/environment";

import { getAllGames, getGameById, getAllMockGames } from "./gameService";
import { TGameRepository } from "@catalog/domain/models/gameRepository";

const isMockEnabled = environment.enabledMockApi === "true";

export const gamesFacade: TGameRepository = {
  getAll: (params) =>
    isMockEnabled ? getAllMockGames(params) : getAllGames(params),
  getById: (id) => getGameById(id),
};
