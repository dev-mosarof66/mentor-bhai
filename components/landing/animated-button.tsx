"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  gradient?: string;
  children: ReactNode;
}

export const AuthButton = ({
  className,
  gradient = "bg-linear-to-r from-amber-700 via-transparent to-transparent",
  children,
  ...props
}: AuthButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "relative w-full rounded-md overflow-hidden mix-blend-color-dodge",
        "flex items-center justify-center",
        "transition-transform duration-300 active:scale-[0.97]",
        className
      )}
    >
      {/* Rotating gradient background */}
      <motion.div
        className={cn("absolute inset-0 blur-md scale-[1.5] ", gradient)}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
      />

      {/* Inner mask */}
      <div className="absolute inset-0.5 bg-background rounded-md" />
      {/* Content */}
      <span className="relative z-10 text-foreground font-medium">
        {children}
      </span>
    </button>
  );
};
