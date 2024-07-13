import React from "react";
import clsx from "clsx";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  containerClassName?: string;
}

export function Avatar({
  src,
  alt,
  size = "medium",
  containerClassName,
}: AvatarProps) {
  const baseStyles = "rounded-full object-cover";
  const sizes = {
    small: "w-8 h-8",
    medium: "w-16 h-16",
    large: "w-32 h-32",
  };

  return (
    <img
      className={clsx(baseStyles, sizes[size], containerClassName)}
      src={src}
      alt={alt}
    />
  );
}
