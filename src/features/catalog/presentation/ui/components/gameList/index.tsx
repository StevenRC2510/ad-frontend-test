"use client";

import React from "react";

import { TGame } from "@catalog/domain/models/game";

import { Button } from "@shared/components";
import GameCard from "@catalog/presentation/ui/components/gameCard";

type GameListProps = {
  games: TGame[];
};

const GameList = ({ games }: GameListProps) => {
  return (
    <div className="container px-32 py-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            isInCart={false}
            onAddToCart={() => null}
            onRemoveFromCart={() => null}
            // isInCart={isInCart(game.id)}
            // onAddToCart={onAddToCart}
            // onRemoveFromCart={onRemoveFromCart}
          />
        ))}
      </div>
      {true && (
        <div className="flex justify-start mt-12">
          <Button onClick={() => null} className="uppercase">
            See More
          </Button>
        </div>
      )}
    </div>
  );
};

export default GameList;
