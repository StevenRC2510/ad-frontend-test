import React from "react";

type TypographyProps = {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "p";
  className?: string;
};

const Typography = ({
  children,
  variant = "p",
  className,
}: TypographyProps) => {
  const baseStyles = "text-gray-800";
  const variants = {
    h1: "text-2xl font-bold",
    h2: "text-xl font-semibold",
    h3: "text-lg font-medium",
    p: "text-base",
  };

  return React.createElement(
    variant,
    { className: `${baseStyles} ${variants[variant]} ${className}` },
    children
  );
};

export default Typography;
