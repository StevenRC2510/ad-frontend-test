import React from "react";
import Image from "next/image";

import { CloseIcon } from "@shared/icons";
import { TCartItem } from "@cart/domain/models/cart";

import Typography from "@shared/components/typography";

type CartItemProps = {
  item: TCartItem;
  onRemove: (id: string) => void;
};

const CartItem = ({ item, onRemove }: CartItemProps) => {
  const { id, name, genre, description, image, price } = item;

  return (
    <div className="flex items-start gap-4 border-b-0.5 border-grey-300 px-4 py-5">
      <Image
        src={image}
        alt={name}
        width={256}
        height={156}
        loading="lazy"
        className="w-64 h-40"
      />
      <div className="flex-1">
        <div className="grid gap-3">
          <Typography
            variant="p"
            className="text-base text-grey-200 font-bold uppercase"
          >
            {genre}
          </Typography>
          <Typography variant="h3" className="text-xl font-bold text-grey-500">
            {name}
          </Typography>
          <Typography variant="p" className="text-base text-grey-200">
            {description}
          </Typography>
        </div>
        <Typography
          variant="p"
          className="text-xl font-bold text-end text-grey-500 mt-2"
        >
          ${price}
        </Typography>
      </div>
      <button onClick={() => onRemove(id)}>
        <CloseIcon width={24} height={24} />
      </button>
    </div>
  );
};

export default CartItem;
