"use client";

import React from "react";
import Typography from "@shared/components/typography";
import Button from "@shared/components/button";

import useCart from "@cart/presentation/ui/hooks/useCart";

const CartSummary = () => {
  const { items, total } = useCart();

  return (
    <div className="grid gap-8">
      <div className="bg-white border-grey-300 border-0.5 rounded-2xl py-8 px-6">
        <Typography variant="h3" className="text-lg font-bold mb-4">
          Order Summary
        </Typography>
        <Typography variant="p" className="text-sm mb-2">
          {items.length} items
        </Typography>
        <div className="border-t pt-4 mb-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <Typography variant="p">{item.name}</Typography>
              <Typography variant="p">${item.price}</Typography>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-bold text-xl border-t pt-4 mb-4">
          <Typography variant="p">Order Total</Typography>
          <Typography variant="p">${total}</Typography>
        </div>
      </div>
      <Button className="w-full">Checkout</Button>
    </div>
  );
};

export default CartSummary;
