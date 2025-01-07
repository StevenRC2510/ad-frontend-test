import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  variant?: "ghost" | "filled";
};

const Button = ({
  children,
  className,
  variant = "filled",
  isLoading = false,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "py-4 px-6 rounded-lg text-center flex items-center justify-center";
  const variantStyles = {
    ghost: "border border-grey-500 text-grey-500 bg-white hover:bg-gray-100",
    filled: "bg-grey-600 text-white hover:bg-gray-900",
  };

  return (
    <button
      {...props}
      className={`text-base font-bold ${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <span className="animate-spin border-2 border-t-transparent border-gray-500 rounded-full w-5 h-5 mr-2" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
