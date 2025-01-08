"use client";

import React from "react";
import Image from "next/image";

import { TGame } from "@catalog/domain/models/game";

import { Card, Badge, Button, Typography } from "@shared/components";

type GameCardProps = {
  game: TGame;
  isInCart: boolean;
  onAddToCart: (game: TGame) => void;
  onRemoveFromCart: (id: string) => void;
};

const GameCard = ({
  game,
  isInCart,
  onAddToCart,
  onRemoveFromCart,
}: GameCardProps) => {
  const { image, name, genre, description, price, isNew } = game;

  const handleButtonClick = () => {
    if (isInCart) {
      return onRemoveFromCart(game.id);
    }
    return onAddToCart(game);
  };

  return (
    <Card>
      <div className="relative">
        {isNew && <Badge text="New" className="absolute top-3 left-3" />}
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="w-full h-60 object-cover rounded-tl-2xl rounded-tr-2xl"
          loading="lazy"
        />
      </div>
      <div>
        <Typography
          variant="p"
          className="text-grey-200 text-base uppercase font-bold"
        >
          {genre}
        </Typography>
        <div className="flex items-center justify-between gap-3">
          <Typography variant="p" className=" text-grey-500 text-lg font-bold ">
            {name}
          </Typography>
          <Typography variant="p" className="text-grey-500 text-xl font-bold">
            ${price}
          </Typography>
        </div>
      </div>
      <Button
        variant="ghost"
        onClick={handleButtonClick}
        className="w-full uppercase"
      >
        {isInCart ? "Remove" : "Add to cart"}
      </Button>
    </Card>
  );
};

export default GameCard;
