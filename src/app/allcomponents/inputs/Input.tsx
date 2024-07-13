import React from "react";
import clsx from "clsx";

interface InputProps {
  variant?: "border" | "search";
  placeholder?: string;
  containerClassName?: string;
}

export function Input({
  variant = "border",
  placeholder,
  containerClassName,
}: InputProps) {
  const baseStyles = "p-2 w-full";
  const variants = {
    border: "border border-gray-700 rounded",
    search: "border border-gray-700 rounded pl-10 relative",
  };

  return (
    <div
      className={clsx(variant === "search" && "relative", containerClassName)}
    >
      {variant === "search" && (
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <i className="material-icons text-gray-500">search</i>
        </span>
      )}
      <input
        className={clsx(baseStyles, variants[variant])}
        placeholder={placeholder}
      />
    </div>
  );
}
