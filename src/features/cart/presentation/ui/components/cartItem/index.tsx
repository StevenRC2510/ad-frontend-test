import React from "react";
import Image from "next/image";

import { TCartItem } from "@cart/domain/models/cart";

import Typography from "@shared/components/typography";

type CartItemProps = {
  item: TCartItem;
  onRemove: (id: string) => void;
};

const CartItem = ({ item, onRemove }: CartItemProps) => {
  const { id, name, genre, description, image, price } = item;

  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded"
      />
      <div className="flex-1">
        <Typography variant="h3" className="text-lg font-bold">
          {name}
        </Typography>
        <Typography variant="p" className="text-sm text-grey-600">
          {description}
        </Typography>
        <Typography variant="p" className="text-sm text-grey-500 mt-1">
          Genre: {genre}
        </Typography>
      </div>
      <Typography variant="p" className="text-lg font-bold">
        ${price}
      </Typography>
      <button
        onClick={() => onRemove(id)}
        className="text-red-500 hover:underline"
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
