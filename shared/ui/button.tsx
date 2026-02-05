import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const baseStyles =
  "rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-500",
  secondary:
    "border border-zinc-200 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900",
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`.trim()}
      {...props}
    />
  );
}

