"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  // Base styles
  "relative rounded-xl transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-primary-dark border border-primary-ash",
        elevated: "bg-primary-dark shadow-lg hover:shadow-xl",
        flat: "bg-primary-light/5 hover:bg-primary-light/10",
        bordered:
          "bg-transparent border-2 border-primary-ash hover:border-primary-muted",
        interactive:
          "bg-primary-dark border border-primary-ash hover:border-secondary-dark cursor-pointer",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-lg",
        md: "rounded-xl",
        lg: "rounded-2xl",
        full: "rounded-[32px]",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1 hover:shadow-lg",
        glow: "hover:shadow-[0_0_20px_rgba(65,187,145,0.15)]",
        scale: "hover:scale-[1.02]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      radius: "md",
      hover: "none",
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, radius, hover, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, size, radius, hover }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Sub-components for better organization
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold text-neutrals-light", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-primary-muted", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4 mt-auto", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Image container with proper aspect ratios
const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    aspect?: "square" | "video" | "wide" | "portrait";
  }
>(({ className, aspect = "video", children, ...props }, ref) => {
  const aspectMap = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-t-xl -mx-6 -mt-6",
        aspectMap[aspect],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
CardImage.displayName = "CardImage";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
  cardVariants,
};
