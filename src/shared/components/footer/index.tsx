import React from "react";
import Link from "next/link";

import { Logo } from "@shared/icons";

const Footer = () => {
  return (
    <footer className="bg-grey-700 grid place-items-center py-16">
      <Link href="/">
        <Logo width={170} height={45} />
      </Link>
    </footer>
  );
};

export default Footer;
