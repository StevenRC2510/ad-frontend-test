import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import {
  TGame,
  TGameFilters,
  TGamesResponse,
} from "@catalog/domain/models/game";
import { gamesFacade } from "@catalog/infrastructure/api/facade";
import { GamesKeysQueries } from "@catalog/infrastructure/api/constants";

const useGames = (
  params: TGameFilters,
  options?: Omit<UseQueryOptions<TGamesResponse>, "queryKey">
) =>
  useQuery<TGamesResponse>({
    queryKey: [GamesKeysQueries.GET_ALL_GAMES_QUERY_KEY, params],
    queryFn: () => gamesFacade.getAll(params),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    ...options,
  });

const useGetGameById = (
  id: string,
  options?: Omit<UseQueryOptions<TGame | null>, "queryKey">
) =>
  useQuery<TGame | null>({
    queryKey: [GamesKeysQueries.GET_GAME_BY_ID_QUERY_KEY, id],
    queryFn: () => gamesFacade.getById(id),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    ...options,
  });

export { useGames, useGetGameById };
