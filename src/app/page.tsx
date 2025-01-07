import { Metadata } from "next";

import { TGameFilters } from "@catalog/domain/models/game";
import { gamesFacade } from "@catalog/infrastructure/api/facade";

import CatalogPage from "@/features/catalog/presentation/ui/components/catalogPage";

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

  const {
    games = [],
    availableFilters = [],
    currentPage = 1,
    totalPages = 0,
  } = await gamesFacade.getAll({
    genre,
    page,
  });

  return (
    <CatalogPage
      initialData={{ games, availableFilters, currentPage, totalPages }}
    />
  );
}
