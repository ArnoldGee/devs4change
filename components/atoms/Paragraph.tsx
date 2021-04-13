import cn from "classnames";
import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  size: "large" | "medium";
  className: string;
}

function Paragraph({ children, className, size = "medium" }: ParagraphProps): JSX.Element {
  return <p className={cn(size === "large" && "text-lg", "leading-snug", className)}>{children}</p>;
}

export default Paragraph;
