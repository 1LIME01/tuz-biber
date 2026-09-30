import type { CSSProperties, ReactNode } from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Heading({
  as: Tag = "h2",
  children,
  className = "",
  style,
}: HeadingProps) {
  return (
    <Tag style={style} className={`font-serif ${className}`.trim()}>
      {children}
    </Tag>
  );
}