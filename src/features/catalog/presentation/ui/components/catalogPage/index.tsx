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
  const { games, availableFilters, totalPages, currentPage } = initialData;
  const [selectedGenre, setSelectedGenre] = useState<string | undefined>(
    undefined
  );
  const { addItem, removeItem, isInCart } = useCart();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGames(
    { genre: selectedGenre },
    {
      games,
      currentPage,
      totalPages,
      availableFilters,
    }
  );
  const allGames =
    data?.pages.flatMap((page: { games: TGame[] }) => page.games) || [];

  console.log(data, "data");
  const handleGenreChange = useCallback(
    (genre: string) => setSelectedGenre(genre),
    []
  );

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
        isLoading={isFetchingNextPage}
      />
    </>
  );
};

export default CatalogPage;
