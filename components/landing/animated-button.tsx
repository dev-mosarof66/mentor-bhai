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
  gradient = "bg-linear-to-r from-blue-500 via-red-400 to-blue-500",
  children,
  ...props
}: AuthButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "relative w-full rounded-md overflow-hidden",
        "flex items-center justify-center",
        "transition-transform duration-300 active:scale-[0.97]",
        className
      )}
    >
      {/* Rotating gradient background */}
      <motion.div
        className={cn(
          gradient,
          "absolute inset-0 blur-xl scale-[1.5]" // ensures full coverage
        )}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
      />

      {/* Inner mask */}
      <div className="absolute inset-0.5 bg-background/80 rounded-md" />
      {/* Content */}
      <span className="relative z-10 text-foreground font-medium">
        {children}
      </span>
    </button>
  );
};
