import * as React from "react";
import { SVGProps } from "react";
const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="#3B3B3B"
      d="M6.078 12.38a1 1 0 0 0 .21.33l5 5a1.003 1.003 0 1 0 1.42-1.42L9.408 13h7.59a1 1 0 1 0 0-2h-7.59l3.3-3.29a1 1 0 0 0-.326-1.638 1 1 0 0 0-1.094.219l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76Z"
    />
  </svg>
);
export default ArrowLeft;
