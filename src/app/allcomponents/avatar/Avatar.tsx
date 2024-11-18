"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

interface AvatarStackProps {
  avatars: AvatarProps[];
  limit?: number;
  size?: "sm" | "md" | "lg";
  showAdd?: boolean;
  onAddClick?: () => void;
  className?: string;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, size = "md" }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-full overflow-hidden border-2 border-primary-dark bg-primary-light/10",
        sizeMap[size]
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt || "Avatar"}
          className="w-full h-full object-cover"
        />
      ) : null}
    </div>
  )
);
Avatar.displayName = "Avatar";

const AvatarStack = ({
  avatars,
  limit = 4,
  size = "md",
  showAdd = false,
  onAddClick,
  className,
}: AvatarStackProps) => {
  const visibleAvatars = avatars.slice(0, limit);
  const remainingCount = avatars.length - limit;

  return (
    <div className={cn("flex items-center", className)}>
      {/* Add Button */}
      {showAdd && (
        <div className="relative -mr-3 z-0">
          <button
            onClick={onAddClick}
            className={cn(
              "rounded-full border-2 border-dashed border-primary-ash flex items-center justify-center hover:border-primary-muted transition-colors",
              sizeMap[size]
            )}
          >
            <Plus className="w-4 h-4 text-primary-muted" />
          </button>
        </div>
      )}

      {/* Avatars */}
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className={cn(
            "relative -mr-3 transition-transform hover:translate-y-[-4px]",
            `z-[${index + 1}]`
          )}
        >
          <Avatar {...avatar} size={size} />
        </div>
      ))}

      {/* Remaining Count */}
      {remainingCount > 0 && (
        <div
          className={cn(
            "relative flex items-center justify-center rounded-full bg-primary-ash text-neutrals-light font-medium",
            sizeMap[size]
          )}
        >
          {remainingCount}+
        </div>
      )}
    </div>
  );
};

export { AvatarStack, Avatar };
