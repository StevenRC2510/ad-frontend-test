import React from "react";

import Lottie from "lottie-react";

import emptyCartAnimation from "@shared/icons/emptyCart.json";

const EmptyState = () => (
  <Lottie className="h-[70vh]" animationData={emptyCartAnimation} loop={true} />
);

export default EmptyState;
