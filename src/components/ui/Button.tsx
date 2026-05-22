"use client";

import React from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.PropsWithChildren<Omit<React.ComponentPropsWithoutRef<"button">, keyof MotionProps>> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", icon, children, href, ...props },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-display tracking-widest transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer overflow-hidden group";

    const variants = {
      primary:
        "bg-jp-charcoal text-jp-cream rounded-full border border-jp-charcoal hover:bg-transparent hover:text-jp-charcoal shadow-sm",
      secondary:
        "bg-jp-cream text-jp-charcoal rounded-full border border-jp-charcoal/10 hover:border-jp-charcoal hover:bg-jp-charcoal hover:text-jp-cream shadow-sm",
      outline:
        "bg-transparent text-jp-charcoal border border-jp-charcoal/20 rounded-full hover:border-jp-charcoal hover:bg-jp-charcoal/5",
      ghost:
        "bg-transparent text-jp-charcoal hover:bg-jp-charcoal/5 rounded-md",
      accent:
        "bg-jp-red text-jp-cream rounded-full border border-jp-red hover:bg-transparent hover:text-jp-red shadow-md",
    };

    const sizes = {
      sm: "px-5 py-2 text-xs",
      md: "px-8 py-3.5 text-sm",
      lg: "px-10 py-4.5 text-base",
    };

    const content = (
      <>
        {/* Subtle sliding background hover effect for outline/primary */}
        <span className="absolute inset-0 w-full h-full bg-jp-red/10 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
        
        <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
          {children}
          {icon && (
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              {icon}
            </span>
          )}
        </span>

        {/* Small premium Japanese stamp mark or accent dot */}
        {variant === "primary" && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-jp-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </>
    );

    if (href) {
      return (
        <motion.div
          ref={ref as any}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex"
        >
          <Link
            href={href}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
          >
            {content}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
