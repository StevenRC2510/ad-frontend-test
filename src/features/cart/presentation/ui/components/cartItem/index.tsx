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
    <div className="grid grid-cols-1 gap-4 border-b-0.5 border-grey-300 px-4 py-5 md:flex">
      <div className="grid grid-cols-10 col-span-1">
        <Image
          src={image}
          alt={name}
          width={256}
          height={156}
          loading="lazy"
          className="col-span-9 w-full h-40 object-cover rounded md:w-64 md:col-span-10"
        />
        <button
          onClick={() => onRemove(id)}
          className="col-span-1 flex justify-end items-start md:hidden"
        >
          <CloseIcon width={24} height={24} className="text-gray-600" />
        </button>
      </div>

      <div className="flex flex-col col-span-1 gap-2">
        <Typography
          variant="p"
          className="text-sm text-grey-200 font-bold uppercase"
        >
          {genre}
        </Typography>
        <Typography
          variant="p"
          className="text-lg md:text-xl font-bold text-grey-500"
        >
          {name}
        </Typography>
        <Typography variant="p" className="text-sm text-grey-200">
          {description}
        </Typography>
        <Typography
          variant="p"
          className="text-end text-lg md:text-xl font-bold text-grey-500 mt-2 md:mt-0"
        >
          ${price}
        </Typography>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="hidden md:flex justify-end items-start"
      >
        <CloseIcon width={24} height={24} className="text-gray-600" />
      </button>
    </div>
  );
};

export default CartItem;
