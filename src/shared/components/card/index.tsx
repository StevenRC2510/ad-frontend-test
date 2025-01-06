import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`grid gap-4 p-6 bg-white border-grey-300 border-0.5 rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
