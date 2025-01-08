"use client";

import React from "react";

import { TGame } from "@catalog/domain/models/game";

import { Button } from "@shared/components";
import GameCard from "@catalog/presentation/ui/components/gameCard";
import SkeletonGameCard from "@catalog/presentation/ui/components/skeletonGameCard";

type GameListProps = {
  games: TGame[];
  isInCart: (id: string) => boolean;
  onAddToCart: (game: TGame) => void;
  onRemoveFromCart: (id: string) => void;
  onLoadMore: () => void;
  hasMore: boolean;
  isLoadingButton: boolean;
  isLoadingCard: boolean;
};

const GameList = ({
  games,
  isInCart,
  onAddToCart,
  onRemoveFromCart,
  onLoadMore,
  hasMore,
  isLoadingButton,
  isLoadingCard,
}: GameListProps) => {
  return (
    <div className="container px-6 py-8 md:px-32 md:py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12">
        {isLoadingCard
          ? Array.from({ length: 12 }).map((_, index) => (
              <SkeletonGameCard key={index} />
            ))
          : games.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                isInCart={isInCart(game.id)}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
      </div>
      {hasMore && (
        <div className="flex justify-start mt-12">
          <Button
            onClick={onLoadMore}
            className="uppercase"
            isLoading={isLoadingButton}
          >
            See More
          </Button>
        </div>
      )}
    </div>
  );
};

export default GameList;
