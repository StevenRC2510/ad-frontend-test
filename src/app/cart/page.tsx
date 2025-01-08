import { Metadata } from "next";

import CartPage from "@cart/presentation/ui/components/cartPage";

export const metadata: Metadata = {
  title: "Cart",
  description: "List of games added to cart",
};

export default async function Cart() {
  return <CartPage />;
}

export const dynamic = "force-dynamic";
