
'use client';

import * as React from "react";
import clsx from "clsx";
import { trackConversion } from "@/lib/track-conversion";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  trackEvent?: string;
  trackData?: Record<string, any>;
};

const base =
  "inline-flex items-center justify-center rounded-2xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-soft";

const variants = {
  primary: "bg-brand-green text-neutral-dark hover:opacity-90 focus:ring-brand-green",
  secondary: "bg-white text-neutral-dark hover:opacity-90 focus:ring-brand-blue",
  ghost: "bg-transparent text-white hover:bg-white/10 focus:ring-brand-blue",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-12 px-7 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", trackEvent, trackData, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (trackEvent) {
        trackConversion(trackEvent, trackData);
      }

      if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        onClick={handleClick}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
