import type { ReactNode } from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  className?: string;
};

export function Heading({ as: Tag = "h2", children, className = "" }: HeadingProps) {
  return <Tag className={`font-serif ${className}`}>{children}</Tag>;
}

