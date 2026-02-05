import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const baseStyles =
  "w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-800 dark:bg-black dark:text-zinc-100 dark:placeholder:text-zinc-500";

export default function Input({ className = "", ...props }: InputProps) {
  return <input className={`${baseStyles} ${className}`.trim()} {...props} />;
}

