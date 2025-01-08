import React from "react";

import { Card } from "@shared/components";

const SkeletonGameCard = () => {
  return (
    <Card className="animate-pulse" testId="game-skeleton">
      <div className="bg-gray-300 h-32 rounded w-full mb-4"></div>
      <div className="bg-gray-300 h-6 rounded w-3/4 mb-2"></div>
      <div className="bg-gray-300 h-4 rounded w-full mb-1"></div>
      <div className="bg-gray-300 h-4 rounded w-5/6 mb-4"></div>
      <div className="bg-gray-300 h-5 rounded w-1/4 mb-4"></div>
      <div className="bg-gray-300 h-10 rounded w-full"></div>
    </Card>
  );
};

export default SkeletonGameCard;
