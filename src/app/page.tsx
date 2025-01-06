import { Metadata } from "next";

import { TGameFilters } from "@catalog/domain/models/game";
import { gamesFacade } from "@catalog/infrastructure/api/facade";

import GameList from "@catalog/presentation/ui/components/gameList";
import GameFilters from "@catalog/presentation/ui/components/gameFilters";

export const metadata: Metadata = {
  title: "Catalog",
  description: "List of games",
};

export default async function Home({
  searchParams,
}: {
  searchParams: TGameFilters;
}) {
  const genre = searchParams.genre;
  const page = searchParams.page || 1;

  const gamesData = await gamesFacade.getAll({ genre, page });

  return (
    <div>
      <GameFilters />
      <GameList games={gamesData?.games ?? []} />
    </div>
  );
}
