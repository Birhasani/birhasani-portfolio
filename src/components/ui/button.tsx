import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-orange bg-orange text-primary-text shadow-[0_10px_28px_rgba(245,130,42,0.2)] hover:border-dark-orange hover:bg-dark-orange hover:text-white",
  secondary:
    "border-blue/35 bg-soft-blue text-dark-blue hover:border-blue hover:bg-blue hover:text-primary-text",
  ghost:
    "border-transparent bg-transparent text-primary-text hover:border-border hover:bg-muted-surface",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl border font-bold leading-none transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-[3px]",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
