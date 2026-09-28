import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const variants = {
  primary: "bg-[#B86F3C] text-[#F6EFE8] hover:bg-[#C67C46] active:bg-[#a56031]",
  secondary: "border border-[#241B14]/20 bg-transparent text-[#241B14] hover:bg-[#241B14] hover:text-[#EFE6D5]",
  ghost: "bg-transparent text-[#241B14] hover:text-[#B86F3C]",
};

export function Button({ href, children, variant = "primary", className = "", type = "button", onClick }: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

