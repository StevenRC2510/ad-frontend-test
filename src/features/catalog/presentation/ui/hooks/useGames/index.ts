import {
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

import {
  TGame,
  TGameFilters,
  TGamesResponse,
} from "@catalog/domain/models/game";
import { gamesFacade } from "@catalog/infrastructure/api/facade";
import { GamesKeysQueries } from "@catalog/infrastructure/api/constants";

const useGames = (
  { genre }: TGameFilters,
  initialData: {
    games: TGame[];
    availableFilters: string[];
    currentPage: number;
    totalPages: number;
  }
) => {
  return useInfiniteQuery<TGamesResponse>({
    queryKey: [GamesKeysQueries.GET_ALL_GAMES_QUERY_KEY, genre],
    queryFn: ({ pageParam = 1 }) =>
      gamesFacade.getAll({ genre, page: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.currentPage < lastPage.totalPages
        ? lastPage.currentPage + 1
        : undefined,
    initialData: {
      pages: [
        {
          games: initialData.games,
          currentPage: initialData.currentPage,
          totalPages: initialData.totalPages,
          availableFilters: initialData.availableFilters,
        },
      ],
      pageParams: [1],
    },
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
};

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
