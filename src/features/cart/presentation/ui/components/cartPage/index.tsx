"use client";

import React from "react";
import Link from "next/link";

import { ArrowLeftIcon } from "@shared/icons";

import useCart from "@cart/presentation/ui/hooks/useCart";

import Typography from "@shared/components/typography";
import EmptyState from "@cart/presentation/ui/components/emptyState";
import CartSummary from "@cart/presentation/ui/components/cartSummary";
import CartItemList from "@cart/presentation/ui/components/cartItemList";

const CartPage = () => {
  const { items } = useCart();

  return (
    <div>
      <div className="px-32 py-6">
        <Link
          href="/"
          className="flex items-center gap-1 text-grey-500 text-base"
        >
          <ArrowLeftIcon width={24} height={24} />
          Back to Catalog
        </Link>
      </div>
      {!items.length ? (
        <EmptyState />
      ) : (
        <div className="grid px-32 py-12 gap-12">
          <div className="grid gap-3">
            <Typography
              variant="h1"
              className="text-grey-500 text-4xl font-bold"
            >
              Your Cart
            </Typography>
            <Typography variant="p" className="text-grey-500 text-2xl">
              3 items
            </Typography>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[678px_1fr] gap-20">
            <div className="max-w-[678px] w-full">
              <CartItemList />
            </div>
            <div>
              <CartSummary />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
