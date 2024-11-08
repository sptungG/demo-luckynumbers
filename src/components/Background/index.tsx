"use client";
import React, { useRef } from "react";
import { cn } from "../../common/utils";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-screen bg-gradient-to-b from-blue-200 to-green-200 dark:from-blue-900 dark:to-green-800 relative flex flex-col items-center gap-20 w-full pt-40 overflow-hidden",
        className
      )}
    >
      {children}
     
    </div>
  );
};
