import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: "ghost" | "filled";
};

const Button = ({
  children,
  className,
  variant = "filled",
  ...props
}: ButtonProps) => {
  const baseStyles = "py-4 px-6 rounded-lg text-center";
  const variantStyles = {
    ghost: "border border-grey-500 text-grey-500 bg-white hover:bg-gray-100",
    filled: "bg-grey-600 text-white hover:bg-gray-900",
  };

  return (
    <button
      {...props}
      className={`text-base font-bold ${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
