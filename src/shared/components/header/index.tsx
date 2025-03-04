import React from "react";
import Link from "next/link";

import { ShoppingCartIcon } from "@shared/icons";

import Typography from "@shared/components/typography";

const Header = () => {
  return (
    <header className="bg-grey-50 py-5 px-6 flex justify-between items-center md:px-32">
      <Link href="/">
        <Typography variant="h1" className="text-grey-600 font-bold">
          GamerShop
        </Typography>
      </Link>
      <Link href="/cart" className="relative">
        <ShoppingCartIcon height={24} width={24} />
      </Link>
    </header>
  );
};

export default Header;
