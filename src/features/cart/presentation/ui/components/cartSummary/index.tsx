"use client";

import React from "react";
import Typography from "@shared/components/typography";
import Button from "@shared/components/button";

import useCart from "@cart/presentation/ui/hooks/useCart";

const CartSummary = () => {
  const { items, total } = useCart();

  return (
    <div className="grid gap-12 md:gap-8">
      <div className="bg-white border-grey-300 border-0.5 rounded-2xl py-8 px-6">
        <div className="grid gap-3">
          <Typography variant="h1" className="text-2xl font-bold text-grey-500">
            Order Summary
          </Typography>
          <Typography variant="p" className="text-lg text-grey-500">
            {items.length} items
          </Typography>
        </div>
        <div className="py-5 grid gap-3">
          <div className="grid gap-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <Typography variant="p" className="text-lg text-grey-500">
                  {item.name}
                </Typography>
                <Typography variant="p" className="text-lg text-grey-500">
                  ${item.price}
                </Typography>
              </div>
            ))}
          </div>
          <div className="flex justify-between font-bold text-xl border-t pt-4 mb-4">
            <Typography variant="p" className="text-xl fond-bold text-grey-500">
              Order Total
            </Typography>
            <Typography variant="p" className="text-xl fond-bold text-grey-500">
              ${total}
            </Typography>
          </div>
        </div>
      </div>
      <Button className="w-full">Checkout</Button>
    </div>
  );
};

export default CartSummary;
