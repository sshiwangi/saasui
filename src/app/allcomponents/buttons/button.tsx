import React, { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  variant:
    | "primary"
    | "secondary"
    | "rounded"
    | "border"
    | "disabled"
    | "threeD"
    | "withIcon";
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ variant, children, onClick, ...props }: ButtonProps) {
  const baseStyles = "p-4 rounded-md text-white transition-colors";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    rounded: "rounded-full bg-green-600 hover:bg-green-700",
    border:
      "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white",
    disabled: "bg-gray-400 cursor-not-allowed",
    threeD: "bg-blue-600 shadow-md hover:bg-blue-700",
    withIcon: "flex items-center bg-purple-600 hover:bg-purple-700",
  };

  const classes = clsx(baseStyles, variants[variant]);

  return (
    <button
      className={classes}
      onClick={onClick}
      {...props}
      disabled={variant === "disabled"}
    >
      {children}
    </button>
  );
}
