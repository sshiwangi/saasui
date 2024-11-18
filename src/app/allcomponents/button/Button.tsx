"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles
  "relative inline-flex items-center justify-center gap-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-dark/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Solid variants
        primary:
          "bg-secondary-dark text-neutrals-light hover:bg-secondary-light",
        secondary: "bg-primary-light text-neutrals-light hover:bg-primary-ash",
        purple: "bg-[#7C3AED] text-neutrals-light hover:bg-[#8B5CF6]",
        blue: "bg-[#2563EB] text-neutrals-light hover:bg-[#3B82F6]",
        teal: "bg-[#0D9488] text-neutrals-light hover:bg-[#14B8A6]",

        // Bordered variants
        outline:
          "border-2 border-primary-ash text-neutrals-light hover:bg-primary-light/10",
        ghost:
          "text-primary-muted hover:bg-primary-light/10 hover:text-neutrals-light",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-11 px-6 text-lg",
        xl: "h-12 px-8 text-lg",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      width: {
        auto: "w-auto",
        full: "w-full",
      },
      iconPosition: {
        none: "",
        left: "pl-3",
        right: "pr-3",
        both: "px-3",
      },
    },
    compoundVariants: [
      {
        iconPosition: ["left", "both"],
        size: "sm",
        class: "pl-2.5",
      },
      {
        iconPosition: ["right", "both"],
        size: "sm",
        class: "pr-2.5",
      },
      {
        iconPosition: ["left", "both"],
        size: "md",
        class: "pl-3",
      },
      {
        iconPosition: ["right", "both"],
        size: "md",
        class: "pr-3",
      },
      {
        iconPosition: ["left", "both"],
        size: "lg",
        class: "pl-4",
      },
      {
        iconPosition: ["right", "both"],
        size: "lg",
        class: "pr-4",
      },
      {
        iconPosition: ["left", "both"],
        size: "xl",
        class: "pl-5",
      },
      {
        iconPosition: ["right", "both"],
        size: "xl",
        class: "pr-5",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      radius: "full",
      width: "auto",
      iconPosition: "none",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      radius,
      width,
      leftIcon,
      rightIcon,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Determine icon position for padding
    const iconPosition =
      leftIcon && rightIcon
        ? "both"
        : leftIcon
        ? "left"
        : rightIcon
        ? "right"
        : "none";

    // Icon sizes based on button size
    const getIconSize = (size?: "sm" | "md" | "lg" | "xl") => {
      switch (size) {
        case "sm":
          return 16;
        case "md":
          return 18;
        case "lg":
          return 20;
        case "xl":
          return 22;
        default:
          return 18;
      }
    };

    const iconSize = getIconSize(size as "sm" | "md" | "lg" | "xl");

    // Handle loading state
    const showLeftIcon = !isLoading && leftIcon;
    const showRightIcon = !isLoading && rightIcon;

    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            radius,
            width,
            iconPosition: isLoading ? "left" : iconPosition,
          }),
          className
        )}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="mr-2 animate-spin" size={iconSize} />
        ) : showLeftIcon ? (
          <span className="inline-flex shrink-0" style={{ fontSize: iconSize }}>
            {leftIcon}
          </span>
        ) : null}

        <span>{children}</span>

        {showRightIcon && (
          <span className="inline-flex shrink-0" style={{ fontSize: iconSize }}>
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
