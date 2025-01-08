"use client";

import { useCallback, useState } from "react";

import { TGame } from "@catalog/domain/models/game";
import { useGames } from "@catalog/presentation/ui/hooks/useGames";
import useCart from "@cart/presentation/ui/hooks/useCart";

import GameList from "@catalog/presentation/ui/components/gameList";
import GameFilters from "@catalog/presentation/ui/components/gameFilters";

type CatalogPageProps = {
  initialData: {
    games: TGame[];
    availableFilters: string[];
    currentPage: number;
    totalPages: number;
  };
};

const CatalogPage = ({ initialData }: CatalogPageProps) => {
  const {
    games: initialGames,
    availableFilters,
    currentPage,
    totalPages,
  } = initialData;
  const [selectedGenre, setSelectedGenre] = useState<string | undefined>();
  const [isSSR, setIsSSR] = useState(true);

  const { addItem, removeItem, isInCart } = useCart();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useGames(
      { genre: selectedGenre },
      {
        games: initialGames,
        currentPage,
        totalPages,
        availableFilters,
      }
    );

  const allGames =
    data?.pages.flatMap((page: { games: TGame[] }) => page.games) ||
    initialGames;

  const handleGenreChange = useCallback((genre: string) => {
    setSelectedGenre(genre);
    setIsSSR(false);
  }, []);

  return (
    <>
      <GameFilters
        genres={availableFilters}
        selectedGenre={selectedGenre}
        onGenreChange={handleGenreChange}
      />
      <GameList
        games={allGames}
        hasMore={hasNextPage}
        onLoadMore={fetchNextPage}
        isInCart={isInCart}
        onAddToCart={addItem}
        onRemoveFromCart={removeItem}
        isLoadingCard={!isSSR && (isFetchingNextPage || isFetching)}
        isLoadingButton={isFetchingNextPage}
      />
    </>
  );
};

export default CatalogPage;
