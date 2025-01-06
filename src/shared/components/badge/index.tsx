import React from "react";

type BadgeProps = {
  text: string;
  className?: string;
};

const Badge = ({ text, className }: BadgeProps) => {
  return (
    <span
      className={`px-3 py-2 text-base font-normal text-grey-500 bg-grey-150 rounded ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
