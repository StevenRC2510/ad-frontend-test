import appFetch from "@/shared/utils/appFetch";

import { GET } from "@/app/api/games/route";
import environment from "@config/environment";

import { GAME_PATH } from "@catalog/infrastructure/api/constants";
import {
  TGame,
  TGameFilters,
  TGamesResponse,
} from "@catalog/domain/models/game";

const baseURL = environment.appsUrl.games.api;

const getAllGames = async (params: TGameFilters): Promise<TGamesResponse> =>
  appFetch<TGamesResponse>(GAME_PATH, {
    params,
    baseURL,
  });

const getGameById = async (id: string): Promise<TGame> =>
  appFetch<TGame>(GAME_PATH, {
    params: { id },
    baseURL,
  });

const getAllMockGames = async ({
  genre,
  page,
}: TGameFilters): Promise<TGamesResponse> => {
  const url = new URL(`${baseURL}/${GAME_PATH}`);
  if (genre) url.searchParams.append("genre", genre);
  if (page) url.searchParams.append("page", page.toString());

  const request = new Request(url.toString());

  const response = await GET(request);
  const data = await response.json();

  return data;
};

export { getAllGames, getGameById, getAllMockGames };
