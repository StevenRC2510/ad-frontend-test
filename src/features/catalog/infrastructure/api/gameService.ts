import appFetch from "@/shared/utils/appFetch";
import { allGames } from "@/shared/utils/endpoint";

import { Game, GameFilters } from "@catalog/domain/models/game";
import { GAME_PATH } from "@catalog/infrastructure/api/constants";

const getAllGames = async (params: GameFilters): Promise<Game[]> =>
  appFetch<Game[]>(GAME_PATH, {
    params,
  });

const getGameById = async (id: string): Promise<Game> =>
  appFetch<Game>(GAME_PATH, {
    params: { id },
  });

const getAllMockGames = async ({
  genre,
  page,
}: GameFilters): Promise<Game[]> => {
  const filteredGames = allGames.filter(
    (game) => genre === "All" || game.genre === genre
  );

  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredGames.slice(start, end));
    }, 500);
  });
};

export { getAllGames, getGameById, getAllMockGames };
