"use client";

import React from "react";

import CartItem from "@cart/presentation/ui/components/cartItem";

import useCart from "@cart/presentation/ui/hooks/useCart";

const CartItemList = () => {
  const { items, removeItem } = useCart();

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={removeItem} />
      ))}
    </div>
  );
};

export default CartItemList;
