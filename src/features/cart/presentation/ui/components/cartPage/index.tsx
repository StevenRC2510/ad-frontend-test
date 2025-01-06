import React from "react";
import Link from "next/link";

import Typography from "@shared/components/typography";
import CartSummary from "@cart/presentation/ui/components/cartSummary";
import CartItemList from "@cart/presentation/ui/components/cartItemList";

const CartPage = () => {
  return (
    <div className="px-6 py-5 lg:px-32 lg:py-10">
      <Link href="/" className="text-grey-700 text-sm mb-4 block">
        Back to Catalog
      </Link>
      <Typography variant="h1" className="text-3xl font-bold mb-2">
        Your Cart
      </Typography>
      <Typography variant="p" className="text-grey-600 mb-6">
        3 items
      </Typography>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CartItemList />
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
